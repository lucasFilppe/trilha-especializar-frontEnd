import axios from "axios";

function App() {
  return (
    <div>
      {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(function (response) {
          // aqui acessamos o corpo da resposta:
          console.log(response.data) // lista de todos os pratos do Aluroni
        })
      }
    </div>
  );
}

export default App;
