
import { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  const handleSubmit = (event) => {
    event.preventDefault();

    // سيتم ربط النموذج بالـ Backend لاحقًا
    console.log("Form submitted");
  };

  return (
    <div
      className="login-popup"
      onClick={() => setShowLogin(false)}
    >
      <form
        className="login-popup-container"
        onClick={(event) => event.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="login-popup-title">
          <h2>{currentState}</h2>

          <button
            type="button"
            className="login-popup-close"
            onClick={() => setShowLogin(false)}
            aria-label="Close login popup"
          >
            &times;
          </button>
        </div>

        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              required
              autoComplete="name"
            />
          )}

          <input
            type="email"
            placeholder="Your email"
            required
            autoComplete="email"
          />

          <input
            type="password"
            placeholder="Password"
            required
            minLength={6}
            autoComplete={
              currentState === "Login"
                ? "current-password"
                : "new-password"
            }
          />
        </div>

        <button type="submit" className="login-popup-submit">
          {currentState === "Login" ? "Login" : "Create account"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" id="login-terms" required />
          <label htmlFor="login-terms">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>

        {currentState === "Login" ? (
          <p className="login-popup-switch">
            Don't have an account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>
              Create one
            </span>
          </p>
        ) : (
          <p className="login-popup-switch">
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
