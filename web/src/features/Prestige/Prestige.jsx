import styles from '../../styles/Prestige.module.scss';

export const Prestige = ({ credits, setCredits, setPrestige, prestige }) => {
  const calculateDulkcoins = (credits) => Math.floor(Math.sqrt(credits / 1000));

  const handlePrestige = () => {
    const dulkcoins = calculateDulkcoins(credits);
    setPrestige(prev => ({
      level: prev.level + 1,
      dulkcoins: prev.dulkcoins + dulkcoins
    }));
    setCredits(0);
    // Здесь можно сбросить другие параметры игры
  };

  return (
    <div className={styles.prestige}>
      <h3>Prestige System</h3>
      <button 
        onClick={handlePrestige}
        disabled={credits < 10000} // Минимум 10k кредитов для престижа
      >
        Reset for {calculateDulkcoins(credits)} Dulkcoins
      </button>
      <p>Current multiplier: {1 + (prestige.level * 0.1)}x</p>
    </div>
  );
};