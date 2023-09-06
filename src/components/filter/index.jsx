import './styles.css';
import { Checkbox } from '../checkbox';
import { currencyMap } from './constants';
import { Radio } from '../radio';

export function Filter({
  handleTransferFilter,
  selectedTransfers,
  transfersMap,
  handleButtonClick,
  handleCurrencyChange,
  currency,
}) {
  const transformedTransferMap = [
    Object.entries(transfersMap).pop(),
    ...Object.entries(transfersMap).slice(0, -1),
  ];

  return (
    <div className='filter'>
      <form className='filter__currency' onChange={(e) => handleCurrencyChange(e.target.value)}>
        <p className='filter__currency-title'>Валюта</p>
        <ul>
          {Object.values(currencyMap).map((item) => (
            <Radio key={item} currencyLabel={item} currentCurrency={currency} />
          ))}
        </ul>
      </form>
      <form className='filter__transfers'>
        <fieldset className='filter__transfers-fieldset'>
          <legend className='filter__transfers-title'>Количество пересадок</legend>
          <ul className='filter__transfers-list'>
            {transformedTransferMap.map(([transfer, transferName]) => (
              <Checkbox
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
