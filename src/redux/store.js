import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger';

import contactsReducer from 'redux/contacts/contacts-reducer';

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }), logger];

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter']
}

export const store = configureStore({  
  reducer:  {
    contacts: persistReducer(persistConfig, contactsReducer)
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);