import CryptoJS from 'crypto-js';


const VR_1 = '13A2A669'
const VR_2 = 'MFL1Z9J7'

export function isEncrypt(): boolean {
    return true;
}


function getIV(): CryptoJS.lib.WordArray {
    const encIV = CryptoJS.enc.Utf8.parse(VR_1 + VR_2)
    console.log('====================================');
    console.log('ENC_IV', encIV);
    console.log('====================================');
    return encIV;
}

function getKey(key: string): CryptoJS.lib.WordArray {
    return CryptoJS.enc.Utf8.parse(key.slice(0, 32));
}

export function EncryptionInterceptor(
    data: any,
    key: string,
): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
        if (isEncrypt()) {
            try {
                const encrypted = CryptoJS.AES.encrypt(
                    CryptoJS.enc.Utf8.parse(JSON.stringify(data)), getKey(key), {
                    iv: getIV(),
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                });
                resolve(CryptoJS.enc.Base64.stringify(encrypted.ciphertext));
            } catch (e) {
                reject(e);
            }
        } else {
            return resolve(data);
        }
    });
    return promise;
}

export function DecryptionInterceptor(
    cipherData: any,
    isEncrypted: boolean,
    key: string,
): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
        if (isEncrypted) {
            const base64DecodedData = CryptoJS.enc.Base64.parse(cipherData)
            try {
                const decipher = CryptoJS.AES.decrypt(base64DecodedData.toString(CryptoJS.enc.Base64), getKey(key), {
                    iv: getIV(),
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                });
                const parsedData = CryptoJS.enc.Utf8.stringify(decipher)
                resolve(JSON.parse(parsedData));
            } catch (e) {
                reject(e);
            }
        } else {
            return resolve(cipherData);
        }
    });
    return promise;
}