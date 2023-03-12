import { useEffect, useState } from "react";
import {Card, cardProps} from "../../components/Card";
import { Container } from "./style";

export function Home() {
  //estado para lidar com mudança de nome
  const [studentName, setStudentName] = useState("");

  //estado para adicionar novo estudante
  const [students, setStudents] = useState<cardProps[]>([]);

  //estado para consumir api
  const [user, setUser] = useState({name: '', avatar: ''})

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

  //criando useEffect
  useEffect(() => {
    fetch('https://api.github.com/users/lucasFilppe')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  }, [students])

  return (
    <Container>
      <header>
        <h1>Lista de presenças</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt='foto de perfifil' />
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

