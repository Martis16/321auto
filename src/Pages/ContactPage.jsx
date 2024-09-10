import React from "react";
import Contact from "../Sections/Contact/Contact";
import ContactInfo from "../Sections/ContactInfo/ContactInfo";
import WorkHours from "../Sections/WorkHours/WorkHours";

function ContactPage() {
  return <>
    <ContactInfo/>
    <WorkHours/>
    <Contact/>
  </>;
}

export default ContactPage;
