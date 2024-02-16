import { useGetDepartmentsQuery } from "../redux/dashApiSlice";

const DashContainer = () => {

  const { data: departments } = useGetDepartmentsQuery({});
  console.log(departments)
return(
  <>
  </>
)

};

export default DashContainer;