const { base } = require('./airtable');
const formattedReturn = require('./formattedReturn');
const extractFieldData = require('./extractFieldData');

module.exports = async (event) => {
    try {

        //extract only data in key 'fields' from airtableAPI
        const extractFieldData = (dataAryOfObj) => {
            const result = dataAryOfObj.map(element => {
                return element.fields;
            });
            return result;
        };

        //extract ImgUrl from the list of Objects, and put it back into the array.
        const extractImgUrl = (dataAryOfObj) => {
            const result = dataAryOfObj.map(element => {
                // if image field is not empty, and it is an array(because after extraction it is no longer an array, without this it will causes error)
                if (element.contentImage !== undefined && Array.isArray(element.contentImage)) {
                    const imgUrl = element.contentImage[0].url;
                    element.contentImage = imgUrl;
                }
                return element;
            });
            return result;
        };

        //match the buttons to projects
        const matchButtonsIntoProjects = (projectsAryOfObj, buttonsAryOfObj) => {
            const result = projectsAryOfObj.map((element) => {
                const projectUid = element.projectUid;
                const filteredBtn = buttonsAryOfObj.filter((element2) => {
                    if (element2.showcase === undefined) {
                        return false;
                    } else {
                        return element2.showcase[0] === projectUid;
                    };
                });
                element.projectButtons = filteredBtn;
                return element;
            });
            return result;
        };

        const data = await Promise.all([
            base('projects').select({ view: 'allProjects' }).all(),
            base('contents').select({ view: 'header' }).all(),
            base('contents').select({ view: 'footer' }).all(),
            base('buttons').select({ view: 'allButtons' }).all(),
        ]);

        const extractedData = data.map((element) => {
            const fieldData = extractFieldData(element);
            const imgExtractedFieldData = extractImgUrl(fieldData);
            return imgExtractedFieldData;
        });

        const header = extractedData[1];
        const footer = extractedData[2];
        const projectsWithMatchedButtons = matchButtonsIntoProjects(extractedData[0], extractedData[3]);

        const result = {
            header: header,
            footer: footer,
            projects: projectsWithMatchedButtons,
        };

        return formattedReturn(200, result);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, { msg: 'Something went wrong' });
    };
};