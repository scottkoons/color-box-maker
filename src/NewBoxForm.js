import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import React, { useState } from "react";
import { Button, Container } from '@material-ui/core';
// import { Box } from '@material-ui/core/styles';

const NewBoxForm = () => {
    return (
        <>
            <Container>
                <Button variant="contained" color="primary">
                    NewBoxForm Btn
            </Button>
            </Container>
        </>
    );
};

export default NewBoxForm;