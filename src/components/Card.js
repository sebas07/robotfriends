import React from 'react';


const Card = (props) => {
    let { id, name, email } = props;
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={ `https://robohash.org/${ id }?100x100` } />
            <div className='tc'>
                <h3>{ name }</h3>
                <p>{ email }</p>
            </div>
        </div>
    );
};

// class Card extends Component {
//     render() {
//         return (
//             <h1>This is a card</h1>
//         );
//     };
// }

export default Card;
