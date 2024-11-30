import Footer from "./Footer";
import Header from "./Header";
import HeaderPart from "./HeadingPart";
import HowToBuy from "./HowToBuy";
import Mission from "./Mission";
import Socials from "./Socials";
import Tokenomics from "./Tokenomics";

function App() {
  return (
    <>
      <div className="falling-container">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="football"></div>
        ))}
      </div>
      <Header />
      <HeaderPart />
      <Mission />
      <Tokenomics />
      <HowToBuy />
      <Socials />
      <Footer />
    </>
  );
}

export default App;
