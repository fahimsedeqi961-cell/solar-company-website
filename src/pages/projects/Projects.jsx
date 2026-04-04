import ProjectsCards from "./ProjectsCards";
import SubHero from "../about/SubHero";
import solarHero from "../../assets/solarHero.jpg"
import GetAqoute from "../home/FAQ";
import TeamMembers from "../home/Team";
import Testimonial from "../home/Testimonial";


export default function Projects() {
    return (
        <>
            <SubHero
                title="Projects Done"
                bgImage={solarHero}
                currentPage="Projects"
            />
            <ProjectsCards />
            <GetAqoute />
            <TeamMembers />
            <Testimonial />
        </>
    )
}