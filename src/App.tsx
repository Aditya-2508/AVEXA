import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Expertise } from "./components/Expertise";
import { Process } from "./components/Process";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Founders } from "./components/Founders";
import { Global } from "./components/Global";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="capabilities">
          <Services />
        </div>
        <Expertise />
        <Process />
        <Work />
        <About />
        <Founders />
        <Global />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
