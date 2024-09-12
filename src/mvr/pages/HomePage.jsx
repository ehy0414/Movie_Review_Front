import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import api from "../api/axios";
import MovieList from "../list/MovieList";

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
const Input = styled.input`
    width : 86%;
    max-width: 720px;
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
    text-align: center;
`;
const ButtonContainer = styled.div`
    text-align: right;
`

const HomePage = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState("");
    const [callbackSearch, setcallbackSearch] = useState("");

    const getMovie = async() => {
        try {
            const response = await api.get("movie/index");
            setMovie(response.data);
            console.log("debug >> axios get OK!! ", response.data);
        } catch(err) {
            console.log( err );
        }
    }
    useEffect( () => {
        getMovie();
    }, [] );
    return (
        <Wrapper>
            <Container>
            <Input
                value={search}
                placeholder="영화를 입력하세요"
                type="text"
                onChange={(e) => {
                setSearch(e.target.value);
                }}
            />
            <Button 
                title="검색"
                onClick={() => {
                    setcallbackSearch(search);
            }} />
            <p/>
                <ButtonContainer>
                    <Button 
                        title="영화 추가하기"
                        onClick={() => {
                            navigate("movie-write")
                        }} />
                    </ButtonContainer>
                    <br />
            <MovieList 
                    data={movie}
                    search={callbackSearch}
            />
            </Container>
        </Wrapper>
    )
}

export default HomePage;