import Features from "../components/Features";
import Review from "../components/Review";
import Services from "../components/Services";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Copyrights from "../components/Copyrights";

const MainContent = () => {
  return (
    <>
      <main className="container flex flex-row h-screen mx-auto">
        <div className="w-1/2">
          <div className="flex flex-col justify-center h-full space-y-10">
            <h1 className="font-extrabold text-7xl font-Jakarta">
              Search & Review your{" "}
              <span className="text-primary">fav book</span> effortlessly
            </h1>
            <p className="max-w-xl text-xl font-Inter">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              quis quia doloribus rem accusantium, repellat impedit vel commodi
              accusamus expedita culpa maxime, reiciendis aspernatur cupiditate
              obcaecati, ratione ad! Corporis, optio✨
            </p>
            <button className="px-12 py-6 text-sm font-semibold text-white rounded-full shadow-2xl bg-primary font-Inter w-fit hover:bg-black">{`Start Now -->`}</button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-1/2 h-full">
          <img
            src="./src/assets/bookImg.png"
            alt="img"
            className="object-cover h-1/2"
          />
          <img
            src="./src/assets/Midnight.png"
            alt="img"
            className="object-cover h-1/2"
          />
        </div>
      </main>
      <Features />
      <Services />
      <Review />
      <Location />
      <Footer />
      <Copyrights />
    </>
  );
};

export default MainContent;
