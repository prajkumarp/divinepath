import AsyncStorage from '@react-native-async-storage/async-storage';
import { EncryptionInterceptor, DecryptionInterceptor } from './CryptoHelper';


const storeEncryptedDataToAsyncStorage = async (key: string, encryptionKey: string, value: string) => {
    try {
        const encryptedValue = await EncryptionInterceptor(value, encryptionKey)
        await AsyncStorage.setItem(key, encryptedValue);
    } catch (e) {
        console.log('error storing encrypted data', e)
    }
};


const getEncryptedDataFromAsyncStorage = async (key: string, encryptionKey: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return (await DecryptionInterceptor(value, true, encryptionKey)) ?? ''
    } catch (e) {
        console.log('error getting decrypted data', e)
        return ''
    }
};

const storeDataToAsyncStorage = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log('error storing data', e)
    }
};


const getDataFromAsyncStorage = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value ?? ''
    } catch (e) {
        console.log('error getting data', e)
        return ''
    }
};

export { getEncryptedDataFromAsyncStorage, storeEncryptedDataToAsyncStorage, getDataFromAsyncStorage, storeDataToAsyncStorage }
