import styles from "./style";

import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";
import FeaturesSecond from "./components/FeaturesSecond";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
const App = () => (
  <div className="w-full max-w-[1440px] mx-auto bg-white overflow-hidden">
    <Hero />
    <Features />
    <NewItems />
    <FeaturesSecond />
    <Products />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
