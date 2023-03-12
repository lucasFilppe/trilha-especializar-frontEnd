import { Container } from "./style";

export interface cardProps{
    name: string;
    time: string;
}

export function Card(props: cardProps){
    return(
        <Container>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </Container>
    )
}

