import React from "react";
import FooterRoot from "./Footer";
import FooterAbout from "./FooterAbout";
import FooterFeedback from "./FooterFeedback";
import FooterLegal from "./FooterLegal";
import { FooterSocials } from "./FooterSocials";
import FooterPublic from "./FooterPublic";

const Footer: typeof FooterRoot & {
  About: typeof FooterAbout;
  Feedback: typeof FooterFeedback;
  Legal: typeof FooterLegal;
  Socials: typeof FooterSocials;
  Public: typeof FooterPublic;
} = (props) => {
  return <FooterRoot {...props} />;
};

// Attach subcomponents as properties

Footer.About = FooterAbout;
Footer.Feedback = FooterFeedback;
Footer.Legal = FooterLegal;
Footer.Socials = FooterSocials;
Footer.Public = FooterPublic;

export default Footer;
