import InteriorSquare from '../InteriorSquare/InteriorSquare';
import './ExteriorSquare.css';

const ExteriorSquare = () => {
    return (
        <div className="ExteriorSquare">
            Exterior
            <InteriorSquare />
        </div>
    );
}
 
export default ExteriorSquare;