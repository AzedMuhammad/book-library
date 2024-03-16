import Cards from "./Cards";

const Features = () => {
  return (
    <>
      <main className="w-full h-screen" id="features">
        <div className="container flex flex-col justify-center h-full mx-auto space-y-40">
          {/* Features */}
          <div className="text-2xl font-semibold text-primary font-Inter">
            <h1 className="font-bold">FEATURES</h1>
            <h1 className="text-4xl text-black">What you can do? 🤔</h1>
          </div>

          <div className="flex flex-row justify-center space-x-10">
            <Cards
              title="Search"
              img="./src/assets/Search.png"
              desc="Effortlessly find your next read with our powerful and intuitive book search."
            />
            <Cards
              title="Review"
              img="./src/assets/Comment.png"
              desc="Discover insightful critiques and share your thoughts on diverse literary masterpieces effortlessly."
            />
            <Cards
              title="Wishlist"
              img="./src/assets/Wishlist.png"
              desc="Curate your literary dreams–wishlist books  for future adventures and discoveries."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Features;
