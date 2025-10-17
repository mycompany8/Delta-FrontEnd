import { useFormik } from "formik";
import React from "react";

function useForm(initialValues, onSubmit) {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });

  return formik
}

export default useForm;
