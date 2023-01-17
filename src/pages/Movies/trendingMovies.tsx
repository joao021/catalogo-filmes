import React, {useEffect, useState} from "react";
import "../../App.css";
import {APIKey} from "../../services/api";
import {Title, Container, MovieList, Movies, Posters, FilmTitle, ReleaseData, AverageVote, MovieDetails, AverageHighlight, OptionButton, ButtonsDiv, TitleContainer} from "./style";
import axios from "axios";

function TrendingMovies() {
    const [movies, setMovies] = useState<any[]>([]);
    const [dayOrWeek, setDayOrWeek] = useState("day");
    const moviesApi = `https://api.themoviedb.org/3/trending/movie/${dayOrWeek}?api_key=${APIKey}`;

    const posterUrl = "https://image.tmdb.org/t/p/w200/";
    useEffect(() => {
        getMovies();
    }, [dayOrWeek]);

    const getMovies = async () => {
        const {data} = await axios.get(moviesApi);
        setMovies(data.results);
    };

    return (
        <Container>
            <TitleContainer>
                <Title>Most Rated Movies</Title>
                <ButtonsDiv>
                    <OptionButton
                        active={dayOrWeek === "day"}
                        onClick={() => setDayOrWeek("day")}
                    >
                    Today
                    </OptionButton>
                    <OptionButton
                        active={dayOrWeek === "week"}
                        onClick={() => setDayOrWeek("week")}
                    >
                        This week
                    </OptionButton>
                </ButtonsDiv>
            </TitleContainer>
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movies key={movie}>
                            <Posters src={`${posterUrl}${movie.poster_path}`}></Posters>
                            <MovieDetails>
                                <FilmTitle>{movie.title}</FilmTitle>
                                <AverageVote>
                                    <AverageHighlight>{movie.vote_average.toFixed(1)}</AverageHighlight>/10
                                </AverageVote>
                                <ReleaseData>Release Data: {movie.release_date.replace(/-/g, "/")}</ReleaseData>
                            </MovieDetails>
                        </Movies>
                    );
                })}
            </MovieList>
        </Container>
    );
}

export default TrendingMovies;
