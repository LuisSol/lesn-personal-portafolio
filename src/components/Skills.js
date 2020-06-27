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
    z-index: 2;
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
        detail: 'I\'m impresed by the jump of javascript from the Front End to the Back End, by embrasing the Node.js ecosystem i found a powerfull tool to build amazing apps and a never ending community of developers creating amazing npm modules.'
    },
    { 
        id: 'ren2020lesn',
        img: '/images/react.png',
        alt: 'react redux logo',
        title: 'React / React Native',
        subtitle: 'Hooks, SSR, Redux...',
        detail: 'I just love the React library (framewotk, with the help of other libraries) i\'m totally invested in the react way of creating and composing UI/UX interfaces. I have developed all my projects in the react ecosystem for the Browser and for mobile devices with react native.'
    },
    { 
        id: 'ror2020lesn',
        img: '/images/ruby.png',
        alt: 'ruby rails logo',
        title: 'Ruby /Rails',
        subtitle: 'ActiveRecord, OAuth, API...',
        detail: 'Although my heart belongs to the javascript ecosystem, i have experience also with the Ruby on Rails Framework, even if the javascript exosystem is more flexible, theres one thing that can\'t be denied about Rails, it just works with fewer lines of code'
    },
    { 
        id: 'htm52020lesn',
        img: '/images/htmlcss.png',
        alt: 'html css logo',
        title: 'HTML5 / CSS3',
        subtitle: 'Flexbox, Sass, Animations...',
        detail: 'I belive that a successful App should look amazing, thats why i have gain strong knowledge of CSS, so my projects will not be only useful, but pretty and fun to use.'
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