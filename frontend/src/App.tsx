import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '../config';
import { TableUser } from './components/TableUser';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <>
          <div className="min-h-screen bg-slate-950">
            <TableUser />
          </div>
        </>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
