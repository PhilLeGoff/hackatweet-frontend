import '../styles/globals.css';
import Head from 'next/head';

<<<<<<< HEAD

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <Component {... pageProps}/>
    </>
=======
import { Provider } from 'react-redux';
import user from '../reducers/user';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({ user });
const persistConfig = { key: 'morningnews', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });

 const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>HackaTweet</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
>>>>>>> d4c9058e763d27c6658a421cf05d1811e7d93317
  );
}

export default App;
