import { Link } from "react-router-dom"

const Logged_out = () => {
    return (
        <>          
                <Link to='https://vigya-registration.auth.us-east-1.amazoncognito.com/login?client_id=5cgb6f7cs1h6kf68buqokb9d8l&response_type=code&scope=aws.cognito.signin.user.admin+openid&redirect_uri=http://localhost:5173/logged_in'>Click here to log back in</Link>
                <h2> You have logged out now</h2>
                <Link to="../">Home</Link>
        </>
    )
  }
  
  export default Logged_out