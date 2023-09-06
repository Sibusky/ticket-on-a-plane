import { useEffect, useState } from 'react';
import './App.css';
import { Layout } from './components/layout';
import { Main } from './pages/main';
import db from './db/tickets.json';

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(db.tickets);
  }, []);

  return (
    <Layout>
      <Main tickets={tickets}/>
    </Layout>
  );
}

export default App;
