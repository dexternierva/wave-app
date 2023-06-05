import { React } from "react";
import styled, {css} from "styled-components";

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

const Wrapper = ({ musicState, children }) => {
    const {musicData} = musicState;
    const activeMusic = musicData.find((music) => music.active === true);

    return (
        <StyledWrapperOuter bg={activeMusic.cover}>
            <StyledWrapperInner>
                {children}
            </StyledWrapperInner>
        </StyledWrapperOuter>
    );
};

export default Wrapper;