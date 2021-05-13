import { useState, useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import InteriorSquare from '../InteriorSquare/InteriorSquare';
import './ExteriorSquare.css';

const ExteriorSquare = ({ extValue, extIdx, handleExtChange }) => {
    const { player, setPlayer, checkWin, setInnerWinner } = useContext(GameContext);

    const [values, setValues] = useState([null, null, null, null, null, null, null, null, null]);

    const handleClick = (index) => {
        if (values[index] === null) {
            const valuesCopy = values;
            valuesCopy[index] = player.symbol;
            setValues(valuesCopy);
            setPlayer(prevState => ({
                id: prevState.id === 1 ? 2 : 1,
                symbol: prevState.id === 1 ? 'O' : 'X',
            }));
    
            const winner = checkWin(valuesCopy);
            if (winner) {
                setInnerWinner(winner);
                handleExtChange(extIdx, winner);
            } 
        }
    }

    return (
        <div className="ExteriorSquare">
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