import React from 'react'
import {Formik, Form} from 'formik'
import {Button} from '@chakra-ui/react'
import {CustomInput} from  './FormInput'

const Contact = () => {
    return (
      <div >
        <Formik initialValues={{name:''}} onSubmit={(val) => alert(val.name)}>
          <Form >
            <CustomInput name='name' label='name'/>
            <CustomInput name='message' label='message' />
            <Button type='submit'>Submit</Button>
          </Form>
        </Formik>
      </div>  
      )
}

export default Contact
