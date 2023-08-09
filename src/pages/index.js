import React from 'react';
import {
    AboutSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="Dicki Darmawan Saputra - Personal Portfolio" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <AboutSection sectionId="about" heading="About Me" />
                <InterestsSection sectionId="skills" heading="Skills" />
                <ProjectsSection sectionId="work" heading="Work Experience" />
                <ContactSection sectionId="contact" heading="Connect With Me ?" />
            </Page>
        </>
    );
}
