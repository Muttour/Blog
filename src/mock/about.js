import Mock from "mockjs";

Mock.mock('/api/about', 'get', {
    code: 0,
    msg: "",
    data: {
        url:'https://www.100chui.com/resume/detail-16265.html'
    },
})