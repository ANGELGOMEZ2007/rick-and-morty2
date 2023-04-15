import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const ApiUrl = (url) => {

    const [apiUrl, setApiUrl] = useState()

    useEffect(() => {

        

        axios.get(url)
            .then(res => setApiUrl(res.data))
            .catch(err => console.log(err))

    }, [url])

    return apiUrl
}

export default ApiUrl