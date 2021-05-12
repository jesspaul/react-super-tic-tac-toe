import ExteriorSquare from '../ExteriorSquare/ExteriorSquare';
import './Gameboard.css';

const Gameboard = () => {
    return (
        <div className="Gameboard">
            <ExteriorSquare />
            <ExteriorSquare />
            <ExteriorSquare />
            <ExteriorSquare />
            <ExteriorSquare />
            <ExteriorSquare />
            <ExteriorSquare />
            <ExteriorSquare />
            <ExteriorSquare />
        </div>
    );
}
 
export default Gameboard;