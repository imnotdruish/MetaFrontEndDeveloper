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

  const socials = [
    {
      icon: faEnvelope,
      alt: "Envelope Icon",
      url: "mailto: hello@example.com",
    },
    {
      icon: faGithub,
      alt: "Github Logo",
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      alt: "Linkedin Logo",
      url: "https://www.linkedin.com",
    },
    {
      icon: faMedium,
      alt: "Medium Logo",
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      alt: "StackOverflow Logo",
      url: "https://stackoverflow.com",
    },
  ];

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

  const headRef = useRef(null);

  useEffect(() => {
    let prevPos = window.scrollY;

    const handleScroll = () => {
      const currPos = window.scrollY;
      const currElement = headRef.current;

      if (!currElement) {
        return;
      }

      if (prevPos > currPos) {
        currElement.style.transform = "translateY(0)";
      } else {
        currElement.style.transform = "translateY(-200px)";
      }

      prevPos = currPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        ref={headRef}
      >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
            {/* Add social media links based on the 'socials' date */}
              {socials.map(({icon, alt, url}) => (
                <a key={url} href={url} icon={icon} alt={alt} target="_blank">
                  <FontAwesomeIcon key={url} icon={icon} size="2x" />
                </a>
              ))}
              </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects-section" onClick={handleClick}>Projects</a>
              <a href="/#contactme-section" onClick={handleClick}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
    );
};
export default Header;
