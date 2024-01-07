import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Empowering Growth, Cultivating Success: Nurturing Digital Fields for a Thriving Online Harvest.",
  description: "Empowering Growth, Cultivating Success: Nurturing Digital Fields for a Thriving Online Harvest.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Empowering Growth, Cultivating Success: Nurturing Digital Fields for a Thriving Online Harvest."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
