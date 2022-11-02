import React from 'react'
import { Link } from 'react-router-dom'
import CategoriesList from '../components/categories-list/index'
import CategoryItem from '../components/category-item/index'

function Categories() {
    return (
        <div>
            <CategoriesList />
            <CategoryItem />
        </div>
    )
}

export default Categories