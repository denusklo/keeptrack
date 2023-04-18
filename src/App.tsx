import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {

  const [data, setData] = useState<Todo | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  async function fetchData(): Promise<string> {
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    return data;
  }
  

  return (
    <>
      <div>{data.title}</div>
      <div className="container">
        <ProjectsPage />
        <div></div>
      </div>
    </>
  );
}

export default App;
