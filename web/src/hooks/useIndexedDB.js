import { useEffect } from 'react';
import { db } from '../db/database';

export const useIndexedDB = (gameState, setGameState) => {
  useEffect(() => {
    const loadGame = async () => {
      try {
        const savedState = await db.gameState.toArray();
        if (savedState.length > 0) {
          setGameState(savedState[0]);
        }
      } catch (error) {
        console.error('Failed to load game:', error);
      }
    };
    loadGame();
  }, []);

  useEffect(() => {
    const saveGame = async () => {
      try {
        await db.gameState.clear();
        await db.gameState.add(gameState);
      } catch (error) {
        console.error('Failed to save game:', error);
      }
    };
    saveGame();
  }, [gameState]);
};