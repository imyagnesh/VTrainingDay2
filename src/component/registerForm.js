import React from "react";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // if (!values.password) {
  //   errors.password = "Required";
  // } else if (values.password.length > 15) {
  //   errors.password = "Must be 15 characters or less";
  // }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.password && values.password.length < 10) {
    warnings.password = "Hmm, you seem a bit young...";
  }
  return warnings;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span style={{ color: "red" }}>{error}</span>) ||
          (warning && <span style={{ color: "orange" }}>{warning}</span>))}
    </div>
  </div>
);

let RegisterForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component={renderField} type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component={renderField} type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

RegisterForm = reduxForm({
  form: "register",
  validate: validate,
  warn
})(RegisterForm);

export default RegisterForm;
