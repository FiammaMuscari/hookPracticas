import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
    })


    const getFetch = async () =>{

        setState({
            ...state,
            isLoading: true,
        })
        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
        })
    }

    useEffect(() => {      
        getFetch()
    }, [url])
    

    return {
        data: state.data,
        isLoading: state.isLoading,
    }
}
