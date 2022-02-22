import { Form, Input, Button, Icon , Div, Select, Option } from "./style"

export default function Forms({inputText, setInputText, setTodos, todos, setStatus, error, setError }) {

  function inputTextHandler(e) {
    setInputText(e.target.value);
  }

  function submitTodoHandler(e) {
    e.preventDefault();
    if(inputText === '') {
      return 
    } else {
      setTodos([
        ...todos,
        {
          id: ((Math.random() * 1000).toFixed(4)),
          text: inputText, 
          completed: false,
        }
      ]);
      setInputText("");

    }
  }

  function statusHandler(e) {
    setStatus(e.target.value);
  }

  return (
    <Form>
      <Input type="text" onChange={inputTextHandler} value={inputText} placeholder='Digite aqui sua tarefa'></Input>
      <Button type="submit" onClick={submitTodoHandler}>
        <Icon />
      </Button>

      <Div>
        <Select name="todos" onChange={statusHandler}>
          <Option value="all">Todas</Option>
          <Option value="completed">Completas</Option>
          <Option value="uncompleted">Incompletas</Option>
        </Select>
      </Div>
    </Form>
  )
}