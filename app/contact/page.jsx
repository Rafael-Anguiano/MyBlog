import About from "../components/About"
import Sponsor from "../components/Sponsor"
import {usePathname} from "next/navigation"

const Contact = () => {
    return (
        <>
            <section id="contact">
                <About/>
                <Sponsor/>
            </section>
            <section id="error">
            </section>
        </>
    )
}

export default Contact