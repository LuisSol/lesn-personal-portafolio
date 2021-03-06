import React from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';
import useFormValidation from './utils/useFormValidation';
import validateContactForm from './utils/validateContactForm';
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../redux/actions/modalActions'

const ContactForm = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    label {
        display: block;
        margin-top: 1.2rem;
        margin-bottom: .5rem;
        color: #444;
    }            
    textarea {
        resize: none;
        border-color: #CCC;
    }
    input {
        border: none;
        border-bottom: 1px solid #CCC;
        width: 100%;
    }
    textarea {
        width: 100%;
    }
    input:focus, textarea:focus {
        outline: none;
        border-color: #222;
    }
    input[type="submit"] {
        cursor: pointer;
        letter-spacing: .1rem;
        margin-top: 1.5rem;
        height: 2.5rem;
        border: 1px solid #CCC;
        border-radius: 7px;
        color: #FFF;
        font-weight: 600;
        background: rgb(133,255,37);
        background: linear-gradient(180deg, rgba(123,245,27,1) 0%, rgba(23,136,57,1) 100%);        
    }  
    input[type="submit"]:hover {
        background: rgb(90,172,25);
        background: linear-gradient(180deg, rgba(90,172,25,1) 0%, rgba(16,94,39,1) 100%);        
    }
    input[type="submit"]:active {
        background: rgb(62,113,21);
        background: linear-gradient(180deg, rgba(62,113,21,1) 0%, rgba(9,54,22,1) 100%);        
    }
    label:first-child {     
        margin-top: 0;
    }  
    input.error, textarea.error  {
        border-color: red;
    }    
    p.error {
        position: absolute;
        margin: 0;
        padding: 0;
        font-size: .8rem;
        color: red;
    }
`

const initialValues = {
    email: '',
    subject: '',
    message: '',
}

Modal.setAppElement('body');

const ContactModal = () => {    
    const modalOpen = useSelector( (state) => state.modalOpen );
    const dispatch = useDispatch();

    const {handleChange, handleSubmit, handleBlur,
           values, errors, isSubmiting, subjectCharLeft, messageCharLeft} = 
    useFormValidation(initialValues, validateContactForm);

    return (                              
            <Modal
                closeTimeoutMS={300}    
                className="contact-modal"            
                overlayClassName="overlay"
                isOpen={modalOpen}
                onRequestClose={() => dispatch(toggleModal())}
            >
               <ContactForm onSubmit={handleSubmit}>                    
                    <label htmlFor="email">email: </label>
                    <div>
                        <input
                            onBlur={handleBlur}
                            onChange={handleChange} 
                            id="email"
                            type="email"
                            placeholder="your email..."
                            maxLength="100"
                            value={values.email}
                            className={ errors.email && "error" }
                        />
                        { errors.email && (<p className="error">{errors.email}</p>) }
                    </div>
                    <label htmlFor="subject">subject: ({subjectCharLeft}) </label>
                    <div>
                        <input
                            onBlur={handleBlur}
                            onChange={handleChange}  
                            id="subject"
                            type="text"
                            maxLength="100"
                            value={values.subject}
                            className={ errors.subject && "error" }
                        />
                        { errors.subject && (<p className="error">{errors.subject}</p>) }
                    </div>
                    <label htmlFor="message">your message: ({messageCharLeft})</label>
                    <div>
                        <textarea
                            onBlur={handleBlur}
                            onChange={handleChange}  
                            id="message"
                            cols="30"
                            rows="10"
                            maxLength="300"
                            placeholder="I will reply you as soon as possible."
                            value={values.message} 
                            className={ errors.message && "error" }               
                        />
                        { errors.message && (<p className="error">{errors.message}</p>) }
                    </div>

                    <input
                        type="submit"
                        disabled={isSubmiting}
                    />
               </ContactForm> 
            </Modal>         
    )
}

export default ContactModal; 


    
