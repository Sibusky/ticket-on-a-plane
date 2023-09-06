import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Layout } from './components/layout';
import { Main } from './pages/main';
import db from './db/tickets.json';

function App() {
  const [tickets, setTickets] = useState([]);
  const [selectedTransfers, setSelectedTransfers] = useState([]);

  useEffect(() => {
    setTickets(db.tickets);
  }, []);

  const handleTransferFilter = useCallback((transfer) => {
    setSelectedTransfers((prevSelectedTransfers) => {
      if (prevSelectedTransfers.includes(transfer)) {
        return prevSelectedTransfers.filter((item) => item !== transfer);
      } else {
        return [...prevSelectedTransfers, transfer];
      }
    });
  }, []);

  const sortedTickets = useCallback(() => {
    return tickets
      .filter((ticket) => {
        if (selectedTransfers.length === 0) {
          return true; // Show all tickets if no transfers are selected
        } else {
          return selectedTransfers.includes(ticket.stops.toString());
        }
      })
      .sort((a, b) => a.price - b.price);
  }, [tickets, selectedTransfers]);

  return (
    <Layout>
      <Main
        tickets={sortedTickets()}
        handleTransferFilter={handleTransferFilter}
        selectedTransfers={selectedTransfers}
      />
    </Layout>
  );
}

export default App;
