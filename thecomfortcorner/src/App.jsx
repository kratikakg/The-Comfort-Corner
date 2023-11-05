import styles from "./style";

import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";

const App = () => (
  <div className="w-full max-w-[1440px] mx-auto bg-white overflow-hidden">
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Features />
        <NewItems />
      </div>
    </div>
  </div>
);

export default App;
