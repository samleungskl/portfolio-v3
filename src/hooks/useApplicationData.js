import { useState, useEffect } from "react";

export default function useApplicationData() {
    const [state, setState] = useState({
        projects: [],
        header: [],
        footer: [],
    });

    const loadData = async () => {
        try {
            const res = await fetch('/.netlify/functions/data')
            const result = await res.json()
            setState(prev => ({
                ...prev,
                projects: result.projects,
                header: result.header,
                footer: result.footer,
            }));
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        loadData();
    }, []);


    return {
        state
    };
}

