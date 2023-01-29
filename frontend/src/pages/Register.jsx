import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const Change = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
      [e.target.password2]: e.target.value,
    }));
  };
  const FormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <form onSubmit={FormSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Name"
            name="name"
            value={name}
            onChange={Change}
          />
        </div>
        <div className="form-group">
          {" "}
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
          <input
            type="password"
            className="form-control"
            placeholder="Confirm your Password"
            name="password2"
            value={password2}
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
export default Register;
