import { useState, useEffect } from 'react';

function useJsonFetch(url, initial) {
    const [data, setData] = useState(initial)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(rates => {
                setData(rates);
            });
    }, [url]);

    return [data];
}

export default useJsonFetch
