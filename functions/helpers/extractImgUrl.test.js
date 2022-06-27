const { extractImgUrl } = require('./extractImgUrl');

const inputObj = [
    {
        contentImage: [
            { url: 'www.testurl1.com' },
            { url: 'www.testurl2.com' }
        ]
    },
    {
        contentImage: [
            { url: 'www.testurl3.com' },
            { url: 'www.testurl4.com' }
        ]
    },
    {
        contentImage: [
            { url: 'www.testurl5.com' },
            { url: 'www.testurl6.com' }
        ]
    }
];

const expectedResult = [
    {
        contentImage: 'www.testurl1.com'
    },
    {
        contentImage: 'www.testurl3.com'
    },
    {
        contentImage: 'www.testurl5.com'
    }
];

const inputObjImageEmpty = [
    {
    },
    {
    },
    {
    }
];

const inputObjImageNotAry = [
    {
        contentImage: 'www.testurl1.com'
    },
    {
        contentImage: 'www.testurl3.com'
    },
    {
        contentImage: 'www.testurl5.com'
    }
];

describe("Test extractImgUrl Function", () => {
    test("extract ImgUrl from field", () => {
        expect(extractImgUrl(inputObj)).toMatchObject(expectedResult);
    });

    test("if key 'conentImage' doesn't exist, do nothing", () => {
        expect(extractImgUrl(inputObjImageEmpty)).toMatchObject(inputObjImageEmpty);
    });

    test("if key 'conentImage' is not an array, do nothing", () => {
        expect(extractImgUrl(inputObjImageNotAry)).toMatchObject(inputObjImageNotAry);
    });
})

