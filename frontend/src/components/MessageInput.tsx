import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { useField } from 'formik';

interface Props {
    label: string;
    name: string;
    required?: boolean;
    type?: string;
    placeholder: string;
}

export const MessageInput = ({ label, ...props }: Props): JSX.Element => {
    const [field, meta] = useField(props);

    return (
        <FormControl isInvalid={meta.touched && !!meta.error}>
            <FormLabel>{label}</FormLabel>
            <Textarea {...field} {...props} background={'white'} />
        </FormControl>
    );
};
