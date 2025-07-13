import React, { useEffect, useState } from "react";
import { loadtodos, savetodo } from "./LocalStorage";

function Home() {
  const [todo, settodo] = useState([]);
  const [inputvalue, setinputvalue] = useState("");

  useEffect(() => {
    const data = loadtodos();
    settodo(data);
  }, []);

  useEffect(() => {
    savetodo(todo);
  }, [todo]);

  const add = () => {
    if (inputvalue.trim()) {
      settodo([
        ...todo,
        { id: crypto.randomUUID(), text: inputvalue, completed: false },
      ]);
      setinputvalue("");
    }
  };

  const deletebutton = (id) => {
    settodo(todo.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    settodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  console.log(localStorage.getItem("myTodoList"));

  return (
    <>
      <div className="max-w-xl mx-auto px-4 py-6">
        <input
          className="w-full max-w-md px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Add a task..."
          type="text"
          value={inputvalue}
          onChange={(e) => setinputvalue(e.target.value)}
        />
        <button
          onClick={add}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          ADD
        </button>
         <ul className="flex flex-wrap gap-1 justify-between items-start bg-white rounded-lg p-4 shadow-md">
        {todo.length === 0 && (
          <li className="text-gray-400 italic">No tasks yet. Add something!</li>
        )}

        {todo.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-start gap-3 px-4 py-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 hover:scale-[1.01] transition duration-150 w-full mb-4"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggle(item.id)}
                className="w-4 h-4 accent-blue-500 transition-all duration-200"
              />
              <span
                className={`text-base font-medium ${
                  item.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {item.text}
              </span>
            </div>
            <button
              onClick={() => deletebutton(item.id)}
              className="self-end bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 transition"
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>

      </div>
    </>
  );
}

export default Home;
