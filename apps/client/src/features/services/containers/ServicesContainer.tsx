import { Grid } from "@mantine/core"
import { useGetAllServicesQuery } from "../redux/ServiceApiSlice"
import ServiceCard from "../components/ServiceCard";


const ServicesContainer = () => {
  const {data:services } = useGetAllServicesQuery({})
  services && console.log(services)
  return (
    <div>
    <div className="max-w-6xl px-4 mx-auto md:max-w-4xl sm:max-w-2xl sm:px-6">
      <div className="text-center">
        <h1 className="max-w-md mx-auto text-3xl font-extrabold tracking-normal text-gray-700 sm:text-3xl md:text-4xl lg:text-4xl md:leading-none sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
          <span className="block">
            All services th t ower department offer.
          </span>
        </h1>
      </div>
    </div>
    <Grid>
      {services &&
        services.map((service: any, index: number) => (
          <Grid.Col key={index} span={3}>
            <ServiceCard data={service} />
          </Grid.Col>
        ))}
    </Grid>
  </div>  
  )
}

export default ServicesContainer