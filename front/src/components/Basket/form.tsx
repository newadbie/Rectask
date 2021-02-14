import React, { FC, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { GetPayData } from "../../selectors";
import { goNext, setPayData } from "../../slices/basketSlice";

import { PayData } from "../../types";

import { useFormik } from "formik";
import * as yup from "yup";
import InputMask from "react-input-mask";

import { Grid, Typography, TextField, Button } from "@material-ui/core";

const validationSchema = yup.object({
  name: yup.string().required("Name is required").trim(),
  surname: yup.string().required("Surname is required").trim(),
  address: yup.string().required("Your address is required"),
  zip_code: yup
    .string()
    .required("Postcode is required")
    .matches(/[0-9]{2}\-[0-9]{3}/, "Must be only digits")
    .min(6, "Must be exactly 5 digits") // DASH is included!
    .max(6, "Must be exactly 5 digits"), // DASH is included!
});

const Form: FC = () => {
  const dispatch = useDispatch();
  const payData = useSelector(GetPayData);

  const submitHandler = (valuesState: any) => {
    const validData: PayData = {
      address: valuesState.address,
      name: valuesState.name,
      surname: valuesState.surname,
      zip_code: valuesState.zip_code,
    };
    dispatch(setPayData(validData));
    dispatch(goNext());
  };

  const formik = useFormik({
    initialValues: {
      name: payData.name,
      surname: payData.surname,
      address: payData.address,
      zip_code: payData.zip_code,
    },
    validationSchema: validationSchema,
    onSubmit: submitHandler,
  });

  useEffect(() => {
    formik.values.name = payData.name;
    formik.values.surname = payData.surname;
    formik.values.address = payData.address;
    formik.values.zip_code = payData.zip_code;
  }, [payData]);

  return (
    <section>
      <header>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Enter your address!
        </Typography>
      </header>
      <main>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="name"
                name="surname"
                label="Surname"
                value={formik.values.surname}
                onChange={formik.handleChange}
                error={formik.touched.surname && Boolean(formik.errors.surname)}
                helperText={formik.touched.surname && formik.errors.surname}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                fullWidth
                id="address"
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputMask
                mask="99-999"
                value={formik.values.zip_code}
                onChange={formik.handleChange}
              >
                {() => (
                  <TextField
                    fullWidth
                    id="zip_code"
                    name="zip_code"
                    label="Zip Code"
                    error={
                      formik.touched.zip_code && Boolean(formik.errors.zip_code)
                    }
                    helperText={
                      formik.touched.zip_code && formik.errors.zip_code
                    }
                  />
                )}
              </InputMask>
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Form;
