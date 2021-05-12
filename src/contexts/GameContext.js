import { useState, createContext } from 'react';

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const [player, setPlayer] = useState({
        id: 1,
        symbol: 'X'
    });

    const togglePlayer = () => {
        if (player.id === 1) {
            setPlayer({
                id: 2,
                symbol: 'O'
            });
        } else {
            setPlayer({
                id: 1,
                symbol: 'X'
            });
        }
    }

    const [winner, setWinner] = useState(null);

    const winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkInnerWin = (squares) => {
        for (let i = 0; i < winningPositions.length; i++) {
          const [a, b, c] = winningPositions[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    const contextValue = {
        player,
        setPlayer,
        togglePlayer,
        checkInnerWin,
        winner,
        setWinner
    }

    return (
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;