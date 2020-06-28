import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import Skill from './Skill';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollIndicator from './ScrollIndicator'

const FullDiv = styled.div`
    width: 100%;
    background-color: #232C39;
    position: relative;
    &:after{
        position: absolute;
        width: 100%;
        height: 15%;
        bottom: -3.5rem;
        left: 0;
        content: '';
        z-index: -1;
        transform-origin: right bottom;
        transform: skewY(1.5deg);
        background-color: #232C39;
    }
`
const SkillShow = styled.section`
    width: 1024px;
    height: 400px;
    color: white;
    padding: 50px 20px 0px 20px;
    position: relative;    
    margin: 0 auto;
    .title { 
        z-index: 5;
        position: absolute;
        top: 2.5rem;
        font-size: 1.7rem;
    }   
    @media (max-width: 1024px) {
        width: 100%;
    }       
`
const skills = [
    { 
        id: 'js2020lesn',
        img: '/images/javascript.png',
        alt: 'java script logo',
        title: 'Javascript',
        subtitle: 'ES6+, Async, Json...',
        detail: `I have modern javascript coding skills, from factory functions, the module pattern, IIFE's, HOF's, higher order array functions (map, filter, reduce) to promises, generators and async await.`
    },
    { 
        id: 'nex2020lesn',
        img: '/images/nodejsexp.png',
        alt: 'node express logo',
        title: 'Node.js / Express',
        subtitle: 'Middleware, API, OAuth...',
        detail: 'I\'m impresed by the jump of javascript from the Front End to the Back End, by embrasing the Node.js ecosystem i found a powerfull tool to build amazing apps and a never ending community of developers creating impressive modules in npm.'
    },
    { 
        id: 'ren2020lesn',
        img: '/images/react.png',
        alt: 'react redux logo',
        title: 'React / React Native',
        subtitle: 'Hooks, SSR, Redux...',
        detail: 'I just love the React library, i\'m totally invested in the React ecosystem. I really like the idea of developing for both Web and Native with the same syntax (jsx).'
    },
    { 
        id: 'ror2020lesn',
        img: '/images/ruby.png',
        alt: 'ruby rails logo',
        title: 'Ruby /Rails',
        subtitle: 'ActiveRecord, OAuth, API...',
        detail: 'Although my heart belongs to javascript, i have also experience with the Ruby on Rails Framework, i think javascript is more flexible, but there\'s one thing that can\'t be denied about Rails, and it is that it gets the job done with fewer lines of code.'
    },
    { 
        id: 'htm52020lesn',
        img: '/images/htmlcss.png',
        alt: 'html css logo',
        title: 'HTML5 / CSS3',
        subtitle: 'Flexbox, Sass, Animations...',
        detail: 'It is my belief that a successful App should look tiddy and pretty, that\'s why i have gain strong knowledge of CSS, so i can make my projects useful, pretty and fun to use.'
    },
]

export default () => (
    <FullDiv>
        <SkillShow>
            <h1 className="title" id="skills">Skills</h1>            
            <Slider
                lazyLoad="progressive"
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
                dots={false}
                autoplay={true}
                autoplaySpeed={9000}
                pauseOnHover={true}
                pauseOnDotsHover={true}
                speed={500}                
            >            
            {            
                skills.map(skill => <Skill key={skill.id} {...skill} />)            
            }
            </Slider>
            <ScrollIndicator top={{top: '-2rem'}}/>                             
        </SkillShow>
    </FullDiv>
);