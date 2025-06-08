import { useState } from 'react';
import { useClicker } from './hooks/useClicker';
import { useIndexedDB } from './hooks/useIndexedDB';
import { Counter } from './components/Counter';
import { Button } from './components/Button';
import { Upgrades } from './features/Upgrades/Upgrades';
import { Prestige } from './features/Prestige/Prestige';
import { Skins } from './features/Skins/Skins';
import styles from './styles/App.module.scss';

export default function App() {
  const { 
    credits, 
    clickValue, 
    autoClicker, 
    handleClick, 
    setCredits, 
    setClickValue,
    setAutoClicker 
  } = useClicker();

  const [prestige, setPrestige] = useState({
    //level: 0,
    dulkcoins: 500
  });

  const [activeSkin, setActiveSkin] = useState(1);

  const gameState = { 
    credits, 
    clickValue, 
    autoClicker,
    prestige,
    activeSkin
  };
  
  useIndexedDB(gameState, (savedState) => {
    setCredits(savedState.credits || 0);
    setClickValue(savedState.clickValue || 1);
    setAutoClicker(savedState.autoClicker || 0);
    setPrestige(savedState.prestige || { level: 0, dulkcoins: 0 });
    setActiveSkin(savedState.activeSkin || 1);
  });

  return (
    <div className={styles.app} data-skin={activeSkin}>
      <div className={styles.header}>
        <Counter value={credits} />
        <Button onClick={handleClick}>CLICK ME!</Button>
      </div>

      <div className={styles.sections}>
        <section className={styles.upgradesSection}>
          <Upgrades 
            credits={credits}
            setCredits={setCredits}
            clickValue={clickValue}
            setClickValue={setClickValue}
            autoClicker={autoClicker}
            setAutoClicker={setAutoClicker}
          />
        </section>

        <section className={styles.statsSection}>
          <h3>Stats</h3>
          <p>Click value: {clickValue}</p>
          <p>Auto clicker: {autoClicker} credits/sec</p>
          <p>Prestige level: {prestige.level}</p>
          <p>Dulkcoins: {prestige.dulkcoins}</p>
        </section>

        {/* <section className={styles.prestigeSection}>
          <Prestige 
            credits={credits}
            setCredits={setCredits}
            setPrestige={setPrestige}
            prestige={prestige}
          />
        </section> */}

        <section className={styles.skinsSection}>
          <Skins 
            dulkcoins={prestige.dulkcoins}
            setActiveSkin={setActiveSkin}
          />
        </section>
      </div>
    </div>
  )
}