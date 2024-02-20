import { useGetAllCategoriesQuery } from "../redux/CategoryApiSlice"

const CategoryContainer = () => {
  const {data:categories } = useGetAllCategoriesQuery([])
  categories && console.log(categories)
  return (
    <div>CategoryContainer</div>
  )
}

export default CategoryContainer