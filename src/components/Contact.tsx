import React from 'react';
import { Form, Formik } from 'formik';
import { Button, Heading } from '@chakra-ui/react';
import { CustomInput } from './FormInput';
import { useContactMutation } from '../generated/graphql';
import SendAlert from './SendAlert';

function Contact() {
    const [contact] = useContactMutation();

    return (
        <div>
            <Heading>Contact Me</Heading>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                onSubmit={async (values, actions) => {
                    await contact({ variables: values });
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <CustomInput label="name" name="name" />
                    <CustomInput
                        label="email"
                        name="email"
                        required={true}
                        type="email"
                    />
                    <CustomInput
                        label="message"
                        name="message"
                        required={true}
                    />
                    <SendAlert />
                </Form>
            </Formik>
            <Button />
        </div>
    );
}

export default Contact;
