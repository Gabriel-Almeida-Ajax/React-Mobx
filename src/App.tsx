import TimerView from './pages/timer/timer';
import { useTranslation } from "react-i18next";
import "./services/lang";
import Button from './components/button';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        textAlign: "center",
      }}>

      <h1>
        {t('Welcome to React')}
      </h1>

      <TimerView />

      {
        Object.keys(i18n.store.data).map(key =>
          <Button key={key} name={key} method={() => i18n.changeLanguage(key)} />
        )
      }
      
    </div>
  );
}

export default App;