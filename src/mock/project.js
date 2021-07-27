import Mock from "mockjs";

Mock.mock('/api/project', 'get', {
    code: 0,
    msg: "",
    "data|0-6": [
        {
            "id|+1": "@id",
            name: "@title(3, 5)",
            "url|1": ["@url",null],
            "github|1": ["@url",null],
            "description|2-5": ['@cparagraph(1,3)'],
            thumb: ["@image('200x100', '#894FC4', '#FFF', 'png', 'demo')"],
            "order|+1": 1,
        },
    ]
})