import { Link } from "react-router-dom"

const Logged_in = () => {
  return (
    <>
        <h2>You are logged in now</h2>
        <Link to='https://vigya-registration.auth.us-east-1.amazoncognito.com/logout?client_id=5cgb6f7cs1h6kf68buqokb9d8l&logout_uri=http://localhost:5173/logout'>Logout</Link>    </>

  )
}

export default Logged_in