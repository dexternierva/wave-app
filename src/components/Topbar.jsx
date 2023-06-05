import React from "react";
import styled from "styled-components";

import { FaWaveSquare, FaRegListAlt } from "react-icons/fa";

const StyledHeader = styled.header`
    --max-width: 960px;
    --min-gap: 24px;
    --side-gap: calc(
        (100vw - min(var(--max-width), calc(100vw - (var(--min-gap) * 2)))) / 2
    );
    padding-left: var(--side-gap);
    padding-right: var(--side-gap);
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLogo = styled.h1`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: rgba(var(--secondary-clr), 1);
    text-transform: uppercase;
    font-style: italic;
    line-height: 1;
`;

const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 32px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const Topbar = () => {
    return (
        <StyledHeader>
            <StyledLogo><FaWaveSquare />wave</StyledLogo>
            <StyledMenu><FaRegListAlt /></StyledMenu>
        </StyledHeader>
    );
};

export default Topbar;
