import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 690px;
    height: 200px;
    padding: 16px;
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
const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;


function MovieItem(props) {
    const navigate = useNavigate();
    const moveHandler = (id) => {
        navigate(`movie-view/${id}`)
    }
    return (
        <Wrapper onClick={() => moveHandler(props.data.id)}>
            <TitleText>
                {props.data.title}
            </TitleText>
        </Wrapper>
    )
}

export default MovieItem;