import bonusItems from "../data/bonusItems";

function Bonuses({ total }) {
  // depending on how much the total of the bonus is, a bonus is given...
  let bonus = "";
  if (total >= 100 && total < 300) {
    bonus = <li>{bonusItems[0]}</li>;
  } else if (total >= 300 && total < 500) {
    bonus = (
      <>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
      </>
    );
  } else if (total >= 500 && total < 1000) {
    bonus = (
      <>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
      </>
    );
  } else if (total >= 1000) {
    bonus = (
      <>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
        <li>{bonusItems[3]}</li>
      </>
    );
  }
  return bonus;
}

export default Bonuses;
