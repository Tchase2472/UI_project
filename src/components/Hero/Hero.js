import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../GlobalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

function Hero() {
  return (
    <HeroSection>
        <HeroVideo src="./assets/hero.mp4" autoPlay muted />
        <Container>
            <MainHeading>Welcome</MainHeading>

            <HeroText>
                I am Todd. I make stuff like this.
            </HeroText>
                <ButtonWrapper>
                    <Link to="signup">
                        <Button>Contact</Button>
                    </Link>
                    <HeroButton> Find More </HeroButton>
                </ButtonWrapper>
            
        </Container>
    </HeroSection>
  )
}

export default Hero