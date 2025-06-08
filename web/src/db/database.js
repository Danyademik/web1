import Dexie from 'dexie';

export const db = new Dexie('ClickerGameDB');
db.version(1).stores({
  gameState: '++id,credits,clickValue,autoClicker'
});