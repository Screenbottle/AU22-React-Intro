import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Name = (props) => {


  return (
    <h2>Jag heter {props.name}!</h2>
  )
}

const ToDoItem = (props) => {
  return (
    <li>
      {props.text}
      <DoneButton done={props.done}/>
    </li>
  )
}

const DoneButton = (props) => {

  const [done, setDone] = useState(props.done);

  let todoDone = 'Ej Klar';

  if (done === true) {
    todoDone = 'Klar';
  }

  return (
    <button onClick={()=> setDone(!done)}>{todoDone}</button>
  )
}

const AddItem = (props) => {

  const [input, setInput] = useState('')

  const addAndClear = () => {
    props.handleAdd(input);
    setInput('');
  }

  return (
    <div>
      <input type='text' value={input} onInput = {e => setInput(e.target.value)}></input>
      <button onClick = {addAndClear}>Add</button>
    </div>
  )
}

function App() {

  const item = {text: 'Köp ost', done: false};
  const item2 = {text: 'Köp smör', done: false};
  const defaultValue = [item, item2];
  const [todoList, setTodoList] = useState(defaultValue);

  const todoItems = todoList.map((item, index) => (
    <ToDoItem text = {item.text} done = {item.done} />
  ));

  const addItem = (itemText) => {
    const item = {text: itemText, done: false};

    setTodoList([...todoList, item]);
  }


  return (
    <div>
      <h1>Todo</h1>
      <AddItem handleAdd={addItem}/>
      <ul className='todo-list'>
        {todoItems}
      </ul>
    </div>
  )
}

export default App
