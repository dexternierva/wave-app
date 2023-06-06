import React, { useContext } from "react";
import { musicContext } from "../containers/App";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { FaStepBackward, FaRegPlayCircle, FaStepForward, FaRegPauseCircle } from "react-icons/fa";

const StyledDisplay = styled.div`
    flex-basis: 40%;
    padding-bottom: 2rem;
    background-color: rgba(var(--surface-clr), 0.4);
`;

const StyledCurrent = styled.div`
    padding-bottom: 1rem;
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
        0px 16px 24px 2px rgba(0, 0, 0, 0.14),
        0px 6px 30px 5px rgba(0, 0, 0, 0.12);
`;

const StyledCover = styled.div``;

const StyledTitle = styled.div`
    margin-top: 1.5rem;
    padding: 0 1rem;
    line-height: 1;
`;

const StyledArtist = styled.div`
    margin-top: 0.5rem;
    padding: 0 1rem;
    color: rgba(var(--secondary-clr), 0.5);
`;

const StyledControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin-top: 2.5rem;
`;

const StyledPrev = styled.div`
    display: flex;
    place-items: center;
    font-size: 1.5rem;
    cursor: pointer;
`;

const StyledPlay = styled.button`
    display: flex;
    place-items: center;
    font-size: 4rem;
    cursor: pointer;
`;

const StyledNext = styled.button`
    display: flex;
    place-items: center;
    font-size: 1.5rem;
    cursor: pointer;
`;

const Display = () => {
    const {
        activeMusic, 
        play, 
        isPlaying, 
        next,
        prev
    } = useContext(musicContext);
    
    return ( 
        <StyledDisplay>
            <StyledCurrent>
                <StyledCover>
                    <img
                        src={activeMusic.cover}
                        alt={activeMusic.name}
                    />
                </StyledCover>
                <StyledTitle>
                    <h2>{activeMusic.name}</h2>
                </StyledTitle>
                <StyledArtist>
                    <p>{activeMusic.artist}</p>
                </StyledArtist>
            </StyledCurrent>

            <StyledControls>
                <IconContext.Provider value={{ color: activeMusic.color[0] }}>
                    <StyledPrev onClick={prev}>
                        <FaStepBackward />
                    </StyledPrev>
                    <StyledPlay onClick={play}>
                        { isPlaying ? <FaRegPauseCircle /> : <FaRegPlayCircle /> }
                    </StyledPlay>
                    <StyledNext onClick={next}>
                        <FaStepForward />
                    </StyledNext>
                </IconContext.Provider>
            </StyledControls>
        </StyledDisplay>
    )
}

export default Display;