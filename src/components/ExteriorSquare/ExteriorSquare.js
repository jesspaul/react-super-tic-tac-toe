import { useState, useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import InteriorSquare from '../InteriorSquare/InteriorSquare';
import './ExteriorSquare.css';

const ExteriorSquare = () => {
    const { player } = useContext(GameContext);

    const [values, setValues] = useState([null, null, null, null, null, null, null, null, null]);

    const handleClick = (index) => {
        const valuesCopy = values;
        valuesCopy[index] = player.symbol;
        setValues(valuesCopy);
    }

    return (
        <div className="ExteriorSquare">
            {
                values.map((value, idx) => (
                    <InteriorSquare
                        key={idx}
                        idx={idx}
                        value={value}
                        handleClick={handleClick}
                    />
                ))
            }
        </div>
    );
}
 
export default ExteriorSquare;