import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import authReducer from './reducers/StorySlice';

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
