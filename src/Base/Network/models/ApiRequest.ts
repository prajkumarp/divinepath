import { PubInfo } from './GenericModels';

export interface ApiRequest<T> {
  device_data: DeviceData<T>
}

export interface DeviceData<T> {
  pubInfo: PubInfo;
  requestList: Array<Request<T>>;
}

export interface Request<T> {
  busiCode: string;
  busiParams: T;
  isEncrypt: boolean;
  transactionId: string;
}