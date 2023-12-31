import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Layout } from './components/layout';
import { Main } from './pages/main';
import db from './db/tickets.json';
import { transfersMap } from './components/filter/constants';

function App() {
  const [tickets, setTickets] = useState([]);
  const [selectedTransfers, setSelectedTransfers] = useState([]);
  const [currency, setCurrency] = useState('rub');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Imitate fetching time to show loader
    setIsFetching(true);
    setTimeout(() => {
      setTickets(db.tickets);
      setIsFetching(false);
    }, 2000);
  }, []);

  const handleTransferFilter = useCallback((transfer) => {
    setSelectedTransfers((prevSelectedTransfers) => {
      if (!prevSelectedTransfers.includes('all') && transfer === 'all') {
        return Object.keys(transfersMap);
      }
      if (prevSelectedTransfers.includes('all') && transfer === 'all') {
        return [];
      }
      if (prevSelectedTransfers.includes(transfer)) {
        return prevSelectedTransfers.filter((item) => item !== transfer);
      } else {
        return [...prevSelectedTransfers, transfer];
      }
    });
  }, []);

  const handleOnlyButtonClick = useCallback(
    (transfer) => {
      setSelectedTransfers(selectedTransfers.filter((item) => item === transfer));
    },
    [selectedTransfers]
  );

  const sortedTickets = useCallback(() => {
    return tickets
      .filter((ticket) => {
        if (selectedTransfers.length === 0 || selectedTransfers.includes('all')) {
          return true; // Show all tickets if no transfers are selected
        } else {
          return selectedTransfers.includes(ticket.stops.toString());
        }
      })
      .sort((a, b) => a.price - b.price);
  }, [tickets, selectedTransfers]);

  const handleCurrencyChange = useCallback((currency) => {
    setCurrency(currency);
  }, []);

  return (
    <Layout isFetching={isFetching}>
      <Main
        tickets={sortedTickets()}
        handleTransferFilter={handleTransferFilter}
        selectedTransfers={selectedTransfers}
        transfersMap={transfersMap}
        handleButtonClick={handleOnlyButtonClick}
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
        isFetching={isFetching}
      />
    </Layout>
  );
}

export default App;
