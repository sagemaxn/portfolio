import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, Heading, useToast, VStack } from '@chakra-ui/react';
import { CustomInput } from './FormInput';
import { MessageInput } from './MessageInput';
import { useContactMutation } from '../generated/graphql';

function Contact() {
    const [contact] = useContactMutation();
    const toast = useToast();

    return (
        <Box
            bg={'blue'}
            borderRadius="lg"
            boxShadow="md"
            color={'white'}
            id={'contact'}
            m={6}
            maxWidth="1200px"
            mx="auto"
            p={6}
            w={'full'}
        >
            <Heading mb={6} textAlign="center">
                Contact Me
            </Heading>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        const response = await contact({
                            variables: values,
                        });
                        if (
                            response.data?.contactMessage ===
                            'Email sent successfully'
                        ) {
                            toast({
                                title: 'Success',
                                description:
                                    'Your message has been sent successfully!',
                                status: 'success',
                                duration: 5000,
                                isClosable: true,
                            });
                            resetForm();
                        } else {
                            toast({
                                title: 'Error',
                                description:
                                    'Failed to send your message. Please try again later.',
                                status: 'error',
                                duration: 5000,
                                isClosable: true,
                            });
                        }
                    } catch (error) {
                        toast({
                            title: 'Error',
                            description:
                                'An unexpected error occurred. Please try again later.',
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        });
                        console.error('Error sending message', error);
                    }
                    setSubmitting(false);
                }}
            >
                {props => (
                    <Form>
                        <VStack align="stretch" spacing={4}>
                            <CustomInput
                                label="name"
                                name="name"
                                placeholder="Enter your name"
                            />
                            <CustomInput
                                label="email"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <MessageInput
                                label="message"
                                name="message"
                                placeholder="Enter your message"
                            />
                            <Button
                                colorScheme="whiteAlpha"
                                isLoading={props.isSubmitting}
                                type="submit"
                                width="full"
                            >
                                Send Message
                            </Button>
                        </VStack>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}
export default Contact;
