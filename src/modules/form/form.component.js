import React from 'react';
import { Field } from 'redux-form';

const FormComponent = ({ handleSubmit, onSubmit }) => {
  return (
    <div>
      <h1>My very own form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            name="firstName"
            component="input"
          />
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
