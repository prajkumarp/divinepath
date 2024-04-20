export interface ApiResponse<R> {
  respData: Array<RespData<R>>;
  respInfo: RespInfo;
}

export interface RespData<R> {
  busiCode: string;
  code?: string;
  isEncrypt: boolean;
  message: string;
  respMsg?: R;
  transactionId: string;
  logoutBusiCode: unknown;
}

export interface RespInfo {
  code: string;
  message: string;
}

export interface ErrorType {
  code: string;
  message: string;
}