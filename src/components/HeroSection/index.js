import React from "react";
import './Hero.css'
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
} from "./HeroStyle";
// import HeroImg from "../../images/HeroImage.gif";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <StarCanvas />
        <HeroBg className="hero_bg">
          <HeroBgAnimation width={800} height={500} />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer id="Left">
              <Title>
                Hi, I am <br /> {Bio.name}
              </Title>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <SubTitle>{Bio.description}</SubTitle>
             
            </HeroLeftContainer>

            
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
