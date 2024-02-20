import { useGetAllServicesQuery } from "../redux/ServiceApiSlice"

const ServicesContainer = () => {
  const {data:services } = useGetAllServicesQuery({})
  services && console.log(services)
  return (
    <div>ServicesContainer</div>
  )
}

export default ServicesContainer