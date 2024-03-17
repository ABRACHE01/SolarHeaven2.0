import { Grid } from "@mantine/core"
import TechnicianCard from "../components/TechnicianCard" 

const TechnicianContainer = () => {

  return (
    <div>
    <div className="max-w-6xl px-4 mx-auto md:max-w-4xl sm:max-w-2xl sm:px-6">
      <div className="text-center">
        <h1 className="max-w-md mx-auto text-3xl font-extrabold tracking-normal text-gray-700 sm:text-3xl md:text-4xl lg:text-4xl md:leading-none sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
          <span className="block">
            All Technicians in our organisation.
          </span>
        </h1>
      </div>
    </div>
    <Grid>
      <TechnicianCard/>
    </Grid>
  </div>  
  )
}

export default TechnicianContainer

