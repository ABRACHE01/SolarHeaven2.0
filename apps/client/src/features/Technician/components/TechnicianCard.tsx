import { Link } from "react-router-dom"

const TechnicianCard = () => {
    const urlWithId = `/technician/`;

  return (
<div className="relative bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
    <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="static/path_to_image.jpg" alt="product designer"/>
    <h1 className="text-lg font-bold text-gray-700 dark:text-white">John Doe</h1>
    <h3 className="text-lg font-bold text-gray-700 dark:text-white">johndoe@example.com</h3>
    <h2 className="text-lg font-bold text-gray-700 dark:text-white">123-456-7890</h2>
    <h3 className="text-sm text-gray-400 m-4 ">Ph.D. in Electrical Engineering</h3>
    <p className="text-xs text-gray-400 ">10 years of experience</p>

    <button className="bg-green-500 px-8  py-2 mt-8  rounded-3xl font-semibold uppercase ">
    <Link to={urlWithId} className='no-underline text-gray-100'>Hire me</Link>
    </button>
</div>

  )
}

export default TechnicianCard