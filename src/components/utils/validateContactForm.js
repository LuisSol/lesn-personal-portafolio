export default (values) => {
    const errors = {};
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if( !values.email || values.email.trim().length === 0){
        errors.email = 'Please fill your email address.'
        
    }
    else if ( !emailRegex.test(values.email) ){        
        errors.email = 'Please enter a valid email address.'        
    }
    if( !values.subject || values.subject.trim().length === 0){
        errors.subject = 'Enter a subject for your message.';
    }
    else if ( values.subject.length > 100) {
        errors.subject = 'Subject must be maximum 100 characters long.'
    }
    if( !values.message || values.message.trim().length === 0){
        errors.message = 'Your message can\'t be empty.'
    }
    else if ( values.subject.length > 300) {
        errors.subject = 'Message must be maximum 300 characters long.'
    }

    const isEmpty = () => {
        return Object.keys(errors).length === 0
    }

    return { ...errors, isEmpty }
}