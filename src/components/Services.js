import React from 'react' 


//Images
import Icon1 from '../img/icon1.svg'
import Icon2 from '../img/icon2.svg'
import Icon3 from '../img/icon3.svg'

//Styles
import styled from 'styled-components'

//Animations
import { motion } from "framer-motion";
import { scrollRevealt,
} from "../animation";
import { useScroll } from "./useScroll";
import ScrollTop from "./ScrollTop";

const Services = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();

    return (

      



    <Skills >
        <SkillsContainer>
            <Skill ref={element} variants={scrollRevealt} animate={controls} initial="hidden">
                <SkillImgContainer1 >
                <img src={Icon1} alt="UI UX Design" />
                    
                </SkillImgContainer1>
                <SkillHeading>UI UX Design

                    </SkillHeading>
                    <SkillDescription>Visualizing and building the architecture of your digital product that reflects and resonates with your user's journey. Optimizing the structure and flow so that end users have seamless interactions.

                    </SkillDescription>

            </Skill>
            <Skill ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden">
                <SkillImgContainer2>
                <img src={Icon2} alt="Frontend Development"/>
                    
                </SkillImgContainer2>
                <SkillHeading>Frontend Development

                    </SkillHeading>
                    <SkillDescription>Exceptional websites and digital products with a fine blend of the right story and technology behind it. 
                        
                    </SkillDescription>

            </Skill>
            <Skill ref={element3} variants={scrollRevealt} animate={controls3} initial="hidden">
                <SkillImgContainer3 >
                <img src={Icon3} alt="Identity Design" />
                   
                </SkillImgContainer3>
                <SkillHeading>Identity Design

</SkillHeading>
<SkillDescription>I help you to develop or extend a recognizable and unique brand that will connect with your audience.
    
</SkillDescription>

            </Skill>
        </SkillsContainer>
    </Skills>

    )
}

const Skills = styled(motion.div)`
background: #FF64CB;

   

`
const SkillsContainer = styled.div`
padding: 6em 4em 6em 4em;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap:20px;

@media screen and (max-width: 1080px) {


grid-template-columns: 1fr;
padding: 4em 2em;
grid-template-columns: 1fr;


}

`
const Skill = styled(motion.div)`
display: flex;
flex-direction:column;
justify-content: start;
align-items: center;
text-align: center;
background-color: white;
padding: 45px;
border-radius:10px;
`
const SkillImgContainer1 = styled(motion.div)`
height: 100px;
width: 50px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
text-align: center;

`
const SkillImgContainer2 = styled(motion.div)`
height: 100px;
width: 100px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
text-align: center;

`
const SkillImgContainer3 = styled(motion.div)`
height: 100px;
width: 60px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
text-align: center;
`

const SkillHeading = styled.h2`
font-size: 24px;
color: #252525;
margin-top: 30px;


`

const SkillDescription = styled.p`
font-size: 24px;
line-height: 1.5;
font-weight: 500;
color: #252525;
margin: 20px 0px 30px 0px;


`

export default Services;