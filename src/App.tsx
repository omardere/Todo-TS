import React, { useState, useEffect } from "react";
import TodoAdd from "./component/TodoAdd";
import TodoList from "./component/TodoList";
import Count from "./component/Count";
import Search from "./component/Search";
import { deleteTodo, getTodos, addTodos,updateTodos } from "./utils/api";
import { Todo } from "./types/componentTypes";


const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [serachData, setSearchData] = useState<Todo[]>([]);
  const onCheck = (itemId: string, isComplete: boolean) => {
    updateTodos(itemId,isComplete)
    const temp = todos.map((todo: Todo) => {
      if (itemId === todo.id) {
        todo.isComplete = isComplete;
      }
      return todo;
    });
    setTodos(temp);
  };
  const onDelete = (id1: string) => {
    deleteTodo(id1).then(() => fetchTodos());
  };
  const addTodo = (title1: string, assign: string) => {
    addTodos(title1, assign)
      .then(() => fetchTodos());
  };
  const searchTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchData(
      todos.filter(t => t.title.toLowerCase().includes(searchValue) ||
        t.assginedTo.toLowerCase().includes(searchValue))
    );
  };
  const fetchTodos = () => {
    getTodos()
      .then((res) => {
        setTodos(res.data.items);
        setSearchData(res.data.items);
      }).catch(function (error) {
        console.log(error.toJSON());
      });
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <TodoAdd addTodo={addTodo} />
      <Search onChange={searchTodo} />
      <TodoList
        todo={serachData}
        onDelete={onDelete}
        onCheck={onCheck}
      />
      <Count todo={todos} />
    </div>
  );
};

export default App;
