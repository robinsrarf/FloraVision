import Header from "../components/Header";
import bg from "../assets/front-page-bg.jpg";
import HeroSection from "../components/HeroSection";
import OurTrendingPlants from "../components/OurTrendingPlants";
import OurTopSellingPlants from "../components/OurTopSellingPlants";
import CustomerReview from "../components/CustomerReview";
import OurBestO2 from "../components/OurBestO2";
import Footer from "../components/Footer";

function FrontPage() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />
        <HeroSection />
        <OurTrendingPlants />
      </div>
      <OurTopSellingPlants />
      <CustomerReview />
      <OurBestO2 />
      <Footer/>
    </>
  );
}

export default FrontPage;
