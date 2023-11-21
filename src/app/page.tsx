import Carousel from "@/components/utilities/Carousel";
import FeatureSection from "@/components/utilities/FeatureSection";
import Footer from "@/components/utilities/Footer";
import Hero from "@/components/utilities/Hero";
import Navbar from "@/components/utilities/Navbar";
import StatisticsSection from "@/components/utilities/StaticSection";
import TestimonialComponent from "@/components/utilities/TestimonialComponent";

function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Carousel />
      <StatisticsSection></StatisticsSection>
      <TestimonialComponent></TestimonialComponent>
      <FeatureSection></FeatureSection>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
