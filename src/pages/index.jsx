import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Dylan Lalonde.
        </BigTitle>
        <Subtitle>an as of yet failed social entrepreneur who is passionately learning software engineering</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="GoodTravelApp"
            link="https://goodtravel.app"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A PWA for booking tourism services and distributing the commissions into the local community. [Prototype complete, Invite-only Beta]
          </ProjectCard>
          <ProjectCard
            title="BEACHWALK"
            link="http://beachwalk.herokuapp.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A website that showcases the BeachWalk vacation rental project in Costa Rica. Built from scratch with Ruby on Rails. [Launching February]
          </ProjectCard>
          <ProjectCard
            title="DroneHUB"
            link="https://drone-hub.herokuapp.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            An Airbnb clone that lets users rent drones from each other instead of houses. Built from scratch to practice Ruby on Rails. [Open Beta]
          </ProjectCard>
          <ProjectCard
            title="Cocktail Buddy"
            link="https://boiling-crag-91521.herokuapp.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A simple ruby on rails application that lets users share cocktail recipes with each other. [Open Beta]
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Dylan Lalonde" />
          <AboutSub>
           I see social entrepreneurship as the next step in the evolution of capitalism. I am passionate about building technologies for the Earth and all her inhabitants.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
           I'm an entrepreneurial full-stack web developer who's traveled to over 25 countries. I know how to build a web application backed by a database, with a good UX and design - and push this to production. I've worked in an Agile team and know git & GitHub workflow. I've touched on some testing. I'm interested in decentralization and have read 20+ blockchain whitepapers. I am spiritual, unconventional and enthusiastic.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:contact@dylanlalonde.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/DylanLalonde">GitHub</a> &{' '}
            <a href="https://www.linkedin.com/in/dylanlalonde/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          Made with{' '}
          <a href="https://www.gatsbyjs.org/">GatsbyJS</a> -
          <a href="https://github.com/DylanLalonde/portfolio-gatsbyjs"> Github Repository</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
