import React from "react";
import { Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Heading>About</Heading>
      <UnorderedList>
        <ListItem>Javascript</ListItem>
        <ListItem>ReactJS</ListItem>
        <ListItem>Node</ListItem>
        <ListItem>Express</ListItem>
        <ListItem>Graphql</ListItem>
        <ListItem>Next.JS</ListItem>
      </UnorderedList>
    </>
  );
};

export default About;
