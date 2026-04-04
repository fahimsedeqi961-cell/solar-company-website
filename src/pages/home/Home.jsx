import Hero from "./Hero"
import TrustSignals from "./Trustsignals"
import AboutHero from '../about/AboutHero'
import WhyChoose from "../about/WhyChoose"
import Services from '../services/ServicesCards'
import Projects from "../projects/ProjectsCards"
import GetAqoute from "./FAQ"
import Team from "./Team"
import Testimonial from "./Testimonial"


export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <AboutHero />
      <Services />
      <WhyChoose />
      <Projects />
      <Team />
      <Testimonial />
    </>
  )
}
