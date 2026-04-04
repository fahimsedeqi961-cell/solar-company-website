import TeamMembers from "../home/Team"
import Testimonial from "../home/Testimonial"
import TrustSignals from "../home/Trustsignals"
import AboutHero from "./AboutHero"
import SubHero from "./SubHero";
import solarHero from "../../assets/solarHero3.jpg";


export default function About() {
    return (
        <>
            <SubHero
                title="About Our Company"
                currentPage="About"
                bgImage={solarHero}
            />
            <TrustSignals />
            <AboutHero />
            <TeamMembers />
            <Testimonial />
        </>
    )
}