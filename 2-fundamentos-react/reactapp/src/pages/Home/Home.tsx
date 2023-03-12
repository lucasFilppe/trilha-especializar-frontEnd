import { useState } from "react"
import Card from "../../components/Card"
import { Container } from "./style"

 
function Home() {
  //estado para lidar com mudança de nome
  const [studentName, setStudentName] = useState('')

  return (
    <Container>
      <h1>Lista de presenças</h1>
      <h2>Nome: {studentName}</h2>
      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={e => setStudentName(e.target.value)}  
      />
      <button type="button">Adicionar</button>
      <Card name="Lucas Filipe" time='23:00'/>
      <Card name="Maria Helena" time='23:10'/>
    </Container>
  )
}

export default Home
