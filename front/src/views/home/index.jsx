import Mission from "./components/mission";
import ExploreCategories from "./components/exploreCategories";
import CallToAction from "./components/callToAction";
import AboutUs from "./components/aboutUs";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center text-center">
        <Mission id="mission" />
        <ExploreCategories id="exploreCategories" />
        <CallToAction id="callToAction" />
        <AboutUs id="aboutUs" />
      </div>
    </>
  );
};

export default Home;
