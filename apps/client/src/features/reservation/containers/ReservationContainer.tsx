import { useGetAllReservationsQuery } from "../redux/ReservationApiSlice"

const ReservationContainer = () => {
  const {data:reservations } = useGetAllReservationsQuery({})
  reservations && console.log(reservations)
  return (
    <div>ReservationContainer</div>
  )
}

export default ReservationContainer