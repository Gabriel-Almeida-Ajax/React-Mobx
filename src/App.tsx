import { useState } from 'react';
import TimerView from './pages/timer/timer';
import { useTranslation } from "react-i18next";
import "./services/lang";

import Button from './components/button';

import store, { TimerStore } from './store/timer.store';

type TStore = typeof store;

function App() {
  const { t, i18n } = useTranslation();

  const [t1] = useState<TStore>(new TimerStore(100));
  const [t2] = useState<TStore>(new TimerStore(10));

  return (
    <div
      style={{
        textAlign: "center",
      }}>

      <h1>
        {t('Welcome to React')}
      </h1>

      <TimerView />
      <TimerView store={t1} />
      <TimerView store={t2} />

      {
        Object.keys(i18n.store.data).map(key =>
          <Button key={key} name={key} method={() => i18n.changeLanguage(key)} />
        )
      }

    </div>
  );
}

export default App;