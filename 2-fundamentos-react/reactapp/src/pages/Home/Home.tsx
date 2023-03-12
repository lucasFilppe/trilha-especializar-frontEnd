import { Container } from "./style"

 
function Home() {
  

  return (
    <Container>
      <h1>Lista de presenças</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
    </Container>
  )
}

export default Home
