import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import api from "../api/axios";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const ButtonContainer = styled.div`
    text-align: right;
`

const HomePage = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    // const getMovie = async() => {
    //     try {
    //         const response = await api.get("movie/index");
    //         setMovie(response.data);
    //         console.log("debug >> axios get OK!! ", response.data);
    //     } catch(err) {
    //         console.log( err );
    //     }
    // }
    // useEffect( () => {
    //     getMovie();
    // }, [] );
    return (
        <Wrapper>
            <Container>
                <ButtonContainer>
                    <Button 
                        title="영화 추가하기"
                        onClick={() => {
                            navigate("movie-write")
                        }} />
                    </ButtonContainer>
            {/* <MovieList 
                    data={movie}
            /> */}
            </Container>
        </Wrapper>
    )
}

export default HomePage;