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

module.exports = { matchButtonsIntoProjects };