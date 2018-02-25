import React from 'react';
import { Field } from 'redux-form';
import Text from '../../components/text';
import Select from '../../components/select'

export const FormComponent = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="flex flex-column justify-center items-center">
      <h1>My Very own Form</h1>
      <form
        className="w-80"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          name="firstName"
          label="First Name"
          component={Text}
        />

        <Field
          name="lastName"
          label="Last Name"
          component={Text}
        />
        <Field
          name="email"
          label="Email"
          component={Text}
        />

        <Field
          name="meatChoice"
          label="Meat Choice"
          component={Select}
          options={{
            pork: 'Pork',
            beef: 'Beef',
            chicken: 'Chicken'
          }}
        />

        <button
          type="submit"
          className="link br2 bg-blue white dim pa3 f6 sans-serif b--blue ba"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
