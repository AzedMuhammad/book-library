const Services = () => {
  return (
    <>
      <main className="w-full h-fit">
        <div className="container flex flex-col justify-center mx-auto space-y-16">
          {/* The Services for you */}
          <div
            className="text-2xl font-semibold text-primary font-Inter"
            id="services"
          >
            <h1 className="font-bold">SERVICES</h1>
            <h1 className="text-4xl text-black">🚀The Services for you</h1>
          </div>

          <div className="flex flex-row">
            <img
              src="./src/assets/LibraryCover.png"
              alt=""
              className="object-cover w-2/3"
            />
            <div className="flex flex-col justify-center w-1/3 space-y-6 font-Inter">
              <h1 className="text-4xl font-bold">
                <span className="text-primary">Rent</span> your favorite book
                fairly easy on <span className="text-primary">Lidia!</span>
              </h1>
              <p className="text-xl text-slate-700">
                Viewing, rent, and organize your favorite books has never been
                easier. An integrated digital library rent that’s simple to use,
                Lidia lets you spend less time managing your work and more time
                actually doing it! Effortless rentals, personalized
                shelves—Lidia transforms book management, enhancing your reading
                experience~
              </p>
            </div>
          </div>

          {/* The Services for you 2 */}
          <div className="flex flex-row">
            <div className="flex flex-col justify-center w-1/3 space-y-6 font-Inter">
              <h1 className="text-4xl font-bold">
                Quick Book Rentals: <span className="text-primary">Dive</span>{" "}
                into <span className="text-primary">Reading</span> Instantly
              </h1>
              <p className="text-xl text-slate-700">
                Discover instant literary delight. Access a vast library, borrow
                your favorite reads, and dive into captivating stories within
                minutes. Reading made quick and easy, just a click away! Unlock
                a world of stories effortlessly. Browse genres, choose, rent in
                minutes. Seamlessly manage your reading adventures with our
                intuitive platform~
              </p>
            </div>
            <img
              src="./src/assets/Right.png"
              alt=""
              className="object-cover w-2/3"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
