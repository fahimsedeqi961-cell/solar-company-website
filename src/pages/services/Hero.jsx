import SubHero from "../about/SubHero";
import servicesHero from "../../assets/project1.webp";

export default function ServicesHero() {
    return (
        <>
            <SubHero
                title="Our Services"
                currentPage="services"
                bgImage={servicesHero}
            />
        </>
    )
}