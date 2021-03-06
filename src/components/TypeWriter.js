import React, { useEffect, useReducer } from 'react';
import styled, { keyframes } from 'styled-components';
 
const blink = keyframes`
    0% {
        border-right-color: rgba(0,0,0,.1);
    }
    100% {
        border-right-color: rgba(0,0,0,0);
    }
`
const Greet = styled.span`    
    display: flex;
    align-items: center;
    height: 400px; 
    z-index: 4;
    margin-right: 30px;
    color: white;
    text-shadow:
    -1px -1px 2px rgba(70,70,70,0.1),  
    1px -1px 2px rgba(70,70,70,0.1),
    -1px 1px 2px rgba(70,70,70,0.1),
    1px 1px 2px rgba(70,70,70,0.1);
    border-right: 3px solid rgba(0,0,0,.1);
    animation: ${blink} 600ms ease-out infinite;
`

const fontSizes = {
    0: '30rem',
    1: '25rem',
    2: '23rem',
    3: '15rem',
    4: '9rem',
    5: '22rem',
    6: '15rem',
    7: '12rem',
    8: '23rem',
    9: '15rem',
    10: '10rem',
}
const grettings = [
                   'Hi', 'Hola', 'Hello', 'Bonjour',
                   'Guten tag', 'Hallo', 'Shalom',
                   'Namaste', 'Olá', 'Nǐ hǎo', 'Konnichiwa'
                  ]
let isDeleting = false;
let waitingTime = 300;

const TypeWriter = () => {
    const reducer = (state, action) => {
        switch(action.type) {
            case 'CHANGE_GREET':
                return {
                    ...state,
                    greetText: action.newText
                }
            case 'CHANGE_CURRENT':
                return {
                    ...state,
                    currentGreet: action.nextGreet
                }
            default:
                return state;
        }        
    }    
    const [{currentGreet, greetText}, dispatch] = 
    useReducer(reducer, { currentGreet: 0, greetText: ''});   

    useEffect(() => { 
        if(isDeleting) {
            waitingTime = 100;
            if(greetText === '') {
                waitingTime = 1500;
                isDeleting = false;
                dispatch({
                    type: 'CHANGE_CURRENT',
                    nextGreet: (currentGreet + 1) % grettings.length
                });
            }
        }
        else {
            waitingTime = 250;
            if(grettings[currentGreet] === greetText) {
                waitingTime = 1500;
                isDeleting = true;
            }
        }        
        const typer = setTimeout(() => {
            dispatch({
                type: 'CHANGE_GREET',
                newText: (isDeleting) 
                        ? grettings[currentGreet].slice(0, greetText.length - 1)
                        : grettings[currentGreet].slice(0, greetText.length + 1)
            });
        }, waitingTime);
        return () => {
            clearTimeout(typer)
        }
    }, [greetText, currentGreet]);

    return (
        <Greet style={{fontSize: fontSizes[currentGreet]}}>
            {greetText}
        </Greet>
    );
};

export default TypeWriter;