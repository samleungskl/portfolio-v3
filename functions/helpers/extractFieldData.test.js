const extractFieldData = require('./extractFieldData');
const inputObj = {
    fields:{
        key1: '1',
        key2: '2',
        key3: '3',
    }
};

const expectedResult = {
    key1: '1',
    key2: '2',
    key3: '3',
}

describe("Test extractField Data Function", () => {
test('extracting field data from airtable returned Data', () => {
    expect(extractFieldData(inputObj)).toMatchObject(expectedResult);
  });
})