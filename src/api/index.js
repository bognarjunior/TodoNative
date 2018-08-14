//const url = 'http://localhost:3000/tarefas';
const url = 'http://192.168.15.13:3000/tarefas';
//const url = 'http://127.0.0.1:3000/tarefas';

export const fetchTodos = () => {
  return fetch(url).then(response =>  response.json());
}
