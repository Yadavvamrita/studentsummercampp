import React, { useState } from "react";
import "./LandingPage.css";

const courses = [
  "Art & Craft",
  "Robotics",
  "Music",
  "Sports",
  "Science Experiments",
  "Drama & Theatre"
];

const StudentForm = () => {
  const [form, setForm] = useState({
    name: "",
    class: "",
    place: "",
    school: "",
    selectedCourses: []
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCourseChange = (e) => {
    const value = e.target.value;
    let updated = [...form.selectedCourses];
    if (updated.includes(value)) {
      updated = updated.filter((c) => c !== value);
    } else {
      if (updated.length < 2) {
        updated.push(value);
      } else {
        setError("You can select up to two courses only.");
        return;
      }
    }
    setError("");
    setForm({ ...form, selectedCourses: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.class || !form.place || !form.school) {
      setError("Please fill all the fields.");
      return;
    }
    if (form.selectedCourses.length < 1) {
      setError("Please select at least one course.");
      return;
    }
    setError("");
    alert(`Student Details:\nName: ${form.name}\nClass: ${form.class}\nPlace: ${form.place}\nSchool: ${form.school}\nCourses: ${form.selectedCourses.join(", ")}`);
    setForm({ name: "", class: "", place: "", school: "", selectedCourses: [] });
  };

  return (
    <div className="form-container">
      <h2>Student Registration Form</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />
        <label>Class</label>
        <input name="class" value={form.class} onChange={handleChange} required />
        <label>Place</label>
        <input name="place" value={form.place} onChange={handleChange} required />
        <label>School</label>
        <input name="school" value={form.school} onChange={handleChange} required />
        <label>Choose Courses (max 2)</label>
        <div className="course-options">
          {courses.map((course) => (
            <label key={course} className="course-checkbox">
              <input
                type="checkbox"
                value={course}
                checked={form.selectedCourses.includes(course)}
                onChange={handleCourseChange}
                disabled={
                  !form.selectedCourses.includes(course) && form.selectedCourses.length >= 2
                }
              />
              {course}
            </label>
          ))}
        </div>
        {error && <div className="form-error">{error}</div>}
        <button type="submit" className="cta-btn" style={{marginTop: '1.5rem'}}>Submit</button>
      </form>
    </div>
  );
};

export default StudentForm; 