import styled from "styled-components";
import MovieItem from "./MovieItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const MovieList = (props) => {
    return (
        <Wrapper>
            { props.data.filter((movie) => movie.title.includes(props.search))
                        .map( (movie) => {
                            return (
                                <MovieItem 
                                    key={movie.id}
                                    data={movie}
                                />
                            )
                        })

            }
        </Wrapper>
    )
}

export default MovieList;