import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { Settings } from './const';
import { offers } from './mock/offers';
import { fullOffers } from './mock/full-offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardsCount={Settings.CardsCount}
      offers={offers}
      fullOffers={fullOffers}
    />
  </React.StrictMode>
);
