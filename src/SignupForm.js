import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import { TextField, Button } from '@material-ui/core';

const NewBoxForm = () => {
    const formik = useFormik({
        initialValues: { boxWidth: "10", boxHeight: "5", boxColor: "Red" },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <div>
            <h1>You can create a new box</h1>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="boxWidth"
                    name="boxWidth"
                    label="Box Width"
                    value={formik.values.boxWidth}
                    onChange={formik.handleChange}
                    error={formik.touched.boxWidth && Boolean(formik.errors.boxWidth)}
                    helperText={formik.touched.boxWidth && formik.errors.boxWidth}
                />
                <TextField
                    fullWidth
                    id="boxHeight"
                    name="boxHeight"
                    label="Box Height"
                    value={formik.values.boxHeight}
                    onChange={formik.handleChange}
                    error={formik.touched.boxHeight && Boolean(formik.errors.boxHeight)}
                    helperText={formik.touched.boxHeight && formik.errors.boxHeight}
                />
                <TextField
                    fullWidth
                    id="boxColor"
                    name="boxColor"
                    label="Box Color"
                    value={formik.values.boxColor}
                    onChange={formik.handleChange}
                    error={formik.touched.boxColor && Boolean(formik.errors.boxColor)}
                    helperText={formik.touched.boxColor && formik.errors.boxColor}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Create Box
        </Button>
            </form>
        </div>
    );
};

export default NewBoxForm;