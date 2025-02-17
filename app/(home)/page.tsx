import Image from "next/image";
import Hero from "../../components/section/Hero";
import About from "../../components/section/About";
import FeaturedProduct from "../../components/section/FeaturedProduct";
import HowToOrder from "../../components/section/HowToOrder";
import Cta from "../../components/section/Cta";
import Footer from "../../components/section/Footer";
export default function Home() {
  return (
   <>
   <Hero />
   <About />
   <FeaturedProduct />
   <HowToOrder />
   <Cta />
   <Footer />
   </>
  );
}
