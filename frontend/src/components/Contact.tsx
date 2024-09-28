import React from 'react';
import { Form, Formik } from 'formik';
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    useToast,
    VStack,
} from '@chakra-ui/react';
import { CustomInput } from './FormInput';
import { MessageInput } from './MessageInput';
import { useContactMutation } from '../generated/graphql';

function Contact() {
    const [contact] = useContactMutation();
    const toast = useToast();

    return (
        <Box id="contact" pb={'sm'} w="100%">
            <Flex
                bg="rgba(255, 255, 255, 0.5)"
                borderRadius="lg"
                boxShadow="lg"
                direction={['column', 'column', 'row']}
                justify="space-between"
                mb={['sm', 'lg', 'xl']}
                p={[4, 6, 8]}
                w="full"
                zIndex={1}
            >
                <Box maxW="800px" p={4} w={['full', 'full', '50%']}>
                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        onSubmit={async (
                            values,
                            { setSubmitting, resetForm },
                        ) => {
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
                                    <Heading fontSize={['4xl', '5xl', '6xl']}>
                                        Contact Me
                                    </Heading>
                                    <CustomInput
                                        label="Name"
                                        name="name"
                                        placeholder="Type your name..."
                                    />
                                    <CustomInput
                                        label="Email"
                                        name="email"
                                        placeholder="Type your email..."
                                        type="email"
                                    />
                                    <MessageInput
                                        label="About"
                                        name="message"
                                        placeholder="Type your message..."
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
                <Box
                    alignItems="center"
                    display="flex"
                    justifyContent="center"
                    mb={'2'}
                    p={4}
                    w={['full', 'full', '50%']}
                >
                    <Image
                        alt='simple drawing of a "sage" (wise man) meditating'
                        boxSize={['200px', '250px', '300px']}
                        objectFit="contain"
                        src="/images/sage.svg"
                    />
                </Box>
            </Flex>
        </Box>
    );
}

export default Contact;
