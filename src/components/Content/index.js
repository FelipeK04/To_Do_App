import { useState, useEffect } from "react"

import Forms from "./components/Form"
import TodoList from "./components/TodoList"

import { Container, Header } from "./style"

export default function Content() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [empty, setEmpty] = useState('')

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    }
  , [todos, status]);


  function filterHandler() {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          if (todos.some(todo => todo.completed === true)) {
            return setEmpty('')
          } else {
            setEmpty('Não há nenhuma tarefa concluída 😥')
          }
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          if (todos.some(todo => todo.completed === false)) {
            return setEmpty('')
          } else {
            setEmpty('Não há nenhuma tarefa para fazer 🔥')
          }
          break;
        default: 
        setFilteredTodos(todos);
        setEmpty('');
        if (todos.length === 0) {
          setEmpty('Não há nada aqui ✌️')
        }
        break
      }
  }

  function saveLocalTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  function getLocalTodos() {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  }
  

  return (
  <Container>
    <Header>
      <h1>FK' To-do List </h1>
    </Header>
    <Forms 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText} 
      status={status} 
      setStatus={setStatus}
      />
    <TodoList 
      todos={todos} 
      setTodos={setTodos} 
      filteredTodos={filteredTodos}
      empty={empty}
      setEmpty={setEmpty}
    />
  </Container>
  )
}