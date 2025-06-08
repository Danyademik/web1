import { UPGRADES } from '../../utils/constants'
import styles from '../../styles/Upgrades.module.scss'

export const Upgrades = ({ credits, setCredits, clickValue, setClickValue }) => {
  const buyUpgrade = (upgrade) => {
    if (credits >= upgrade.cost) {
      setCredits(credits - upgrade.cost);
      setClickValue(clickValue + upgrade.value);
    }
  };

  return (
    <div className={styles.upgrades}>
      <h3>Upgrades</h3>
      {UPGRADES.map(upgrade => (
        <button
          key={upgrade.id}
          onClick={() => buyUpgrade(upgrade)}
          disabled={credits < upgrade.cost}
          className={styles.upgradeButton}
        >
          {upgrade.name} (+{upgrade.value}) - Cost: {upgrade.cost}
        </button>
      ))}
    </div>
  )
};