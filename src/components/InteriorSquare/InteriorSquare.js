import './InteriorSquare.css';

const InteriorSquare = ({ value, idx, handleClick }) => {
    return (
        <div className="InteriorSquare" onClick={() => handleClick(idx)}>
            {value}
        </div>
    );
}
 
export default InteriorSquare;