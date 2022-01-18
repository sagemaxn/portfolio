import React from "react";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import { Button } from "@chakra-ui/react";
import { CustomInput } from "./FormInput";
import { ContactDocument, useContactMutation } from "../generated/graphql";

function Contact() {
  //const [contact, { data, loading, error }] = useMutation(ContactDocument)
  const [contact, { data }] = useContactMutation();

  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={async (values, actions) => {
        await contact();
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <CustomInput name="name" label="name" />
        <CustomInput name="message" label="message" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}

export default Contact;
