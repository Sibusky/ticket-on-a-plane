import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Layout } from './components/layout';
import { Main } from './pages/main';
import db from './db/tickets.json';

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(db.tickets);
  }, []);

  const sortedTickets = useCallback(() => {
    return tickets.sort((a, b) => a.price - b.price);
  }, [tickets]);

  return (
    <Layout>
      <Main tickets={sortedTickets()} />
    </Layout>
  );
}

export default App;
