import React, { useState } from 'react';
import style from './MainPage.module.scss';
import Modal from '../../components/modals/Modal/Modal';
import AddToPortfolioModal from '../../components/modals/AddToPortfolioModal/AddToPortfolioModal';
import { useNavigate } from 'react-router-dom';
import { routesPathsEnum } from '../../enums';

const MainPage = () => {

  const [modalMode, setModalMode] = useState(false)
  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState<null | any>(null)
  const cryptocurrencies = [{
    id: "bitcoin",
    rank: "1",
    symbol: "BTC",
    name: "Bitcoin",
    supply: "17193925.0000000000000000",
    maxSupply: "21000000.0000000000000000",
    marketCapUsd: "119179791817.6740161068269075",
    volumeUsd24Hr: "2928356777.6066665425687196",
    priceUsd: "6931.5058555666618359",
    changePercent24Hr: "-0.8101417214350335",
    vwap24Hr: "7175.0663247679233209"
  },{
    id: "bitcoin",
    rank: "1",
    symbol: "BTC",
    name: "Bitcoin",
    supply: "17193925.0000000000000000",
    maxSupply: "21000000.0000000000000000",
    marketCapUsd: "119179791817.6740161068269075",
    volumeUsd24Hr: "2928356777.6066665425687196",
    priceUsd: "6931.5058555666618359",
    changePercent24Hr: "-0.8101417214350335",
    vwap24Hr: "7175.0663247679233209"
  },{
    id: "bitcoin",
    rank: "1",
    symbol: "BTC",
    name: "Bitcoin",
    supply: "17193925.0000000000000000",
    maxSupply: "21000000.0000000000000000",
    marketCapUsd: "119179791817.6740161068269075",
    volumeUsd24Hr: "2928356777.6066665425687196",
    priceUsd: "6931.5058555666618359",
    changePercent24Hr: "-0.8101417214350335",
    vwap24Hr: "7175.0663247679233209"
  },
  ]

  const navigate = useNavigate();
  const closeModal = () => {
    setModalMode(false)
  }
  const addCryptocurrency = (cryptocurrency: any) => {
    setSelectedCryptocurrency(cryptocurrency)
    setModalMode(true)
  }
  const onCurrencyClick = (id: string) => {
    navigate(`${routesPathsEnum.ASSETS}/${id}`)
  }

  return (
    <div className={style.mainPage}>
      <table className={ style.table }>
        <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Supply</th>
          <th>Max Supply</th>
          <th>Market Cap, USD</th>
          <th>Volume(24Hr), USD</th>
          <th>Price, USD</th>
          <th>Change Percent (24Hr)</th>
          <th>VWAP (24Hr)</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        {cryptocurrencies.map(item =>
        <tr onClick={() => onCurrencyClick(item.id)}>
          <td>{item.rank}</td>
          <td>{item.name}</td>
          <td>{item.supply}</td>
          <td>{item.maxSupply}</td>
          <td>{item.marketCapUsd}</td>
          <td>{item.volumeUsd24Hr}</td>
          <td>{item.priceUsd}</td>
          <td>{item.changePercent24Hr}</td>
          <td>{item.vwap24Hr}</td>
          <td>
            <button onClick={() => addCryptocurrency(item)}>+</button>
          </td>
        </tr>
        )}
        </tbody>
      </table>
      { modalMode &&
        <Modal closeModal={ closeModal }>
          <AddToPortfolioModal
            key={selectedCryptocurrency.id}
            name={selectedCryptocurrency.name}
            price={selectedCryptocurrency.priceUsd}
          />
        </Modal>
      }
    </div>
  );
};

export default MainPage;