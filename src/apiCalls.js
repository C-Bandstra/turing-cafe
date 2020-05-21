export const fetchReservations = async (url) => {
  const response = await fetch('http://localhost:3001/api/v1/reservations')
  const promises = await response.json()
  return promises
}