import { useState, useEffect } from 'react';
import  {Quote}  from '../constants/types';

const useFetch = (url: string): [Quote[] | null, boolean] => {
    const [data, setData] = useState<Quote[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return [data, loading];
};

export default useFetch;
