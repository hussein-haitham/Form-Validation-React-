import { useState } from "react";

function useFormValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  function handleChange(event) {
    if (event.target.name === "phone") {
      const cleanValue = event.target.value.replace(/\D/g, "");
      const formattedValue =
        cleanValue.substr(0, 4) +
        "-" +
        cleanValue.substr(4, 3) +
        "-" +
        cleanValue.substr(7);
      setValues({
        ...values,
        [event.target.name]: formattedValue,
      });

      return;
    }
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleBlur(event) {
    //The validation rules constant holds all the validation functionsthat accepts the input value as a parameter
    const validationRules = {
      name: (value) => value.length > 0 && /^[a-zA-Z]+$/.test(value),
      number: (value) => !isNaN(value) && value.length > 0,
      email: (value) => /^\S+@\S+\.\S+$/.test(value),
      password: (value) => value.length >= 8,
      passwordCheck: (value) => value === values.password,
      phone: (value) => /^\d{4}-\d{3}-\d{4}$/.test(value),
      url: (value) =>
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(
          value
        ),
    };

    const errorMessage = {
      name: "Please enter a valid name *name shouldn't include numbers or spaces*",
      number: "Please enter a valid number",
      email: "Please enter a valid email address",
      password: "Password must be at least 8 characters long",
      passwordCheck: "Password must be identical",
      phone: "Please enter a valid phone number",
    };

    /*  If validation result returns false then the input value has error
     so we update the state with the new error */
    const validationResult = validationRules[event.target.name](
      event.target.value
    );
    const newError = validationResult ? "" : errorMessage[event.target.name];
    setErrors({
      ...errors,
      [event.target.name]: newError,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
  }

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}

export default useFormValidation;
