//const url = 'http://localhost:3000/tarefas';
const url = 'http://192.168.15.13:3000/tarefas';
//const url = 'http://127.0.0.1:3000/tarefas';

export const fetchTodos = () => {
  return fetch(url).then(response =>  response.json());
}

export const createTarefa = (tarefa) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tarefa),
  })
  .then(response => response.json());
}
