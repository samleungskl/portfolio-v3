const { extractFieldData } = require('./extractFieldData');
const inputObj = [
    {
        fields: {
            key1: '1',
            key2: '2',
            key3: '3',
        }
    },
    {
        fields: {
            key1: '4',
            key2: '5',
            key3: '6',
        }
    },
    {
        fields: {
            key1: '7',
            key2: '8',
            key3: '9',
        }
    }
];

const expectedResult = [
    {
        key1: '1',
        key2: '2',
        key3: '3',
    },
    {
        key1: '4',
        key2: '5',
        key3: '6',
    },
    {
        key1: '7',
        key2: '8',
        key3: '9',
    }
]

describe("Test extractField Data Function", () => {
    test("extract 'field' data from airtable returned Data", () => {
        expect(extractFieldData(inputObj)).toMatchObject(expectedResult);
    });
})