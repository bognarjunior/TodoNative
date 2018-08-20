const url = 'http://localhost:3000/tarefas';

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

export const updateTarefa = (tarefa) => {
  return fetch(`${url}/${tarefa.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tarefa),
  })
  .then(response => response.json());
}
