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
    z-index: 2;
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
        title: 'Ruby / Ruby on Rails',
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

const Skills = () => {

    return (
        <SkillShow>
            <h1 className="title" id="skills">Skills</h1>            
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