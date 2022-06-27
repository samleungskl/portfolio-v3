//extract only data in key 'fields' from airtableAPI
const extractFieldData = (dataAryOfObj) => {
    const result = dataAryOfObj.map(element => {
        return element.fields;
    });
    return result;
};

module.exports = { extractFieldData };