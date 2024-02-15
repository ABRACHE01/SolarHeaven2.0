import CryptoJS from "crypto-js";

const encryptData = (data: any, secretKey: string = "secretKey"): string => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

const decryptData = (data: string, secretKey: string = "secretKey"): any => {
  const bytes = CryptoJS.AES.decrypt(data, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export { encryptData, decryptData };
