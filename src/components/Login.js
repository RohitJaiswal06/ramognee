import React, { useState } from 'react'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const [formData,setFormData]  = useState({
        email: "",
        password: "",
    })

    const [errors,setErrors]  = useState({
        email: "",
        password: "",
    })

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };
        if (!formData.email) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is not valid";
            valid = false;
        } else {
            newErrors.email = "";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
            valid = false;
        }
        else if(formData.password.length<8){
            newErrors.password = "Password must be of atleast 8 characters";
            valid = false;
        }
        else {
            newErrors.password = "";
        }

        setErrors(newErrors);
        return valid;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(validateForm());
        if (validateForm()) {
        // Handle form submission
            navigate("/products");
        } else {
            console.log("Form has validation errors");
        }
    }
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Login</h2>
      <form onSubmit={handleSubmit} className="signup-form">
      <div>
          <input id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className={errors.email ? "error" : ""}
          />
          <div className="error-message">{errors.email}</div>
        </div>
        <div>
          <input id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className={errors.password ? "error" : ""}
          />
          <div className="error-message">{errors.password}</div>
        </div>
        <div style={{color:"blue" , textAlign:"right",marginRight:"1.5%"}}>
            <Link to={"/reset-password"}>Forgot Password</Link>
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
        </form>
    </div>
  )
}

export default Login
