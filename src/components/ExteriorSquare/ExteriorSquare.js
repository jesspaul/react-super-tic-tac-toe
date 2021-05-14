import { useState, useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import InteriorSquare from '../InteriorSquare/InteriorSquare';
import './ExteriorSquare.css';

const ExteriorSquare = ({ extValue, extIdx, handleExtChange, extValues }) => {
    const { player, setPlayer, checkWin, setInnerWinner, currentSquare, setCurrentSquare, winner, allOptions, setAllOptions } = useContext(GameContext);

    const [values, setValues] = useState([null, null, null, null, null, null, null, null, null]);

    const handleClick = (index) => {
        if (!winner && values[index] === null && currentSquare.includes(extIdx)) {
            const valuesCopy = values;
            valuesCopy[index] = player.symbol;
            setValues(valuesCopy);
            setPlayer(prevState => ({
                id: prevState.id === 1 ? 2 : 1,
                symbol: prevState.id === 1 ? 'O' : 'X',
            }));

            if (extValues[index] !== null) {
                let newOptions = allOptions.filter(num => num !== index);
                setAllOptions(newOptions);
                setCurrentSquare(newOptions);
            } else {
                setCurrentSquare([index]);
            }
    
            const winner = checkWin(valuesCopy);
            if (winner) {
                setInnerWinner(winner);
                handleExtChange(extIdx, winner);
            } 
        }
    }

    return (
        <>
        {
            extValue ? (
                <div className="played">
                    {extValue}
                </div>
            ) : (
                <div className={allOptions.includes(extIdx) ? 'ExteriorSquare' : 'played'}>
                    {values.map((value, idx) => (
                        <InteriorSquare
                            key={idx}
                            idx={idx}
                            value={value}
                            handleClick={handleClick}
                            current={currentSquare.includes(extIdx) ? 'current' : null}
                        />
                    ))}
                </div>
            )
        }
        </>
    );
}
 
export default ExteriorSquare;