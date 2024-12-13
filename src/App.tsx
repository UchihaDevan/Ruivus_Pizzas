import "./App.css";
import CardSection from "./components/CardSection";
import Main from "./components/Carrocel";
import ImageContentSection from "./components/cardPromotion";
import ImageSection from "./components/sectionCalzone";
import Header from "./components/Header";

function App() {
  return (
    <div className="overflow-hidden">
        <Header />
      <main>
        <Main />
        <CardSection />
        <ImageContentSection />
        <ImageSection />
      </main>
    </div>
  );
}

export default App;
