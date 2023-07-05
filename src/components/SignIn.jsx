import "../styles/SignIn.css";
import NavbarAccent from "../layouts/NavbarAccent";
import { Link } from "react-router-dom";
import { useState } from "react";
import eyeclose from "../assets/eye-close.svg";
import eyeopen from "../assets/eye-open.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [reveal, setReveal] = useState(false);

  const validateForm = () => {
    const errors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormatValid = emailPattern.test(email);

    if (!email) {
      errors.email = "Email is required!";
    } else if (!isFormatValid) {
      errors.email = "Enter valid email!";
    }

    if (!password) {
      errors.password = "Password is required!";
    } else if (password.length < 5) {
      errors.password = "Password length must be greater than 5!";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid");
    } else {
      setErrors(validationErrors);
    }
  };

  const handleReveal = () => {
    setReveal(!reveal);
  };

  return (
    <div>
      <NavbarAccent />
      <div className="d-flex justify-content-center align-items-center parent">
        <div className="sign-In my-4">
          <div className="text-center pb-1 sign-in-heading">
            <h1 className="mb-5 sign-in-header">Sign Into Your Account </h1>
            <p className="sign-in-sub-heading">
              Sign In with Your Email and Password.
            </p>
          </div>
          <form
            action=""
            className="d-flex flex-column gap-4"
            onSubmit={handleSubmit}
          >
            <div className="d-flex flex-column gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Placeholder"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="d-flex flex-column gap-1 password-input">
              <label htmlFor="password">Password</label>
              <input
                type={reveal ? "text" : "password"}
                id="paswword"
                placeholder="Placeholder"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                className="reveal-image"
                onClick={handleReveal}
                src={reveal ? eyeclose : eyeopen}
                alt=""
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>
            <Link to="/PasswordReset" className="text-black">
              Forgot Password?
            </Link>
            <div className="d-flex flex-column gap-1">
              <p>Remember me (optional)</p>
              <p>
                By providing my information, I agree to Fame Perfumery’s
                <a className="px-1" href="#">
                  Privacy Policy and Legal Statement
                </a>
              </p>
            </div>
            <button type="submit" className="sign-in-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
