import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '../config';
import { TableUser } from './components/TableUser';
import { InputEffect } from './components/InputEffect';
import Timer from './components/Timer';
import Compteur from './components/Compteur';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <>
          <div className="min-h-screen bg-slate-950 flex flex-col items-center gap-6 py-8">
            <Compteur />
            <Timer />
            <InputEffect />
            <TableUser />
          </div>
        </>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
