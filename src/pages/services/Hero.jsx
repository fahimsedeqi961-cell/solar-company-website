import SubHero from "../about/SubHero";
import solarHero from "../../assets/solarHero2.jpg";

export default function ServicesHero() {
    return (
        <>
            <SubHero
                title="Our Services"
                currentPage="services"
                bgImage={solarHero}
            />
        </>
    )
}