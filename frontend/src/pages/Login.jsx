import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { name, email, password, password2 } = formData;
  const Change = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
    }));
  };
  const FormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please Login to Continue</p>
      </section>
      <form onSubmit={FormSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Email"
            name="email"
            value={email}
            onChange={Change}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your Password"
            name="password"
            value={password}
            onChange={Change}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
