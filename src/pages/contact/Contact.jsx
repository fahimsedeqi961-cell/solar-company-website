import SubHero from "../about/SubHero";
import solarHero from "../../assets/solarHero.jpg";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <>
            <SubHero
                title="Get In Touch"
                currentPage="Contact"
                bgImage={solarHero}
            />

            <ContactForm />
        </>
    )
}