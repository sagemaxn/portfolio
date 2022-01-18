import {FormControl, FormLabel, Input} from '@chakra-ui/react'
import {useField} from 'formik'

export const CustomInput = ({ label, ...props }: { [x: string]: any; name: string }): JSX.Element => {
    const [field, meta] = useField(props);
  
    return (
      <FormControl isInvalid={meta.touched && !!meta.error}>
        <FormLabel>
          {label}
        </FormLabel>
        <Input {...field} />
      </FormControl>
    );
}

