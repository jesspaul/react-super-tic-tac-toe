import { useState, useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import InteriorSquare from '../InteriorSquare/InteriorSquare';
import './ExteriorSquare.css';

const ExteriorSquare = ({ extValue, extIdx, handleExtChange }) => {
    const { player, setPlayer, checkWin, setInnerWinner, currentSquare, setCurrentSquare } = useContext(GameContext);

    const [values, setValues] = useState([null, null, null, null, null, null, null, null, null]);

    const handleClick = (index) => {
        if (values[index] === null && currentSquare.includes(extIdx)) {
            const valuesCopy = values;
            valuesCopy[index] = player.symbol;
            setValues(valuesCopy);
            setPlayer(prevState => ({
                id: prevState.id === 1 ? 2 : 1,
                symbol: prevState.id === 1 ? 'O' : 'X',
            }));
            setCurrentSquare([index]);
    
            const winner = checkWin(valuesCopy);
            if (winner) {
                setInnerWinner(winner);
                handleExtChange(extIdx, winner);
            } 
        }
    }

    return (
        <div className={currentSquare.includes(extIdx) ? 'current' : 'ExteriorSquare'}>
            {
                extValue ? (
                    <p>{extValue}</p>
                ) : (
                    values.map((value, idx) => (
                        <InteriorSquare
                            key={idx}
                            idx={idx}
                            value={value}
                            handleClick={handleClick}
                        />
                    ))
                )
            }
        </div>
    );
}
 
export default ExteriorSquare;