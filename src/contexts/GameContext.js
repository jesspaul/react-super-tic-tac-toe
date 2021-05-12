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

    const contextValue = {
        player,
        setPlayer,
        togglePlayer,
    }

    return (
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;