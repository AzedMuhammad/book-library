import CardsReview from "./CardsReview";

const Review = () => {
  return (
    <>
      <main className="w-full h-screen" id="review">
        <div className="container flex flex-col justify-center h-full mx-auto space-y-48">
          {/* Review */}
          <div className="text-2xl font-semibold text-primary font-Inter">
            <h1 className="font-bold">Reviews</h1>
            <h1 className="text-4xl text-black">🗯 Reviews of Others</h1>
          </div>

          {/* Cards */}
          <div className="flex flex-row justify-center space-x-16">
            <CardsReview
              img="./src/assets/avatars/avatar.png"
              desc="Engaging plot, vivid characters; a captivating read that lingers in your thoughts."
              name="Jane Doe"
              school="School of Science"
            />
            <CardsReview
              img="./src/assets/avatars/man.png"
              desc="Thought-provoking narrative and rich prose. A must-read for any avid book lover!"
              name="Mark Johnson"
              school="School of Science"
            />
            <CardsReview
              img="./src/assets/avatars/user.png"
              desc="Immersive storytelling! An enriching literary experience worth savoring and sharing."
              name="Daniel Smith"
              school="School of Science"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Review;
