import birdsData from '../data/birds.js';
import Card from './Card.js'

function Birds(props) {
  return (
    <section className="birds">
      {birdsData.map(item => <Card key={item.id} {...item} addItem={() => props.addItem(item)} />)}
    </section>
  );
}

export default Birds;