import { useGetAllDepartmentsQuery } from "../redux/DepartmentApiSlice"

const DepartmentsContainer = () => {
  const {data:departments } = useGetAllDepartmentsQuery({})
  departments && console.log(departments)
  return (
    <div>DepartmentsContainer</div>
  )
}

export default DepartmentsContainer