export interface EditItem {
  id: string;
  cmd: string;
  value: string;
}

// 表单内的值
export interface OptionsItemValue {
  optionName: string;
  qqNumber: number;
  groupNumber: string;
  socketPort: number;
  authKey: string;

  pocket48RoomListener?: boolean;
  pocket48RoomId?: string;
  pocket48Account?: string;

  weiboListener?: boolean;
  weiboUid?: string;

  bilibiliLive?: boolean;
  bilibiliLiveId: string;

  groupWelcome?: boolean;
  groupWelcomeSend?: string;

  customCmd?: Array<EditItem>;
}

// 配置
export interface OptionsItem {
  id: string;
  name: string;
  value: OptionsItemValue;
}