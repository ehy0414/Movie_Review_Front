import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import api from "../api/axios";
import CommentList from "../list/CommentList";

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
const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
    background: #9C5250;
`;
const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;
const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;
const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;
const ButtonContainer = styled.div`
    text-align: right;
    
`;

const MovieViewPage = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const getMovie = async() => {
        try {
            const response = await api.get(`movie/view/${id}`);
            setMovie(response.data);
            setComments(response.data.comments);
        } catch ( err ) {
            console.log(err);
        }
    }
    
    const getComments = async() => {
        try {
            const response = await api.get(`movie/comments/getComment/${id}`);
            setComments(response.data);
            console.log(response.data.length);
        } catch( err ) {
            console.log(err);
        }
    }
    useEffect( () => {
        getMovie();
    },[])

    const textHandler = (e) => {
        setComment(e.target.value)
    }

    const createTimeline = async(content,movieId) => {
        if(content == '') {
            alert("타임라인을 작성해 주세요!!")
        } else {
            const data = {
                content : content,
                movieid : movieId
            }
            console.log(movieId);
            try {
                const response = await api.post(`movie/comments/save`,data)
                console.log("axios comment response data ", response.data)
                console.log("axios comment status", response.status)
                if(response.status == 204) {
                    alert("comment 등록 완료!!");
                    setComment('');
                    getComments();
                } else {
                    alert("타임라인 등록 오류 발생!!!");
                }

            } catch (err) {
                console.log(err)
            }
        }
    }

    const deleteMovie = async(id) => {
        try {
            console.log(comments.length);
            if(comments.length > 0) {
                alert("커맨트 삭제를 해야합니다")
            } else {
                const response = await api.delete(`/movie/delete/${id}`);
                alert("삭제가 완료 되었습니다");
                navigate("/");
                console.log(response.data);
            }
        } catch (err) {
            console.log(err)
        }
    }


    return(
        <Wrapper>
            <Container>
                <ButtonContainer>
                    <Button 
                        title="뒤로가기"
                        onClick={() => {
                            navigate("/");
                        }} />
                </ButtonContainer>
                
                    <p />
                <PostContainer>
                    <TitleText>{movie.title}</TitleText>
                    <ContentText>{movie.content}</ContentText>
                    <ButtonContainer>
                        &nbsp;&nbsp;
                        <Button title="게시글 삭제하기"
                                onClick={() => deleteMovie(movie.id)} />
                    </ButtonContainer>
                    
                </PostContainer>

                <CommentLabel>타임라인</CommentLabel>
                <TextInput 
                    height={20}
                    value={comment}
                    onChange={textHandler} />
                <ButtonContainer>
                    <Button 
                        title="타임라인 등록하기" 
                        onClick={() => {createTimeline(comment,movie.id)}} />
                </ButtonContainer>
                <p />

                <CommentList
                    data={comments} />
            </Container>
        </Wrapper>
        
    )
}




export default MovieViewPage;