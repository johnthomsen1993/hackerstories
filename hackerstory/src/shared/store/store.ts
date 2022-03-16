import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import storyReducer from './reducers/StorySlice';

export function makeStore() {
  return configureStore({
    reducer: {
      story: storyReducer,
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
