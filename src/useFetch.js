import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error('Could not find result from the resource');
                    }
                    return res.json();
                })
                .then(data => {
                    // console.log(data);
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsLoading(false);
                        setError(err.message);
                    }
                }) 
        }, 1000);//Don't set time out on real project when fetching data so you won't force ur users to wait a little longer.

        // return () => abortCont.abort();

    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;