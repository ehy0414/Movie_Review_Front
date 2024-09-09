import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
`;

const MoviewWritePage = () => {
    const navigate = useNavigate();

    //const [images, setImages] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const contentHandler = (e) => {
        setContent(e.target.value)
    }
    const cancelHandler = () => {
        navigate("/")
    }
    const movieSave = async(title, content) => {
        const data = {
            title : title,
            content : content
        }
        try{
            const response = await api.post("movie/save", data);
            if(response.status == 204) {
                alert("글 작성완료하고 홈으로 이동합니다.")
                navigate("/")
            } else {
                alert("데이터 저장시 문제발생!!")
            }


            console.log(response.data);
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Wrapper>
            <Container>
                <label> 제목 :
                <TextInput  height={20}
                            value={title}
                            onChange={titleHandler} />
                </label>
                <label> 내용 :
                <TextInput  height={400}
                            value={content}
                            onChange={contentHandler} />
                </label>
                <ButtonContainer>
                    <Button title="영화 등록하기"
                            onClick={(e) => {movieSave(title,content)}}
                            >
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button title="취소"
                            onClick={cancelHandler}>
                    </Button>
                </ButtonContainer>

            </Container>
        </Wrapper>
    )
}

export default MoviewWritePage;