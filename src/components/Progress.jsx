import { React, useContext, useEffect } from "react";
import { musicContext } from "../containers/App";
import styled, { css } from "styled-components";

const StyledTrackbarWrap = styled.div`
    width: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    background-color: rgba(189, 195, 199, 0.5);
`;

const StyledTrackbar = styled.progress`
    -webkit-appearance: none;
    appearance: none;
    
    width: 100%;
    height: 1rem;
    border: none;
    background-color: rgba(236, 240, 241, 1);
    accent-color: rgba(26, 188, 156, 1);
    border-radius: 10px;
    overflow: hidden;

    &::-webkit-progress-value {
        background-color: rgba(26, 188, 156, 1);
    }

    &::-moz-progress-bar {
        background-color: rgba(26, 188, 156, 1);
    }

    ${props =>
        props.trackcolor &&
        css`
            &::-webkit-progress-value {
                background-color: ${props.trackcolor};
            }
        
            &::-moz-progress-bar {
                background-color: ${props.trackcolor};
            }
    `}
`;

const StyledProgress = styled.p`
    font-weight: bold;
`;

const StyledDuration = styled.p`
    font-weight: bold;
`;

const Progress = () => {
    const {activeMusic, progress, duration} = useContext(musicContext);
    let value = 0;
    let max = 0;

    const convertTime = (time) => {
        const [min, sec] = time.split(":");
        const minInt = parseInt(min, 10);
        const secInt = parseInt(sec, 10);
        const total = minInt * 60 + secInt;
        return total;
    }
    
    if (progress) {
        value = convertTime(progress).toString();
        max = convertTime(duration).toString();
    }

    return (
        <StyledTrackbarWrap>
            <StyledProgress>{progress ? progress : '00:00'}</StyledProgress>
            <StyledTrackbar value={value} max={max} trackcolor={activeMusic.color[1]}></StyledTrackbar>
            <StyledDuration>{duration}</StyledDuration>
        </StyledTrackbarWrap>
    );
};

export default Progress;
