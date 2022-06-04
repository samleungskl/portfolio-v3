import { useState, useEffect } from "react";

const airTableAPI = process.env.REACT_APP_AIRTABLE_API_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const Airtable = require('airtable');
const base = new Airtable({ apiKey: airTableAPI }).base(airTableBase);

export default function useApplicationData() {
    const [state, setState] = useState({
        projects: [],
        header: [],
        footer: [],
    });

    useEffect(() => {
        Promise.all([
            base('projects').select({ view: 'allProjects' }).all(),
            base('contents').select({ view: 'header' }).all(),
            base('contents').select({ view: 'footer' }).all(),
            base('buttons').select({ view: 'allButtons' }).all(),
        ]).then((all) => {
            const projects = matchButtonsIntoProjects(extractFieldData(all[0]), extractFieldData(all[3]))
            const header = extractImgUrl(extractFieldData(all[1]))
            const footer = extractImgUrl(extractFieldData(all[2]))

            setState(prev => ({
                ...prev,
                projects: projects,
                header: header,
                footer: footer,
            }));
        }).catch(err => {
            // Handle error.
            console.log('Error fetching data: ', err)
        })
    }, []);
    
    //extract only useful data from airtableAPI
    const extractFieldData = (dataAryOfObj) => {
        const result = dataAryOfObj.map(element => {
            return element.fields
        });
        return result
    }

    const extractImgUrl = (dataAryOfObj) => {
        const result = dataAryOfObj.map(element => {
            // if image field is not empty, and it is an array(because after extraction it is no longer an array, without this it will causes error)
            if (element.contentImage !== undefined && Array.isArray(element.contentImage)) {
                const imgUrl = element.contentImage[0].url
                element.contentImage = imgUrl
            }
            return element
        })
        return result
    }

    const matchButtonsIntoProjects = (projectsAryOfObj, buttonsAryOfObj) => {
        const result = projectsAryOfObj.map((element) => {
            const projectUid = element.projectUid
            const filteredBtn = buttonsAryOfObj.filter((element2) => {
                if (element2.showcase === undefined) {
                    return false
                } else {
                    return element2.showcase[0] === projectUid
                }
        })
            element.projectButtons = filteredBtn

            return element
        })
        return result
    }


    return {
        state
    };
}

