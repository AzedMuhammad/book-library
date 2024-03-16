/* eslint-disable react/prop-types */
const CardsReview = (props) => {
  const { img, desc, name, school } = props;
  return (
    <>
      <div className="max-w-xs space-y-4 text-center font-Inter">
        <img
          src={img}
          alt=""
          className="object-cover h-40 m-auto rounded-full"
        />
        <p className="text-slate-600">{desc}</p>
        <h1 className="text-xl font-semibold">{name}</h1>
        <h1 className="font-semibold text-primary">{school}</h1>
      </div>
    </>
  );
};

export default CardsReview;
