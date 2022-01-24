import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import { Button } from "@chakra-ui/react";
import { CustomInput } from "./FormInput";
import { ContactDocument, useContactMutation, useTestQuery } from "../generated/graphql";

function Contact() {
  //const [contact, { data, loading, error }] = useMutation(ContactDocument)
 // const [contact, { data }] = useMutation(ContactDocument);
//const [b, setB] = useState('b')
const [contact, {data}] = useContactMutation()

  return (
    <div>
      {JSON.stringify(data)}
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={async (values, actions) => {
       await contact({variables: values});
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <CustomInput name="name" label="name" />
        <CustomInput name="email" label="email" />
        <CustomInput name="message" label="message" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
    <Button/>
    </div>
  );
}

export default Contact;
