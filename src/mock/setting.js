import Mock from "mockjs";

Mock.mock('/api/setting', 'get', {
    code: 0,
    msg: "",
    data: {
        avatar: "",
        siteTitle: "我的个人空间",
        github: "",
        qq: "",
        qqQrCode:"",
        weixin: "",
        weixinQrCode:"",
        mail: "",
        icp: "",
        githubName: "",
        favicon: "",
    },
})