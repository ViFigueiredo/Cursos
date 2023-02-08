import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'nome-aplicacao',
      storage,
      whitelist: ['example'], // rootReducer{chave}
    },
    reducers
  );

  return persistedReducers;
};
