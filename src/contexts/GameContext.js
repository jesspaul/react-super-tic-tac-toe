import { useState, useEffect, createContext, useContext } from 'react';

export const GameContext = createContext();

const GameContextProvider = (props) => {

    return (
        <GameContext.Provider>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;