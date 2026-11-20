import { useContext } from 'react';
import { DatabaseContext } from '../context/DatabaseProvider';

export function useConnection() {
  const db = useContext(DatabaseContext);
  if (!db) throw new Error('useConnection must be used inside DatabaseProvider');
  return db;
}
