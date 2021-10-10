/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// @deprecated
// import Img from 'gatsby-image';
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import LearnTeachCoding from '../assets/Learn-Teach-Coding.svg';

function AboutPage(props) {
  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="About" />
      <section className="mainSection md:bg-FCCblue-100">
        <div className="mainSectionContent mainSectionOne">
          <div className="px-2 pt-8 md:px-0 md:mr-8 md:w-8/12">
            <h2 className="text-FCCblue-200">
              <span>About freeCodeCamp Nashville</span>
            </h2>

            <p className="mb-5">
              Learning to code and becoming a developer is hard work, but we’re
              here to help. You’ll get stuck along the way. You’ll get
              frustrated. But eventually, you’ll get it. And you’ll learn more
              than you ever thought possible.
            </p>

            <p className="mb-5 font-bold">
              The skills you practice, and the connections you make here, might
              just change your career… and your life.
            </p>
            <p>
              As the Nashville chapter of the freeCodeCamp.org global learning
              community, we are laser-focused on supporting those just starting
              their journey in web development. We learn together and challenge
              each other to thrive in the tech industry. We offer weekly
              educational opportunities and code challenges centered on the
              freeCodeCamp open source curriculum, as well as a monthly meetup,
              networking opportunities and more.
            </p>
          </div>

          <div className="flex-auto hidden pt-20 md:block">
            <LearnTeachCoding
              className="inline-block"
              alt="An image of five key words (Learn, Create, Collaborate, Teach, and Grow) surrounded by curly brackets"
            />
          </div>
        </div>
      </section>

      <section className="fccDivider">
        <h2>
          <span>LEADERSHIP</span>
        </h2>
      </section>

      <section className="mainSection">
        <div className="flex flex-col mainSectionContent md:justify-around ">
          <div className="flex flex-col items-center justify-around md:flex-row">
            <Img
              className="w-64 m-3 mb-8 border-2 rounded-full md:mb-3 md:mr-12 md:w-1/4 border-FCCgray-100"
              fluid={props.data.avatarSethAlexanderImage.childImageSharp.gatsbyImageData}
              alt="Profile picture of Seth Alexander"
            />
            <p className="mb-12 text-xl md:w-3/4">
              <b>Seth Alexander</b>, freeCodeCamp Nashville Organizer, Software
              Engineer, Hard Problem Solver, TypeScript Lover, freeCodeCamp
              believer. I help facilitate learning and foster community in any
              way I can. I host the monthly meetups which can include code
              challenges, lectures, and panels.
            </p>
          </div>
          <div className="flex flex-col items-center justify-around p-4 md:flex-row">
            <Img
              className="w-64 m-3 mb-8 border-2 rounded-full md:mb-3 md:mr-12 md:w-1/4 border-FCCgray-100"
              fluid={props.data.avatarAlexThomasImage.childImageSharp.gatsbyImageData}
              alt="Profile picture of Alex Thomas"
            />
            <p className="mb-12 text-xl md:w-3/4">
              <b>Alex Thomas</b>, freeCodeCamp Nashville Organizer, Full-Stack
              JavaScript developer with experience building and deploying web
              applications and APIs. I run the weekly Algorithms and Data
              Structure meetup because I love helping students and junior
              developers improve their professional skills and work on career
              goals.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    avatarSethAlexanderImage: file(relativePath: { eq: "Seth-Alexander.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID,maxWidth: 260, quality: 100)
      }
    }
    avatarAlexThomasImage: file(relativePath: { eq: "Alex-Thomas.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID,maxWidth: 260, quality: 100)
      }
    }
  }
`;

export default AboutPage;
