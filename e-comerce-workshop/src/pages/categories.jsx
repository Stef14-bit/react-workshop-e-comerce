import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CategoriesList from '../components/categories-list/index'
import CategoryItem from '../components/category-item/index'
import axios from 'axios'
import { useState } from 'react'

// const data = [
//     {
//         id: 1,
//         name: "Clothes",
//         image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6011",
//     },
//     {
//         id: 2,
//         name: "Electronics",
//         image: "https://api.lorem.space/image/watch?w=640&h=480&r=304",
//     },
//     {
//         id: 3,
//         name: "Furniture",
//         image: "https://api.lorem.space/image/furniture?w=640&h=480&r=9450",
//     },
//     {
//         id: 4,
//         name: "Shoes",
//         image: "https://api.lorem.space/image/shoes?w=640&h=480&r=3133",
//     },
//     {
//         id: 5,
//         name: "Others",
//         image: "https://api.lorem.space/image?w=640&h=480&r=4432",
//     },
// ];


function Categories() {
    const [categoriesRes, setCategoriesRes] = useState([])
    const [errRes, setErrRes] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/XOXOX/v1/categories`).then((res) => setCategoriesRes(res)).catch((err) => setErrRes(err, 'Error')).finally(() => setLoading(false))

    }, [])
    console.log(isLoading, 'Is Loading')

    if (isLoading) {
        return <h2>request is still in process, loading..</h2>;
    }
    if (errRes) {
        console.log("error: ", errRes);
        return <h2>an error has occurred, please contact the support</h2>;
    }

    return (
        <div>
            <CategoriesList data={categoriesRes.data} />
            <CategoryItem />
        </div>
    )
}

export default Categories