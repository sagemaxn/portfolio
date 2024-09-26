import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, Flex, Heading, useToast, VStack } from '@chakra-ui/react';
import { CustomInput } from './FormInput';
import { MessageInput } from './MessageInput';
import { useContactMutation } from '../generated/graphql';

function Contact() {
    const [contact] = useContactMutation();
    const toast = useToast();

    return (
        <Flex
            align="center"
            bg="gray.50"
            borderRadius="lg"
            boxShadow="lg"
            justify="center"
            marginBottom={[4, 6, 8]}
            p={[4, 6, 8]}
            w="full"
        >
            <Box maxW="800px" p={[4, 6, 8]} w="full">
                <Heading fontSize={['2xl', '3xl']} mb={6} textAlign="center">
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
                                    isLoading={props.isSubmitting}
                                    type="submit"
                                >
                                    Send Message
                                </Button>
                            </VStack>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
}

export default Contact;
