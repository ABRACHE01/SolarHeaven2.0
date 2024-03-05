import { useParams } from 'react-router-dom';


const DepartmentDetails = () => {

    let { departmentId } = useParams();

console.log(departmentId)
  return (
    <div>DepartmentDetails</div>
  )
}

export default DepartmentDetails