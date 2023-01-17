import "../../App.css";
import {Title, Container, OptionButton, ButtonsDiv, ContainerWrap, ContainerImg, Subtitle} from "./style";
import {Link} from "react-router-dom";
function Home() {
    return (
        <Container>
            <ContainerImg></ContainerImg>
            <ContainerWrap>
                <Title>Searching for a movie?</Title>
                <Subtitle>click on the link below and have fun</Subtitle>
                <ButtonsDiv>
                    <Link to={"/trending"}>
                        <OptionButton>Trending films</OptionButton>
                    </Link>
                </ButtonsDiv>
            </ContainerWrap>
        </Container>
    );
}

export default Home;
