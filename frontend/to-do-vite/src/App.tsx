import { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('Teste');

  return (
    <>
      <h1>To-do app né</h1>
      <input type="text" placeholder='Adicione o texto' onChange={e => setItem(e.target.value)}/>
      <button>Adicionar</button>
      <p>{item}</p>
    </>
  );
}

export default App;
