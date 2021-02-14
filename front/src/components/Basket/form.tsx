import { Typography, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { FC } from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Name is required").trim(),
  surname: yup.string().required("Surname is required").trim(),
  address: yup.string().required("Your address is required"),
  postCode: yup
    .string()
    .required("Postcode is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
});

const Form: FC = () => {
  const submitForm = (values: any) => {};

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      address: "",
      postCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: submitForm,
  });
  return (
    <section>
      <header>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Enter your address!
        </Typography>
      </header>
      <main>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </form>
      </main>
    </section>
  );
};

export default Form;
