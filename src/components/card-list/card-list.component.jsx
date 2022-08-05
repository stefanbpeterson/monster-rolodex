import '../../App.css'
import Card from '../card/card.component'

const CardList = (props) => {
    return (
      <Card className='card-list' characters={props.characters} maxHeight='max-h-60' />
    );
}
 
export default CardList;