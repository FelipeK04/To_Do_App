import Todo from "./Todo";

import { DivList, Ul, PEmpty } from "./style";

export default function TodoList({todos, setTodos, filteredTodos, error, empty, setEmpty}) {
  return (
    <DivList>
      <Ul>
        {empty !== '' ? <PEmpty>{empty}</PEmpty> : ''}
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo}/>
          ))}
      </Ul>
    </DivList>
  )
}