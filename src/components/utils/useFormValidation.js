import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/actions/modalActions';
import { db } from '../../firebase';
import { toast } from 'react-toastify';

const mailsRef = db.collection('mails')

const useFormValidation = (initialValues, validationFunction) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmiting, setSubmiting] = useState(false);
    const [subjectCharLeft, setSubjectCharLeft] = useState(100);
    const [messageCharLeft, setMessageCharLeft] = useState(300);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isSubmiting){
            if(errors.isEmpty()){
                //send email
                mailsRef.add({
                    email: values.email,
                    body: values.message,
                    subject: values.subject
                })
                .then(succ => {
                    toast.success('Thanks, i will reply you as soon as possible.', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true
                        });
                })
                .catch(err => {
                    toast.warning('Something went wrong please try again later.', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true
                    });
                    console.error(err);
                });
                dispatch(toggleModal());
                setValues(initialValues);
            }
            setSubmiting(false);
        }
    }, [errors, isSubmiting, initialValues, dispatch]);

    const handleSubmit =  (e) =>{
        e.preventDefault();
        setErrors(validationFunction(values));        
        setSubmiting(true);        
    }

    const handleBlur =  (e) =>{
        setErrors(validationFunction(values));
    }

    const handleChange = (e) => {
        if( e.target.id === 'subject' ) {
            setSubjectCharLeft(100 - e.target.value.length)
        }
        else if (e.target.id === 'message' ) {
            setMessageCharLeft(300 - e.target.value.length)
        }
        setValues({
            ...values,
            [e.target.id]: e.target.value
        });
    };

    return { handleSubmit, handleChange, handleBlur, 
             values, errors, isSubmiting, subjectCharLeft, messageCharLeft };
}

export default useFormValidation;