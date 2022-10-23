import Bird from "./Bird";

export default function Birds({ birdArr , cartArr , setCartArr}) {
  return (
    <div className="birds">
      <Bird birdArr={birdArr} cartArr={cartArr} setCartArr={setCartArr}/>
    </div>
  );
}
