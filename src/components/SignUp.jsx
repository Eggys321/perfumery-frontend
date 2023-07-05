import { useState } from "react";
import NavbarAccent from "../layouts/NavbarAccent";
import "../styles/SignUp.css";
import eyeclose from "../assets/eye-close.svg";
import eyeopen from "../assets/eye-open.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
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
      errors.email = "Enter a valid email!";
    }

    if (!firstname) {
      errors.firstname = "First name is required!";
    }

    if (!lastname) {
      errors.lastname = "Last name is required!";
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
    console.log(Object.keys(validationErrors));
  };

  const handleReveal = () => {
    setReveal(!reveal);
  };

  return (
    <div>
      <NavbarAccent />
      <div className="d-flex justify-content-center align-items-center parent">
        <div className="sign-In my-4">
          <div className="pb-1 sign-in-heading">
            <h1 className="mb-5 sign-in-header text-center">
              Create Your Account
            </h1>
            <p className="sign-in-sub-heading text-left">
              Create an account and benefit from a more personal shopping
              experience, and quicker online checkout.
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
            <div className="d-flex flex-column gap-1">
              <label htmlFor="firstname">FirstName</label>
              <input
                type="text"
                id="firstname"
                placeholder="Placeholder"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              {errors.firstname && (
                <p className="error-message">{errors.firstname}</p>
              )}
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="lastname">LastName</label>
              <input
                type="text"
                id="lastname"
                placeholder="Placeholder"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              {errors.lastname && (
                <p className="error-message">{errors.lastname}</p>
              )}
            </div>
            <div className="d-flex flex-column gap-1 password-input">
              <label htmlFor="password">Password</label>
              <input
                className=""
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
            <div className="d-flex flex-column gap-1">
              <p>
                By providing my information, I agree to Fame Perfumery’s
                <a className="px-1" href="#">
                  Privacy Policy and Legal Statement
                </a>
              </p>
            </div>
            <button type="submit" className="sign-in-btn">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
