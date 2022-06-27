const { base } = require('./airtable');
const formattedReturn = require('./formattedReturn');
const { extractFieldData } = require('./extractFieldData');
const { extractImgUrl } = require('./extractImgUrl');
const { matchButtonsIntoProjects } = require('./matchButtonsIntoProjects');
module.exports = async (event) => {
    try {
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