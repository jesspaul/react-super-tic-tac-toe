import './Instructions.css';

const Instructions = () => {
    return (
        <div className="Instructions">
            <h2>Instructions</h2>
            <p id='instruct-text'>To play, take turns placing X and O in the interior grids. Wherever you play in the interior grid, the next player must make their play in the corresponding exterior grid space. Get three in a row in the interior grid and claim the space on the exterior grid. Get three in a row in the exterior grid and you win the game!</p>
        </div>
    );
}
 
export default Instructions;