import { Component } from 'react';

class CardList extends Component {
    render() {
        return (
            <div>
                {this.props.characters.map((character) => {
                    return(
                        <h1 key={character.id}>{character.name}</h1>
                    )
                })}
            </div>
        );
    }
}
 
export default CardList;