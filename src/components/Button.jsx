/* eslint-disable react/prop-types */
const Button = (props) => {
  const { text, bgColor, textColor } = props;
  return (
    <>
      <button
        className={`${bgColor} text-${textColor} px-8 text-sm font-bold rounded-full py-2`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
