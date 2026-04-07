import ProjectsCards from "./ProjectsCards";
import SubHero from "../about/SubHero";
import GetAqoute from "../home/FAQ";
import TeamMembers from "../home/Team";
import Testimonial from "../home/Testimonial";


export default function Projects() {
    return (
        <>
            <SubHero
                title="Projects Done"
                bgImage="/services/solarHero.jpg"
                currentPage="Projects"
            />
            <ProjectsCards />
            <GetAqoute />
            <TeamMembers />
            <Testimonial />
        </>
    )
}