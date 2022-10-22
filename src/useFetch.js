
import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] =useState(null)

    //we can use this for fetching data or see auth 
    //take a function every render of this comp it be called
    useEffect(() => {
        const abortCont = new AbortController()
        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                // console.log(res)
                if(!res.ok){
                    throw Error('could not fetch the data from that resource ')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false)
                setError(null)
            })
            .catch(err =>{
                if(err.name === 'AbortError'){
                    console.log("fetch aborted");
                }else{
                    // console.log(err.message);
                    //we may connect to server but response is not as we want so we need check res 
                    setIsPending(false)
                    setError(err.message)
                }
            })
        },1000)
        return () => abortCont.abort();
    }, [url])
    //second arg for which renders u want useEffect called
    //[] means will run in first render only
    //[name] we put in this array what var if changed this function run

    return {data, isPending, error}
}


export default useFetch