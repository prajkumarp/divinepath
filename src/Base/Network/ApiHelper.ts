/* eslint-disable @typescript-eslint/no-explicit-any */
import store from '../Store/Store';
import CryptoJS from 'crypto-js';


const INITIALIZATION_VECTOR = '19A2B66D8F01Z9P7'

export function getTransactionId(): string {
  const transactionId = Date.now();
  return transactionId.toString().padStart(16, '0');
}
export function isEncrypt(): boolean {
  return true;
}

function getIV(): CryptoJS.lib.WordArray {
  return CryptoJS.enc.Utf8.parse(INITIALIZATION_VECTOR);
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

function formatDate(date: Date): string {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

export function usePubInfo() {
  const pubInfo = store.getState().user.PUB_INFO;
  if (pubInfo) {
    pubInfo.timestamp = formatDate(new Date());
    return pubInfo;
  }
}
