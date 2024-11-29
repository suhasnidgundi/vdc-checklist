import { useState, useEffect } from 'react';

function useSessionStore() {
    const [sessionData, setSessionData] = useState({});

    useEffect(() => {
        const data = {};
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            data[key] = sessionStorage.getItem(key);
        }
        setSessionData(data);
    }, []);

    console.log("SessionData",sessionData)

    return sessionData;
}

export default useSessionStore;