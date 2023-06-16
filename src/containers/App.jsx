import React, { createContext } from "react";

import Loading from "../components/Loading";
import Wrapper from "../components/Wrapper";
import Topbar from "../components/Topbar";
import Main from "../components/Main";
import Display from "../components/Display";
import Library from "../components/Library";
import Progress from "../components/Progress";

import useMusic from "./useMusic";

// Create Context
export const musicContext = createContext();

function App() {
    const {
        isLoading,
        playlist, 
        activeMusic,
        progress, 
        duration,
        play, 
        isPlaying,
        next,
        prev,
        handleClick
    } = useMusic();
    
    return (
        <>
            <musicContext.Provider 
                value={
                    {
                        playlist, 
                        activeMusic,
                        progress,
                        duration,
                        play, 
                        isPlaying, 
                        next,
                        prev,
                        handleClick
                    }
                }
            >
                { isLoading && <Loading /> }
                <Wrapper>
                    <Topbar />
                    <Main>
                        <Display />
                        <Library />
                    </Main>
                </Wrapper>
                <Progress />
            </musicContext.Provider>
        </>
    );
}

export default App;
