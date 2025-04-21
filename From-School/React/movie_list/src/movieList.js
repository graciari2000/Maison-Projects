import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaBookmark, FaThumbsUp } from 'react-icons/fa';
import './movies.css';
import './movies.txt';
import docteurSleep from './images/docteur-sleep.jpg';
import joker from './images/joker.jpg';
import theKing from './images/the-king.jpg';

const ImagesList = {
    docteurSleep: docteurSleep,
    joker: joker,
    theKing: theKing
};

const MoviesCard = () => {
    return (
        <div>
            <img src={ImagesList.docteurSleep} alt="Docteur Sleep" />
            <img src={ImagesList.joker} alt="Joker" />
            <img src={ImagesList.theKing} alt="The King" />
        </div>
    );
};

// Styles with Styled Components
const MovieCard = styled.div`
    margin-bottom: 20px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    padding: 10px;
`;

const MovieImage = styled.img`
    width: 100%;
    max-height: 200px;
    object-fit: cover;
`;

const MovieTitle = styled.h2`
    font-size: 20px;
    margin: 10px 0;
`;

const MovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BookmarkButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
`;

const LikeButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
`;

// Reducer function for handling state changes
const movieReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_BOOKMARK':
            return {
                ...state,
                isBookmarked: !state.isBookmarked,
                bookmarkCount: state.isBookmarked ? state.bookmarkCount - 1 : state.bookmarkCount + 1,
            };
        case 'TOGGLE_LIKE':
            return {
                ...state,
                isLiked: !state.isLiked,
                likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
            };
        default:
            return state;
    }
};

const MovieList = ({ movies }) => {
    // Initialize state using useReducer hook
    const [movieStates, dispatch] = useReducer(movieReducer, {});

    return (
        <div>
            {movies.map(movie => {
                const movieState = movieStates[movie.id] || {
                    isBookmarked: false,
                    bookmarkCount: 0,
                    isLiked: false,
                    likeCount: 0,
                };

                return (
                    <MovieCard key={movie.id}>
                        <MovieImage src={movie.image} alt={movie.title} />
                        <MovieTitle>{movie.title}</MovieTitle>
                        <div className="author">{movie.category}</div>
                        <MovieInfo>
                            <BookmarkButton onClick={() => dispatch({ type: 'TOGGLE_BOOKMARK', movieId: movie.id })}>
                                <FaBookmark color={movieState.isBookmarked ? 'blue' : 'black'} />
                            </BookmarkButton>
                            <span>{movieState.bookmarkCount}</span>
                            <LikeButton onClick={() => dispatch({ type: 'TOGGLE_LIKE', movieId: movie.id })}>
                                <FaThumbsUp color={movieState.isLiked ? 'blue' : 'black'} />
                            </LikeButton>
                            <span>{movieState.likeCount}</span>
                        </MovieInfo>
                    </MovieCard>
                );
            })}
        </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
};


export  {MovieList, MoviesCard};

