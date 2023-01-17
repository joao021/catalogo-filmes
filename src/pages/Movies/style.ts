import styled from "styled-components";

interface Props {
    active?: boolean;
  }

export const Title = styled.h1`
    margin-top: 30px;
    font-size: 1.5em;
    text-align: center;
    color: black;
    font-weight: bold;
`;
export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 15px;
`;

export const MovieDetails = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 4fr));
`;

export const Movies = styled.li`
    display: flex;
    flex-direction: column;
    width: 200px;
    box-shadow: -1px 2px 6px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    color: black;
    border-radius: 10px;
    margin-bottom: 35px;
    min-height: 355px;
`;

export const Posters = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`;

export const AverageHighlight = styled.span`
    color: #0062ff;
`;

export const FilmTitle = styled.p`
    font-size: 15px;
    font-weight: bold;
`;

export const ReleaseData = styled.p`
    font-size: 12px;
`;

export const AverageVote = styled.p`
    font-weight: bold;
    font-size: 13px;
`;

export const OptionButton = styled.button<Props>`
    background-color: ${props => (props.active ? "#000" : "#eee")};
    color: ${props => (props.active ? "#fff" : "#000")};
    border: ${props => (props.active ? "none" : "1px solid black")};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0 10px;
    cursor: pointer;
`;


export const ButtonsDiv = styled.div`
    display: flex;
    gap: 25px;
    margin-bottom: 50px;
`;

export const TitleContainer = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;
//https://image.tmdb.org/t/p/w200/{POSTER_PATH}
