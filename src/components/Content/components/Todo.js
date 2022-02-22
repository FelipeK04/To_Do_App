import { DivLi, Li, BtnCheck, IconCheck, BtnTrash, IconTrash } from "./style"

export default function Todo({text, todo, todos, setTodos}) {
  function deleteHandler() {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  function completeHandler() {
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        }
      }
      return item;
    }))
  }

  return (
    <DivLi >
      <Li completed={todo.completed} placeholder={text} disabled></Li>
      <BtnCheck onClick={completeHandler}><IconCheck /></BtnCheck>
      <BtnTrash onClick={deleteHandler} ><IconTrash /></BtnTrash>
    </DivLi>
  )
}