import { Formik} from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
    StyledForm,
    StyledField,
    StyledError,
    StyledLable,
    Button,
  } from './ContactForm.styled';
  import { addContact } from 'Redux/ContactsSlise';
  import { useDispatch } from 'react-redux';



const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    number: Yup.string().min(6).max(10).required(''),
})

export const ContactForm = () => {

    const dispatch = useDispatch();
    const handleAddContact = (values, { resetForm }) => {
        dispatch(addContact({ ...values, id: nanoid() }));
        resetForm();
        
    };
   

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                validationSchema={ContactSchema}
                onSubmit={handleAddContact}
                >
                    <StyledForm autoComplete="off">
                        <StyledLable>
                            Name
                            <StyledField name="name" placeholder="Jane" />
                            <StyledError name="name" />
                        </StyledLable>
                        <StyledLable >
                            Number
                            <StyledField name="number" placeholder="Enter Phone"/>
                            <StyledError name="number" />
                        </StyledLable>
                        <Button type="submit">Add Contact</Button>
                    </StyledForm>
            </Formik>
        </div>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
  };