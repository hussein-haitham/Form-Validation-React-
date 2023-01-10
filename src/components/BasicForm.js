import useFormValidation from "./useFormValidation";

function BasicForm() {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation({
    name: "",
    number: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.name && "error"}
      />
      {errors.name && <p className="error-message">{errors.name}</p>}
      <label>Phone number</label>
      <input
        type="text"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.phone && "error"}
      />
      {errors.phone && <p className="error-message">{errors.phone}</p>}
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && "error"}
      />
      {errors.email && <p className="error-message">{errors.email}</p>}
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && "error"}
      />

      {errors.password && <p className="error-message">{errors.password}</p>}
      <label>Re-enter password</label>
      <input
        type="password"
        name="passwordCheck"
        value={values.passwordCheck}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.passwordCheck && "error"}
      />

      {errors.passwordCheck && (
        <p className="error-message">{errors.passwordCheck}</p>
      )}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
}
export default BasicForm;
