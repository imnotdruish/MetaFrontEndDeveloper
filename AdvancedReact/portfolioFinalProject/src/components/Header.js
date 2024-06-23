import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

function SocialsList() {

  const socials = [
    {
      icon: faEnvelope,
      name: "Envelope Icon",
      url: "mailto: hello@example.com",
    },
    {
      icon: faGithub,
      name: "Github Logo",
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      name: "Linkedin Logo",
      url: "https://www.linkedin.com",
    },
    {
      icon: faMedium,
      name: "Medium Logo",
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      name: "StackOverflow Logo",
      url: "https://stackoverflow.com",
    },
  ];

  const listSocials = socials.map((social) => {
    return (
        <a href={social.url} alt={social.name}><FontAwesomeIcon icon={social.icon} size="2x" /></a>
    )
  });
  return <HStack spacing={4}>{listSocials}</HStack>;
}

function PageList() {

  const links = [
    {
      name: "Projects",
      alt: "Projects Section",
      anchor: "project",
      url: "#projects-section",
    },
    {
      name: "Contact Me",
      alt: "Contact Section",
      anchor: "contactme",
      url: "#contactme-section",
    },
  ];

  const listPages = links.map((link) => {
    return (
        <a href={link.url} alt={link.alt}>{link.name}</a>
    )
  });
  return <HStack spacing={4}>{listPages}</HStack>;
}

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

    return (
      <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <SocialsList />
          </nav>
          <nav>
            <HStack spacing={8}>
              <PageList />
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
    );
};
export default Header;
