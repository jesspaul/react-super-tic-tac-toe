import { useState, useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './InteriorSquare.css';

const InteriorSquare = () => {
    const { player } = useContext(GameContext);

    const [value, setValue] = useState(null);

    const handleClick = () => {
        setValue(player.symbol);
    }
    return (
        <div className="InteriorSquare" onClick={handleClick}>
            {value}
        </div>
    );
}
 
export default InteriorSquare;