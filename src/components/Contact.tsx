import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import { Button, Heading } from "@chakra-ui/react";
import { CustomInput } from "./FormInput";
import { ContactDocument, useContactMutation, useTestQuery } from "../generated/graphql";
import SendAlert from './SendAlert'


function Contact() {
const [contact, {data}] = useContactMutation()

  return (
    <div>
    <Heading>Contact Me</Heading>
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={async (values, actions) => {
       await contact({variables: values});
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <CustomInput name="name" label="name" />
        <CustomInput name="email" label="email" type="email" required="true"/>
        <CustomInput name="message" label="message" required="true"/>
        <SendAlert />
      </Form>
    </Formik>
    <Button/>
    </div>
  );
}

export default Contact;
