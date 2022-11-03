import CategoriesList from '../components/categories-list/index'
import CategoryItem from '../components/category-item/index'
import useFetch from '../hooks/useFetch'



function Categories() {
    const [categoriesRes, errRes, isLoading] = useFetch(`https://api.escuelajs.co/api/v1/categories`)

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
            <CategoriesList>
                {categoriesRes.data.map(({ id, name, image }, index) => (
                    <CategoryItem key={id || index} name={name} image={image} />
                ))}

            </CategoriesList>
            <CategoryItem />
        </div>
    )
}

export default Categories