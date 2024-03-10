import {
  createContext,
  useContext,
} from 'react';
import { useUser } from './hooks/user';
import { Store } from '@/types/store';
import { useLoading } from './hooks/loading';
import { usePointSuccessfully } from './hooks/pointSuccessfully';
import { useConfirmExit } from './hooks/confirmExit';

export const store = createContext<Store>({
  user: null,
  pointSuccessfully: {
    name: "",
    open: (name, seconds) => {},
    close: () => {},
  },
  confirmExit: {
    show: false,
    open: () => {},
    close: () => {},
  },
  login: (user) => {},
  logout: () => {},
  loading: false,
  loadingStart: () => {},
  loadingEnd: () => {},
});

const { Provider } = store;

export function StateProvider({ children }: {
  children: React.ReactNode;
}) {
  const user = useUser();
  const loading = useLoading();
  const pointSuccessfully = usePointSuccessfully();
  const confirmExit = useConfirmExit();

  return (
    <Provider
      value={{
        ...user,
        ...loading,
        pointSuccessfully,
        confirmExit,
      }}
    >{children}</Provider>
  );
};

export const useStore = () => useContext( store );
