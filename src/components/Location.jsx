const Location = () => {
  return (
    <>
      <main className="w-full h-screen" id="location">
        <div className="container flex flex-col justify-center h-full mx-auto space-y-28">
          {/* Title */}
          <div className="text-2xl font-semibold text-primary font-Inter">
            <h1 className="font-bold">Location</h1>
            <h1 className="text-4xl text-black">📖Our Library Location</h1>
          </div>

          <div className="flex flex-row justify-center">
            <img src="./src/assets/Location.png" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Location;
