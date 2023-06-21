import { Link } from "react-router-dom"


const Register = () => {
  return (
    <>
        <div>Register</div>
        <Link to='https://vigya-registration.auth.us-east-1.amazoncognito.com/signup?client_id=5cgb6f7cs1h6kf68buqokb9d8l&response_type=code&scope=aws.cognito.signin.user.admin+openid&redirect_uri=http://localhost:5173/logged_in'>Click here to register</Link>
    </>
    
  )
}

export default Register