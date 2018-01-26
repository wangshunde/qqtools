/* 房间信息监听相关 */
const request = global.require('request');

// 请求头
const HEADERS: Object = {
  'os': 'android',
  'IMEI': '864394020501237',
  'version': '5.0.0',
  'Connection': 'Keep-Alive'
};

// 配置项
const reqOption: Object = {
  method: 'POST',
  headers: HEADERS,
  json: true
};

/**
 * 登录口袋48接口
 * @param { string } account : 用户名
 * @param { string } password: 密码
 */
export function login(account: string, password: string): Promise{
  return new Promise((resolve: Function, reject: Function)=>{
    request({
      ...reqOption,
      uri: 'https://puser.48.cn/usersystem/api/user/v1/login/phone',
      body: {
        password,
        account,
        longitude: 0,
        latitude: 0
      }
    }, (err: any, res: Object, body: Object): void=>{
      if(err){
        reject(err);
      }else{
        resolve(body);
      }
    });
  }).catch((err: Object): void=>{
    console.error(err);
  });
}

/**
 * 获取成员的相关信息
 * @param { number } memberId: 成员的ID
 */
export function requestMemberInformation(memberId: number): Promise{
  return new Promise((resolve: Function, reject: Function)=>{
    request({
      ...reqOption,
      uri: 'https://puser.48.cn/usersystem/api/user/member/v1/fans/room',
      body: {
        memberId
      }
    }, (err: any, res: Object, body: Object): void=>{
      if(err){
        reject(err);
      }else{
        resolve(body);
      }
    });
  }).catch((err: Object): void=>{
    console.error(err);
  });
}