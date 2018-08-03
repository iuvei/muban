/**
  跟项目有关的配置信息
 */

// 配置商户有几个老虎机游戏平台，涉及转账
// 老虎机平台
const platform = [{
  name: 'PT平台',
  value: 'PT'
},
// {
//   name: 'QT平台',
//   value: 'QT'
// },
{
  name: 'DT平台',
  value: 'DT'
},
{
  name: 'NT平台',
  value: 'NT'
},
{
  name: 'MG平台',
  value: 'MG'
},
{
  name: 'PNG平台',
  value: 'PNG'
},
{
  name: 'TGP平台',
  value: 'TGP'
},
{
  name: 'CQ9平台',
  value: 'CQ9'
}
]

export const platformData = platform

// 其他平台，金流相关，转账，存提款
export const Money = [{
  name: '主账户',
  value: 'MAIN'
},
{
  name: '副账户',
  value: 'DEPUTY'
},
{ name: 'AG账户', value: 'AGIN' },
{ name: 'OG真人', value: 'OG' },
{ name: 'BBIN真人', value: 'BBIN' },
{ name: 'SUNBET真人', value: 'SUNBET' },
{ name: '沙巴体育', value: 'SB' },
{ name: '平博体育', value: 'PBSPORT' },
{ name: '761棋牌', value: 'City761' },
{name: 'VR彩票', value: 'VR'},
{name: '开元棋牌', value: 'KYQP'}
].concat(platform)

export const WEBCONFIG = {
  // 网站配置相关
  title: '亚冠娱乐', // 游戏名
  location: 'http://www.yg8080.com', // 主域名
  games: 'AG/PT/DT/NT/MG/PNG/DT/AG/TGP,CQ9', // 介绍有那些游戏平台
  appNative: 'bjhnative', // 调用app的协议
  onlyUser: false, // 设置登陆接口是否只能普通用户使用
  PtBefore: 'HE' // PT登陆前缀
}

// 跟商户文案配置有关的内容
export const SETTING = {
  // 普通用户
  qq: '2798806932', // qq客服
  email: 'cs.asiacrown088@gmail.com', // 客服邮箱
  SuggessEmail: 'cs.asiacrown088@gmail.com', // 投诉建议邮箱
  Tel: '+853 63824821', // 联系电话（新增）
  Skype: '1231', // skype联系方式(新增)
  live800: 'https://chat.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=1010257&configID=70771&jid=1476707010&s=1', // 在线客服地址
  wechat: 'xu319050569', // 微信客服
  // 代理用户
  qqAgent: '2388882055', // qq客服
  emailAgent: 'cs.asiacrown088@gmail.com', // 联系email
  telAgent: '+853 63824087 ', // 联系电话（新增）
  skypeAgent: '123', // skype联系方式(新增)
  live800Agent: 'https://chat.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=1010257&configID=70771&jid=1476707010&s=1', // 在线客服地址
  wechatAgent: 'Mm2465241', // 微信客服
  // vip
  qqVip: '',
  emailVip: '',
  telVip: '',
  skypeVip: '',
  live800Vip: 'https://chat.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=1010257&configID=70771&jid=1476707010&s=1',
  wechatVip: ''
}

export const Download = {
  // app APP地址在七牛管理，自动识别android和ios
  app: '', // app下载地址
  appQr: '', // app下载二维码//dt
  // dt DT找dt的同事要下载地址
  dtIos: 'http://down.dreamtech.asia/BJH/ios.html', // dtios下载地址
  dtIosQr: 'http://down.dreamtech.asia/BJH/ios.html', // dtios二维码
  dtAndroid: 'http://down.dreamtech.asia/BJH/android.html', // dt安卓版下载地址
  dtAndroidQr: 'http://down.dreamtech.asia/BJH/android.html', // dt安卓版下载地址二维码
  // PT的下载地址是固定的，目前在七牛云上管理,PT只有pt-pc端和pt安卓端
  ptpc: 'https://www.staticsources.com/app/pt/SetupCasino.exe', // pt电脑版下载地址
  ptMobile: 'https://www.staticsources.com/app/pt/app.html', // pt手机版下载地址
  ptMobileQr: '', // pt手机版下载地址二维码

  // ebet下载地址，第三方
  ebetMobile: 'http://www.ebetapp.com/****', // ebet手机
  // ag 真人下载地址
  agMobile: 'http://agmbet.com', // ag手机
  // ag捕鱼下载地址
  ag: 'http://hunter2.agmjs.com/ '
}

export const Games = {
  // 进入其他游戏的连接地址
  // 真人
  href_ag: '/gameAginReal.php', // ag 真人
  href_bbin: '/game/loginBBIN.php?gameType=live', // bbin真人
  href_sunbet: '/game/gameSUNBET.php', // 申博真人
  href_sunbetH5: '/game/gameSUNBET.php?type=1', // 申博真人，手机端
  href_og: '/game/gameOG.php', // OG真人
  href_ebet: '/gameEBET.php', // EBET真人

  // 体育
  href_pbsport: '/game/gamePBSPORT.php', // 平博体育
  href_sb_pc: '/game/loginSB.php', // 进入沙巴游戏pc
  href_sb_mobile: '/game/loginSBH5.php', // 进入沙巴游戏mobile

  // 捕鱼
  href_fish_pt: '/game/v2/gamePT.php?gameId=cashfi&isfun=0&deviceType=pc&lobbyUrl=' + window.location.href, // pt捕鱼真钱
  href_fish_pt_try: '/game/v2/gamePT.php?gameId=cashfi&isfun=1&deviceType=pc&lobbyUrl=' + window.location.href, // pt捕鱼试玩
  href_fish_ttg: '/game/v2/gameTTG.php?gameId=14900&gameName=EGIGAme&gameType=0&deviceType=pc&isfun=0&lobbyUrl=' + window.location.href, // ttg捕鱼
  href_fish_ttg_try: '/game/v2/gameTTG.php?gameId=14900&gameName=EGIGAme&gameType=0&deviceType=pc&isfun=1&lobbyUrl=' + window.location.href, // ttg捕鱼_try
  href_fish_ttg_mobile: '/game/v2/gameTTG.php?gameId=14900&gameName=EGIGAme&gameType=0&deviceType=mobile&isfun=0&lobbyUrl=' + window.location.href, // ttg捕鱼
  href_fish_ttg_try_mobile: '/game/v2/gameTTG.php?gameId=14900&gameName=EGIGAme&gameType=0&deviceType=mobile&isfun=1&lobbyUrl=' + window.location.href, // ttg捕鱼_try
  href_fish: '/gameAgFish.php', // AG捕鱼

  // 棋牌
  href_city761: '/game/gameCity761.php', // 761棋牌
  href_kyqp: '/game/gameKYQP.php', // 开元棋牌

  // 彩票
  href_vr: '/game/gameVR.php' // VR彩票
}
