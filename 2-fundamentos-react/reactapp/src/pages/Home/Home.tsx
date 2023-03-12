import Card from "../../components/Card"
import { Container } from "./style"

 
function Home() {
  

  return (
    <Container>
      <h1>Lista de presenças</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
      <Card name="Lucas Filipe" time='23:00'/>
      <Card name="Maria Helena" time='23:10'/>
    </Container>
  )
}

export default Home
