import './styles.css';
import { Button } from '../button';
import { Input } from '../input';

export function Filter({ handleTransferFilter, selectedTransfers, transfersMap, handleButtonClick }) {
  const transformedTransferMap = [
    Object.entries(transfersMap).pop(),
    ...Object.entries(transfersMap).slice(0, -1),
  ];

  return (
    <div className='filter'>
      <div className='filter__currency'>
        <p className='filter__currency-title'>Валюта</p>
        <div className='filter__currency-selector'>
          <Button className='filter__curency-rub'>RUB</Button>
          <Button className='filter__curency-usd'>USD</Button>
          <Button className='filter__curency-eur'>EUR</Button>
        </div>
      </div>
      <form className='filter__transfers'>
        <fieldset className='filter__transfers-fieldset'>
          <legend className='filter__transfers-title'>Количество пересадок</legend>
          <ul className='filter__transfers-list'>
            {transformedTransferMap.map(([transfer, transferName]) => (
              <Input
                key={transfer}
                transfer={transfer}
                name={transferName}
                handleTransferFilter={handleTransferFilter}
                selectedTransfers={selectedTransfers}
                handleButtonClick={handleButtonClick}
              />
            ))}
          </ul>
        </fieldset>
      </form>
    </div>
  );
}
