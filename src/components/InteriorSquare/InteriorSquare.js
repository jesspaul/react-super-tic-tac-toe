import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './InteriorSquare.css';

const InteriorSquare = ({ value, idx, handleClick, current }) => {
    const { winner } = useContext(GameContext);
    return (
        <div className={!winner && current ? 'current' : "InteriorSquare"} onClick={() => handleClick(idx)}>
            {value}
        </div>
    );
}
 
export default InteriorSquare;