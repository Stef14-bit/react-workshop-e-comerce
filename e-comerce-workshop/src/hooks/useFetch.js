import { useState, useEffect } from "react"
import axios from "axios"

function useFetch(url) {
    const [res, setRes] = useState([])
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(url).then((res) => setRes(res)).catch((err) => setErr(err, 'Error')).finally(() => setLoading(false))
    }, [])
    return [res, err, loading]
}

export default useFetch