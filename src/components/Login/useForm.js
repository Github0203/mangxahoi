import { useState, useEffect } from "react";

const useForm1 = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors1, setErrors1] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors1).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors1]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors1(validate(values));
    setIsSubmitting(true);
  };

  const handleChange1 = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange1,
    handleSubmit,
    values,
    errors1
  };
};

export default useForm1;
