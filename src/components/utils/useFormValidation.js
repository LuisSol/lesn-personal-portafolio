import {useState, useEffect} from 'react'

const useFormValidation = (initialValues, validationFunction, modalFunc = null) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmiting, setSubmiting] = useState(false);
    const [subjectCharLeft, setSubjectCharLeft] = useState(100);
    const [messageCharLeft, setMessageCharLeft] = useState(300);

    useEffect(() => {
        if(isSubmiting){
            if(errors.isEmpty()){
                //send email
                modalFunc();
                setValues(initialValues);
            }
            setSubmiting(false);
        }
    }, [errors, isSubmiting, modalFunc, initialValues]);

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