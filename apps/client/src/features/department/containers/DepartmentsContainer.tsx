import DepartmentCard from "../components/DepartmentCard";
import { useGetAllDepartmentsQuery } from "../redux/DepartmentApiSlice";
import { Grid } from "@mantine/core";

const DepartmentsContainer = () => {
  const { data: departments }: any  = useGetAllDepartmentsQuery({});
  departments && console.log(departments);

  return (
    <div>
      <div className="max-w-6xl px-4 mx-auto md:max-w-4xl sm:max-w-2xl sm:px-6">
        <div className="text-center">
          <h1 className="max-w-md mx-auto text-3xl font-extrabold tracking-normal text-gray-700 sm:text-3xl md:text-4xl lg:text-4xl md:leading-none sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
            <span className="block">
              Select department you want to serve by.
            </span>
          </h1>
        </div>
      </div>
      <Grid>
        {departments &&
          departments.map((department: any, index: number) => (
            <Grid.Col key={index} span={3}>
              <DepartmentCard data={department} />
            </Grid.Col>
          ))}
      </Grid>
    </div>
  );
};

export default DepartmentsContainer;
