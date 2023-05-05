import React, { useState } from "react";
import { db } from "../firebase-config"
import {collection, addDoc} from "firebase/firestore"
import "./Contact.css";


const ContactForm = () => {

  const submissionCOllectionref = collection(db, "submissions")

  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    contactno: "",
    college: "",
    year: "",
    ieeeid: "",
    choose_team: "",
    skills: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(submissionCOllectionref, formData)
    setFormData({
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      contactno: "",
      college: "",
      year: "",
      ieeeid: "",
      choose_team: "",
      skills: "",
    });
    // You can send the form data to a server or API using fetch or Axios
    // and handle the response accordingly
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <div className="contact-area" id="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="contact-header section-header">Contact Us</h1>
        <div className="form-name col">
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="firstname input"
          />
          <input
            type="text"
            name="middlename"
            id="middlename"
            placeholder="Middle"
            value={formData.middlename}
            onChange={handleChange}
            className="middlename input"
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last"
            value={formData.lastname}
            onChange={handleChange}
            required
            className="lastname input"
          />
        </div>
        <div className="col">
          <input
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="email input"
            required
          />
          <input
            type="number"
            name="contactno"
            id="contactno"
            placeholder="Contact number"
            value={formData.contactno}
            onChange={handleChange}
            required
            className="contactno input"
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="college"
            id="college"
            placeholder="college"
            value={formData.college}
            onChange={handleChange}
            required
            className="college input"
          />
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="year input"
          >
            <option value={0}>Year</option>
            <option value={1}>UG1</option>
            <option value={2}>UG2</option>
            <option value={3}>UG3</option>
            <option value={4}>UG4</option>
            <option value={5}>PG1</option>
          </select>
        </div>
        <div className="col">
          <input
            type="number"
            name="ieeeid"
            id="ieeeid"
            placeholder="IEEE Id"
            value={formData.ieeeid}
            onChange={handleChange}
            required
            className="ieeeid input"
          />
          <select
            id="choose_team"
            name="choose_team"
            value={formData.choose_team}
            onChange={handleChange}
            required
            className="choose_team input"
          >
            <option value="">Choose Team</option>
            <option value="tech">Tech</option>
            <option value="content">Content</option>
            <option value="logistics">Logistics</option>
            <option value="PR">PR</option>
          </select>
        </div>
        <div className="col">
          <textarea
            name="skills"
            id="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            placeholder="skills"
            className="input-skills input"
            row={5}
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
