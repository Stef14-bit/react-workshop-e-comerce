import React from 'react'
import { Link } from 'react-router-dom'
import CategoriesList from '../components/categories-list/index'
import CategoryItem from '../components/category-item/index'
import axios from 'axios'

const data = [
    {
        id: 1,
        name: "Clothes",
        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6011",
    },
    {
        id: 2,
        name: "Electronics",
        image: "https://api.lorem.space/image/watch?w=640&h=480&r=304",
    },
    {
        id: 3,
        name: "Furniture",
        image: "https://api.lorem.space/image/furniture?w=640&h=480&r=9450",
    },
    {
        id: 4,
        name: "Shoes",
        image: "https://api.lorem.space/image/shoes?w=640&h=480&r=3133",
    },
    {
        id: 5,
        name: "Others",
        image: "https://api.lorem.space/image?w=640&h=480&r=4432",
    },
];


function Categories() {
    axios.get(`https://api.escuelajs.co/api/v1/categories`).then((res) => console.log(res)).catch((err) => console.warn(err, 'Error'))

    return (
        <div>
            <CategoriesList data={data} />
            <CategoryItem />
        </div>
    )
}

export default Categories