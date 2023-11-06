import styles from "./style";

import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";
import FeaturesSecond from "./components/FeaturesSecond";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";

const App = () => (
  <div className="w-full max-w-[1440px] mx-auto bg-white overflow-hidden">
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Features />
        <NewItems />
        <FeaturesSecond />
        <Products />
        <Testimonial />
      </div>
    </div>
  </div>
);

export default App;
