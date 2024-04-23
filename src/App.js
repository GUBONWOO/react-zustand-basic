import { useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { useUserStore } from './store/useUserStore';

function App() {
  const { fetch, user } = useUserStore();
  useEffect(() => {
    fetch(1);
  }, [fetch]);
  return (
    <div className='App'>
      <header className='app-header'>
        <Counter />
        <TodoList />
        <p>{user.name}</p>
      </header>
    </div>
  );
}

export default App;
