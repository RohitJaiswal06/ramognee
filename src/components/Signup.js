import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    country : "",
    state : "",
    city : "",
    pincode : "",
    mobileno : "",
    fax : "",
    phone : "",
    password : "",
    confirmPassword : ""
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    country : "",
    state : "",
    city : "",
    pincode : "",
    mobileno : "",
    fax : "",
    phone : "",
    password : "",
    confirmPassword : ""
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    if (!formData.firstname) {
        newErrors.firstname = "Firstname is required";
        valid = false;
    }
    if (!formData.lastname) {
        newErrors.lastname = "Lastname is required";
        valid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.address) {
        newErrors.address = "Address is required";
        valid = false;
    }

    if (!formData.country) {
        newErrors.country = "Country is required";
        valid = false;
    }

    if (!formData.state) {
        newErrors.state = "State is required";
        valid = false;
    }

    if (!formData.city) {
        newErrors.city = "City is required";
        valid = false;
    }

    

    if (!formData.pincode) {
        newErrors.pincode = "Pincode number is required";
        valid = false;
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

    if (!formData.confirmPassword) {
        newErrors.confirmPassword = "confirm password is required";
        valid = false;
    }

    if(formData.password!==formData.confirmPassword){
        newErrors.password = "Password not matching";
        valid = false;
    }

    // Add validations for other fields
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(validateForm());
    if (validateForm()) {
      // Handle form submission
      navigate("/login");
    } else {
      console.log("Form has validation errors");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
      <div style={{display: "flex"}}>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            placeholder="Firstname"
            className={errors.firstname ? "error" : ""}
          />
          
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            placeholder="Lastname"
            className={errors.lastname ? "error" : ""}
          />
          
          
          </div>
          <div className="error-message" style={{display:"flex"}}>
            <p style={{marginRight:"42.5%"}}>{errors.firstname}</p>
            <p>{errors.lastname}</p>
          </div>
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
          <input id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            className={errors.address ? "error" : ""}
          />
          <div className="error-message">{errors.address}</div>
        </div>
        <div style={{display:"flex"}}>
            <select name="country" value={formData.country} onChange={handleInputChange} className={errors.country ? "error" : ""}>
            <option value="">Select a country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Russia">Russia</option>
            </select>
          

            <select name="state" value={formData.state} onChange={handleInputChange} className={errors.state ? "error" : ""}>
            <option value="">Select a State</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Russia">Russia</option>
            </select>
        </div>
        <div className="error-message" style={{display:"flex"}}>
            <p style={{marginRight:"43.5%"}}>{errors.country}</p>
            <p>{errors.state}</p>
        </div>
        <div style={{display:"flex"}}>
            <select name="city" value={formData.city} onChange={handleInputChange} className={errors.city ? "error" : ""}>
            <option value="">Select a City</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Russia">Russia</option>
            </select>
          
        
          <input 
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            placeholder="Pincode"
            className={errors.pincode ? "error" : ""}
          />
        </div>
        <div className="error-message" style={{display:"flex"}}>
            <p style={{marginRight:"44.5%"}}>{errors.city}</p>
            <p>{errors.pincode}</p>
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
        <div>
          <input id="confirmpassword"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            className={errors.confirmPassword ? "error" : ""}
          />
          <div className="error-message">{errors.confirmPassword}</div>
        </div>
        {/* Add input fields for other form inputs */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
