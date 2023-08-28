import React from 'react';
import { Form, Formik } from 'formik';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { CustomInput } from './FormInput';
import { MessageInput } from './MessageInput';
import { useContactMutation } from '../generated/graphql';

function Contact() {
    const [contact] = useContactMutation();

    return (
        <Flex flexDirection="column" mt={6}>
            <Heading mb={4} textAlign="center">
                Contact Me
            </Heading>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                onSubmit={async (values, actions) => {
                    await contact({ variables: values });
                    actions.setSubmitting(false);
                }}
            >
                {props => (
                    <Form>
                        <CustomInput label="name" name="name" />
                        <CustomInput
                            label="email"
                            name="email"
                            required={true}
                            type="email"
                        />
                        <MessageInput
                            label="message"
                            name="message"
                            required={true}
                        />
                        <Button
                            isLoading={props.isSubmitting}
                            mt={4}
                            type="submit"
                        >
                            Send Message
                        </Button>
                    </Form>
                )}
            </Formik>
        </Flex>
    );
}

export default Contact;
