import { useState } from "react";
import styles from "../../styles/Skins.module.scss";

const SKINS = [
  { id: 1, name: "Классический", price: 0, theme: 'default' },
  { id: 2, name: "Темный", price: 100, theme: 'dark' },
  { id: 3, name: "Киберпанк", price: 500, theme: 'cyber' }
];

export const Skins = ({ dulkcoins, setActiveSkin }) => {
  const [unlocked, setUnlocked] = useState([1]);

  const unlockSkin = (id, price) => {
    //if (dulkcoins >= price && !unlocked.includes(id)) {
      console.log(id);
      setUnlocked([...unlocked, id]);
      setActiveSkin(id);
    //}
  };

  return (
    <div className={styles.skins}>
      {SKINS.map(skin => (
        <button 
          key={skin.id}
          onClick={() => unlockSkin(skin.id, skin.price)}
          disabled={!unlocked.includes(skin.id) && dulkcoins < skin.price}
        >
          {skin.name} ({skin.price} Dulkcoins)
        </button>
      ))}
    </div>
  );
};