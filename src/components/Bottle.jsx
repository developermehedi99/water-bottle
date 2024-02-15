const Bottle = ({ bottle, handleParchase }) => {
  const { name, price, img } = bottle;

  return (
    <div className="border border-green-500 rounded-lg">
      <img src={img} alt="" />
      <h2 className="text-2xl">{name}</h2>
      <h3>price: {price}</h3>
      <button onClick={() => handleParchase(bottle)} className="button-price">
        parchase
      </button>
    </div>
  );
};

export default Bottle;
