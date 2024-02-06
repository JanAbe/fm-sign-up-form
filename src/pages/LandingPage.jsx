import { IntroSection } from "../components/IntroSection.jsx";
import { IntroTitle } from "../components/IntroTitle.jsx";
import { IntroDescription } from "../components/IntroDescription.jsx";
import { RegistrationSection } from "../components/RegistrationSection.jsx";
import { RegistrationBanner } from "../components/RegistrationBanner.jsx";
import { RegistrationForm } from "../components/RegistrationForm.jsx";

export const LandingPage = () => {
  return (
    <>
      <main className="container">
        <IntroSection>
          <IntroTitle>Learn to code by watching others</IntroTitle>
          <IntroDescription>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </IntroDescription>
        </IntroSection>

        <RegistrationSection>
          <RegistrationBanner>
            <span>
              <strong>Try it free 7 days</strong> then
            </span>{" "}
            <span>$20/mo. thereafter</span>
          </RegistrationBanner>
          <RegistrationForm />
        </RegistrationSection>
      </main>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  );
};
