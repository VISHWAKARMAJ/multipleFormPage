import { useState } from "react";
// import "./styles.css";

function TodoItem(props) {
  const { children, onDelete } = props;
  return (
    <div>
      <input type="checkBox" />
      {children}
      <button
        style={{ border: "none" }}
        onClick={() => {
          onDelete(children);
        }}
      >
        {" "}
        delete
      </button>
    </div>
  );
}
function TodoInput(props) {
  const { addOneItem } = props;
  const [input, setInput] = useState(" ");
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          if (input !== "") {
            addOneItem(input);
            // setItem([...item, { content: input, done: false }]);
            // let arr = item.slice();
            // arr.push({ content: input, done: true });
            // setItem(arr);
            setInput(" ");
          }
        }}
      >
        add
      </button>
    </div>
  );
}

export default function TodoList() {
  const [item, setItem] = useState([]);
  function addOneItem(str) {
    setItem([...item, { content: str, done: false }]);
  }
  function TrueItem(str) {
    const newArr = item.map((task) => {
      if (task.content === str) {
        task.done = true;
        return task;
      }
      return task;
    });
    setItem(newArr);
  }
  function onDelete(str) {
    const newArr = item.filter((task) => task.content !== str);
    setItem(newArr);
  }
  return (
    <div>
      <lu>
        <TodoInput addOneItem={addOneItem} />
        {item.map((k) => {
          return (
            <TodoItem onDelete={onDelete} Green={TrueItem} done={item.done}>
              {k.content}
            </TodoItem>
          );
        })}
      </lu>
    </div>
  );
}
// export default function App() {
//   return (
//     <div className="App">
//       <TodoList />
//     </div>
//   );
// }
