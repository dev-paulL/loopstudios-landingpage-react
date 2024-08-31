import CreationsSection from "./components/CreationsSection";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InteractiveSection from "./components/InteractiveSection";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InteractiveSection />
        <CreationsSection />
      </main>
      <FooterSection />
    </>
  );
}
