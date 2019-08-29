import React from "react";
// import axios from "axios";
// import ReactDOM from "react-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import '../../styles/ContactForm.css';

function ContactForm({errors, touched, values, isSubmitting }) {
  return (
    <section className="contact-page">
        <img className="logo-image"
        src='../../../img/logo-icon.png'
        alt="logo" />
        <h3>Send us a message</h3>
        <Form className="contact-form">
        <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
          <label>Name</label>
          <Field
              className="contact-input"
              type="name"
              name="name"
          />
          </div>
          <div>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <label>Email</label>
          <Field
              className="contact-input"
              type="email"
              name="email"
          />
          </div>
          <div>
          {touched.note && errors.note && <p>{errors.note}</p>}
          <label>Message</label>
          <Field
              component="textarea"
              className="contact-input"
              type="text"
              name="note"
            />
            </div>
          <button type="submit" disabled={isSubmitting}>Submit</button>
          <button type="reset">Reset</button>
        </Form>
    </section>
  );
}

const FormikContactForm = withFormik({
  mapPropsToValues({name, email, note}){
    return {
      name: name || "",
      email: email || "",
      note: note || ""
    };
  },

   //======VALIDATION SCHEMA==========
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("A name is required"),
    email: Yup.string()
      .email("A valid email is required")
      .required("An email is required"),
    note: Yup.string()
      .required("A message is required")
  }),
  //======END VALIDATION SCHEMA==========

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
    /*axios
        .post("https://yourdatabaseurlgoeshere.com", values)
        .then(res => {
          console.log(res); 
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); 
          setSubmitting(false);
        });*/
  }
})(ContactForm);

export default FormikContactForm