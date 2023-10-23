import React from 'react';
import { Form, Formik } from 'formik';
import {
    Button,
    Container,
    Flex,
    Heading,
    Box,
    useColorModeValue,
} from '@chakra-ui/react';
import { CustomInput } from './FormInput';
import { MessageInput } from './MessageInput';
import { useContactMutation } from '../generated/graphql';

function Contact() {
    const [contact] = useContactMutation();
    const buttonBg = useColorModeValue('blue.600', 'blue.300');
    const buttonHoverBg = useColorModeValue('blue.700', 'blue.200');
    const inputFocusBorderColor = useColorModeValue('blue.600', 'blue.300');
    const containerBg = useColorModeValue('gray.100', 'gray.700');

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={6}
            color={'white'}
        >
            <Box
                bg={'#0F172A'}
                borderRadius="lg"
                boxShadow="md"
                flexDirection="column"
                id={'contact'}
                p={6}
                maxWidth={'1200px'}
                width={'100%'}
                m="auto"
            >
                <Heading mb={6} textAlign="center">
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
                            <Flex flexDirection="column" alignItems="center" justifyContent="center">

                                <Box width="70%" mb={4}>
                                    <CustomInput
                                        focusBorderColor={inputFocusBorderColor}
                                        label="name"
                                        name="name"
                                    />
                                </Box>

                                <Box width="70%" mb={4}>
                                    <CustomInput
                                        focusBorderColor={inputFocusBorderColor}
                                        label="email"
                                        name="email"
                                        required={true}
                                        type="email"
                                    />
                                </Box>

                                <Box width="70%" mb={4}>
                                    <MessageInput
                                        focusBorderColor={inputFocusBorderColor}
                                        label="message"
                                        name="message"
                                        required={true}
                                    />
                                </Box>

                                <Button
                                    _hover={{
                                        bg: buttonHoverBg,
                                    }}
                                    bg={buttonBg}
                                    isLoading={props.isSubmitting}
                                    mt={4}
                                    type="submit"
                                >
                                    Send Message
                                </Button>
                            </Flex>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
}

export default Contact;
