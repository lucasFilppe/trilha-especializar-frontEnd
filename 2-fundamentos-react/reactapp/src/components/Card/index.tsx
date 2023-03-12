import { Container } from "./style";

interface cardProps{
    name: string;
    time: string;
}

function Card(props: cardProps){
    return(
        <Container>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </Container>
    )
}

export default Card;