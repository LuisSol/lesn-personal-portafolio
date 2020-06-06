import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import Skill from './Skill';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillShow = styled.section`
    height: 400px;
    background-color: #232C39;
    color: white;
    padding: 50px 45px 0px 45px;
    position: relative;
    .title { 
        position: absolute;
        top: 2rem;
        font-size: 1.7rem;
    }
    &:after{
        position: absolute;
        width: 100%;
        height: 15%;
        bottom: -3rem;
        left: 0;
        content: '';
        z-index: -1;
        transform-origin: right bottom;
        transform: skewY(2deg);
        background-color: #232C39;
    }        
`

const skills = [
    { 
        id: 'js2020lesn',
        img: '/images/javaScript.png',
        alt: 'java script logo',
        title: 'Javascript',
        subtitle: 'ES6+, Async, OOP...',
        detail: 'I have coded in modern javascript'
    },
    { 
        id: 'nex2020lesn',
        img: '/images/javaScript.png',
        alt: 'java script logo',
        title: 'Node.js / Express',
        subtitle: 'API, Middleware, OAuth...',
        detail: 'I have coded in modern javascript'
    },
    { 
        id: 'ren2020lesn',
        img: '/images/javaScript.png',
        alt: 'java script logo',
        title: 'React / React Native',
        subtitle: 'JSX, SSR, Hooks...',
        detail: 'I have coded in modern javascript'
    },
    { 
        id: 'ror2020lesn',
        img: '/images/javaScript.png',
        alt: 'java script logo',
        title: 'Ruby / Ruby on Rails',
        subtitle: 'ActiveRecord, OAuth, API...',
        detail: 'I have coded in modern javascript'
    },
    { 
        id: 'ror2020lesn',
        img: '/images/javaScript.png',
        alt: 'java script logo',
        title: 'HTML5 / CSS3',
        subtitle: 'Flexbox, Styling, Animations...',
        detail: 'I have coded in modern javascript'
    },
]

const Skills = () => {

    return (
        <SkillShow>
            <h1 className="title">Skills</h1>
            <Slider
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
                dots={true}
                autoplay={true}
                autoplaySpeed={8000}
                pauseOnHover={true}
                pauseOnDotsHover={true}
                speed={500}                
            >            
            {            
            skills.map(skill => <Skill key={skill.id} {...skill} />)            
            }
            </Slider>            
        </SkillShow>
    );
}

export default Skills;