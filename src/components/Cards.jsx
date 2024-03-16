/* eslint-disable react/prop-types */
const Cards = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { title, desc, img } = props;
  return (
    <>
      <div className="flex flex-col justify-center max-w-xs text-center font-Inter">
        <img src={img} alt="" className="w-64 h-64 mx-auto" />
        <div className="h-32 space-y-6">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
