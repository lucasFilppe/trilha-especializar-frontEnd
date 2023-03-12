import { useState } from "react";
import Card from "../../components/Card";
import { Container } from "./style";

function Home() {
  //estado para lidar com mudança de nome
  const [studentName, setStudentName] = useState("");

  //estado para adicionar novo w=estudante
  const [students, setStudents] = useState([]);

  //função para adicionar estudante
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  return (
    <Container>
      <header>
        <h1>Lista de presenças</h1>
        <div>
          <strong>Lucas</strong>
          <img src="https://github.com/lucasFilppe.png" alt='foto de perfifil' />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        /*pecorremos o array de estudantes adicionados*/
        students.map((student) => (
          <Card key={student.time} name={student.name} time={student.time} />
        ))
      }
    </Container>
  );
}

export default Home;
