import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const classList = [
  "Art & Craft",
  "Robotics",
  "Music",
  "Sports",
  "Science Experiments",
  "Drama & Theatre"
];

const StudentForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    className: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.gender || !form.email || !form.className) {
      setError("Please fill all the fields.");
      return;
    }
    setError("");
    // Store in localStorage
    const students = JSON.parse(localStorage.getItem("students") || "[]");
    students.push(form);
    localStorage.setItem("students", JSON.stringify(students));
    // Redirect to landing page
    navigate("/");
  };

  return (
    <div className="form-bg">
      <div className="form-card">
        <h2 className="form-title">Registration Form</h2>
        <div className="form-subtitle">Fill out the form carefully for registration</div>
        <form className="student-form-grid" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Student Name</label>
            <div className="form-row">
              <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
              <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Please Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Student E-mail</label>
            <input name="email" type="email" placeholder="ex: myname@example.com" value={form.email} onChange={handleChange} />
            <div className="form-hint">example@example.com</div>
          </div>
          <div className="form-group">
            <label>List of Classes</label>
            <select name="className" value={form.className} onChange={handleChange}>
              <option value="">Please Select</option>
              {classList.map((cls) => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
          {error && <div className="form-error">{error}</div>}
          <button type="submit" className="form-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm; 