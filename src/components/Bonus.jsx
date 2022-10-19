import { useEffect, useState } from "react";
import bonusItems from "../data/bonusItems";
console.log(bonusItems);

const Bonus = ({ total }) => {
  const [bonus, setBonus] = useState(0);

  useEffect(() => {
    const numBonusItems =
      total < 100
        ? 0
        : total < 300
        ? 1
        : total < 500
        ? 2
        : total < 1000
        ? 3
        : 4;
    setBonus(numBonusItems);
    console.log("total", total);
    console.log("bonus", numBonusItems);
  }, [total]);

  return (
    <>
      {bonusItems.slice(0, bonus).map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </>
  );
};

export default Bonus;
