import styled from "styled-components";
import Button from "../ui/Button";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    :hover {
        background: lightgrey;
    }
`;

const ContentText = styled.p`
    font-size: 16px;
    white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
    text-align: right;
`;

const CommentItem = (props) => {
    const navigate = useNavigate();
    const deleteComment = async(id) => {
        try {
            const response = await api.delete(`/movie/comment/delete/${id}`);
            console.log(id)
            console.log(response.data);
            alert("삭제가 완료됐습니다!");
            navigate(`/`)
            console.log("클릭")
        } catch( err ) {
            console.log(err);
        }
    }
    return(
        // onClick={() => moveHandler(props.data.id)}
        <Wrapper>
            <ContentText>{props.comments}</ContentText>
            <ButtonContainer>
                <Button title="삭제하기"
                        onClick={() => deleteComment(props.data.id)} />
            </ButtonContainer>
        </Wrapper>
        
    )
}

export default CommentItem;