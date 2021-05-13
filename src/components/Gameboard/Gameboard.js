import { useState, useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import ExteriorSquare from '../ExteriorSquare/ExteriorSquare';
import './Gameboard.css';

const Gameboard = () => {
    const { checkWin, setWinner } = useContext(GameContext);

    const [extValues, setExtValues] = useState([null, null, null, null, null, null, null, null, null]);

    const handleExtChange = (index, winner) => {
        const extValuesCopy = extValues;
        extValuesCopy[index] = winner;
        setExtValues(extValuesCopy);

        const extWinner = checkWin(extValuesCopy);
        setWinner(extWinner);
    }

    return (
        <div className="Gameboard">
            {
                extValues.map((extValue, extIdx) => (
                    <ExteriorSquare
                        key={extIdx}
                        extIdx={extIdx}
                        extValue={extValue}
                        handleExtChange={handleExtChange}
                    />
                ))
            }
        </div>
    );
}
 
export default Gameboard;