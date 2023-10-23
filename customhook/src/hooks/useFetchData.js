import { useEffect, useState } from "react"

const useFetchData = (url) => {
    const [ data, setData ] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        };
        fetchPost();
    }, [url]);
    return { data };
}

export default useFetchData;