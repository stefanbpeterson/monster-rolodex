import { Component } from 'react';
import '../../App.css'
import Card from '../card/card.component'

class CardList extends Component {
    render() {
        return (
          <Card className='card-list' characters={this.props.characters} maxHeight='max-h-60' />
        );
    }
}
 
export default CardList;