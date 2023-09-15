import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="/images/loginLogo.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />

          <h5>Password</h5>
          <input type="password" />

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the amazon Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button className="register-btn">Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
