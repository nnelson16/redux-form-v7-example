import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import FormComponent from './form.component';

export const FormContainer = ({ handleSubmit , formValues, change }) => {
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  }

  return (
    <FormComponent onSubmit={submitForm}
      handleSubmit={handleSubmit}
      formValues={formValues}
      change={change}
    />
  );
}

const mapStateToProps = state => ({
  formValues: getFormValues('my-very-own-form')(state),
});
const formConfiguration = {
  form: 'my-very-own-form',
}

export default connect(mapStateToProps)(
  reduxForm(formConfiguration)(FormContainer)
);
