import React, { useContext } from "react";
import { musicContext } from "../containers/App";
import styled, { css } from "styled-components";

const StyledWrapperOuter = styled.div`
    ${props =>
        props.bg &&
        css`
            background-image: url(${props.bg})
        `
    };
    background-position: center;
    background-size: cover;
`;

const StyledWrapperInner = styled.div`
    min-height: 100vh;
    background-color: rgba(var(--primary-clr), 0.7);
    backdrop-filter: blur(16px);
`;

const Wrapper = ({ children }) => {
    const {activeMusic} = useContext(musicContext);

    return (
        <StyledWrapperOuter bg={activeMusic.cover}>
            <StyledWrapperInner>
                {children}
            </StyledWrapperInner>
        </StyledWrapperOuter>
    );
};

export default Wrapper;