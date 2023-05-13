import { useRef, useState } from 'react';

import { useFormikContext } from 'formik';

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react';

function SendAlert() {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();

    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
        onClose();
    };

    return (
        <>
            <Button colorScheme="red" onClick={() => setIsOpen(true)}>
                Send Message
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Send Message
                        </AlertDialogHeader>

                        <AlertDialogBody>Send Message?</AlertDialogBody>

                        <AlertDialogFooter>
                            <Button onClick={onClose} ref={cancelRef}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={() => handleSubmit()}
                            >
                                Send
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

export default SendAlert;
