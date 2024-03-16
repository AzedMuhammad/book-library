const Footer = () => {
  return (
    <>
      <main className="w-full font-bold h-60 font-Jakarta">
        <div className="container flex flex-row items-center justify-center h-full m-auto space-x-32">
          <div className="flex flex-col space-y-16">
            <h1 className="text-xl text-center">Created by</h1>
            <h1 className="text-5xl font-Inter">zCode</h1>
          </div>

          <div className="flex flex-col space-y-16">
            <h1 className="text-xl text-center">Social Media</h1>
            <div className="flex flex-row space-x-6">
              <a href="https://github.com/AzedMuhammad">
                <img
                  src="./public/socialmedia/github.png"
                  alt="github"
                  className="h-16"
                />
              </a>

              <a href="https://twitter.com/azedmuhammad">
                <img
                  src="./public/socialmedia/twitter.png"
                  alt="twitter"
                  className="h-16"
                />
              </a>

              <a href="https://www.linkedin.com/in/azed-muhammad-noval-2498601b7/">
                <img
                  src="./public/socialmedia/linkedin.png"
                  alt="linkedin"
                  className="h-16"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-16">
            <h1 className="text-xl text-center">Slogan</h1>
            <h1>#RentYourFavBooks</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Footer;
