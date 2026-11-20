import { createContext, useEffect, useState, type PropsWithChildren } from 'react';
import { openDatabaseAsync, type SQLiteDatabase } from 'expo-sqlite';
import { databaseConfig } from '../config/database';
import { initializeDatabase } from '../database/initializeDatabase';
import { ScreenLayout } from '../layout/ScreenLayout';
import { StatusContent } from '../components/StatusContent';

export const DatabaseContext = createContext<SQLiteDatabase | null>(null);

export function DatabaseProvider({ children }: PropsWithChildren) {
  const [db, setDb] = useState<SQLiteDatabase | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let connection: SQLiteDatabase | null = null;
    let ready = false;

    async function connect() {
      try {
        // Each effect owns its handle, including during Strict Mode remounts.
        connection = await openDatabaseAsync(databaseConfig.name, { useNewConnection: true });
        if (cancelled) {
          await connection.closeAsync();
          return;
        }
        await initializeDatabase(connection);
        if (cancelled) {
          await connection.closeAsync();
          return;
        }
        ready = true;
        setDb(connection);
      } catch (error) {
        if (connection) await connection.closeAsync().catch(() => undefined);
        if (!cancelled) {
          console.error('Database initialization failed', error);
          setFailed(true);
        }
      }
    }

    void connect();
    return () => {
      cancelled = true;
      // Pending initialization closes its own handle after it finishes.
      // Ready connections are closed here.
      if (connection && ready) {
        void connection.closeAsync().catch(() => undefined);
      }
    };
  }, [attempt]);

  if (!db) {
    return (
      <ScreenLayout title="Mi Ruta" bottomInset>
        <StatusContent
          title={failed ? 'No pudimos iniciar la aplicación' : 'Preparando Mi Ruta'}
          description={failed ? 'Intentá nuevamente para continuar.' : 'Un momento, por favor.'}
          actionLabel={failed ? 'Reintentar' : undefined}
          onAction={failed ? () => {
            setFailed(false);
            setAttempt((value) => value + 1);
          } : undefined}
        />
      </ScreenLayout>
    );
  }

  return <DatabaseContext.Provider value={db}>{children}</DatabaseContext.Provider>;
}
