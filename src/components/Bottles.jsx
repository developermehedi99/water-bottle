import { useEffect, useState } from "react";
import Bottle from "./Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  function handleParchase(bottle) {
    const newBottle = [...cart, bottle];
    setCart(newBottle);
  }

  return (
    <div>
      <h1 className="text-4xl">this is our water bottles : {bottles.length}</h1>
      <h2 className="text-2xl">My parchase : {cart.length}</h2>
      <div className="grid grid-cols-3 mt-3 gap-3">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleParchase={handleParchase}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
