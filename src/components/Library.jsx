import { React, useContext } from "react";
import { musicContext } from "../containers/App";
import styled, {css} from "styled-components";

const StyledLibrary = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    @media (min-width: 768px) {
        flex-basis: 60%;
        flex-grow: 1;
    }
`;

const StyledItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
    list-style-type: none;
    cursor: pointer;
    background-color: transparent;
    transition: all 100ms ease-in;

    ${props =>
        props.hovercolor &&
        css`
            &:hover {
                background-color: ${props.hovercolor};
                color: #FFF;
            }
            &.active {
                background-color: ${props.hovercolor};
                color: #FFF;
            }
    `}
`;

const StyledFigure = styled.figure`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const StyledThumbnail = styled.figure`
    max-width: 48px;
    aspect-ratio: 1;
    overflow: hidden;
`;

const StyledImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const StyledText = styled.div`
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

const StyledFigcaption = styled.figcaption`
`;

const StyledArtist = styled.p`
    font-size: 0.65rem;
`;

const Library = () => {
    const {playlist, handleClick} = useContext(musicContext);

    return (
        <StyledLibrary>
            {playlist.map((music) => {
                return (
                    <StyledItem
                        key={music.id} 
                        className={`${music.active === true ? 'active' : ''}`} 
                        hovercolor={music.color[0]}
                        onClick={ (event) => {
                            event.preventDefault();
                            handleClick(music.id);
                        }}
                    >
                        <StyledFigure>
                            <StyledThumbnail>
                                <StyledImg src={music.cover} alt={music.name} />
                            </StyledThumbnail>
                            <StyledText>
                                <StyledFigcaption>{music.name}</StyledFigcaption>
                                <StyledArtist>{music.artist}</StyledArtist>
                            </StyledText>
                        </StyledFigure>
                    </StyledItem>
                )
            })}
        </StyledLibrary>
    );
};

export default Library;
