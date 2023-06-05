import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
    --max-width: 960px;
    --min-gap: 24px;
    --side-gap: calc(
        (100vw - min(var(--max-width), calc(100vw - (var(--min-gap) * 2)))) / 2
    );
    padding-left: var(--side-gap);
    padding-right: var(--side-gap);
    
    margin-top: 3rem;

    @media (min-width: 768px) {
        display: flex;
        gap: 6rem;
    }
`;

const Main = ({ children }) => {
    return <StyledMain>{children}</StyledMain>;
};

export default Main;
