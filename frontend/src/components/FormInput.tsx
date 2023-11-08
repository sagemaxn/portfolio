import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'formik';

interface Props {
    label: string;
    name: string;
    required?: boolean;
    type?: string;
    placeholder: string;
}

export const CustomInput = ({ label, ...props }: Props): JSX.Element => {
    const [field, meta] = useField(props);

    return (
        <FormControl isInvalid={meta.touched && !!meta.error}>
            <FormLabel>{label}</FormLabel>
            <Input {...field} {...props} />
        </FormControl>
    );
};
