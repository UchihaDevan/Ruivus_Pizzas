import "./App.css";
import CardSection from "./components/CardSection";
import Main from "./components/Carrocel";
import ImageContentSection from "./components/cardPromotion";
import ImageSection from "./components/sectionCalzone";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden bg-gray-950">
        <Header />
      <main>
        <Main />
        <CardSection />
        <ImageContentSection />
        <ImageSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
