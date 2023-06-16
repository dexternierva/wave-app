import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the loading animation
const loadingAnimation = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
`;

// Styled component for the loading circle
const LoadingCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    width: 48px;
    height: 48px;
    background-color: #fff;
    border-radius: 50%;
    animation: ${loadingAnimation} 1.2s ease-in-out infinite;
    z-index: 9;
`;

const LoadingWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(189, 195, 199, 0.6);
    z-index: 8;
`;

function Loading() {
    return (
        <LoadingWrapper>
            <LoadingCircle />
        </LoadingWrapper>
    );
}

export default Loading;
