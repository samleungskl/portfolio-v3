const { matchButtonsIntoProjects } = require('./matchButtonsIntoProjects');

const inputObjProjectAry = [
    {
        projectUid: 'ABCD12345'
    },
    {
        projectUid: 'ABCD45678'
    },
    {
        projectUid: 'XYZA04567'
    }
];

const btnObjProjectAry = [
    {
        btnname: 'btn1',
        showcase: ['ABCD12345']
    },
    {
        btnname: 'btn2',
        showcase: ['ABCD12345']
    },
    {
        btnname: 'btn3',
        showcase: ['ABCD12345']
    },
    {
        btnname: 'btn4',
        showcase: ['ABCD45678']
    },
    {
        btnname: 'btn5'
    },
]

const expectedResult = [
    {
        projectUid: 'ABCD12345',
        projectButtons: [
            {
                btnname: 'btn1',
                showcase: ['ABCD12345']
            },
            {
                btnname: 'btn2',
                showcase: ['ABCD12345']
            },
            {
                btnname: 'btn3',
                showcase: ['ABCD12345']
            }
        ]
    },
    {
        projectUid: 'ABCD45678',
        projectButtons: [
            {
                btnname: 'btn4',
                showcase: ['ABCD45678']
            }
        ]
    },
    {
        projectUid: 'XYZA04567',
    }
];

const btnObjProjectAryEmpty = [{}, {}, {}]
const inputObjProjectAryEmpty = [{}, {}, {}]

describe("Test matchButtonIntoProject Function", () => {
    test("extract related buttons and insert it into the relevent asin Object", () => {
        expect(matchButtonsIntoProjects(inputObjProjectAry, btnObjProjectAry)).toMatchObject(expectedResult);
    });

    test("project without buttons", () => {
        expect(matchButtonsIntoProjects(inputObjProjectAry, btnObjProjectAryEmpty)).toMatchObject(inputObjProjectAry);
    });

    test("buttons without projects", () => {
        expect(matchButtonsIntoProjects(inputObjProjectAryEmpty, btnObjProjectAry)).toMatchObject(inputObjProjectAryEmpty);
    });
})