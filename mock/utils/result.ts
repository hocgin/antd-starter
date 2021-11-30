/**
 * 模拟返回结构
 */
export default function result(
  success: boolean,
  message: string,
  data?: any) {
  return {
    success: success,
    message: message,
    data: data,
  };
};

export function success(data = null) {
  return result(true, 'ok', data);
}

export function error(message = 'error', data = null) {
  return result(false, message, data);
}
