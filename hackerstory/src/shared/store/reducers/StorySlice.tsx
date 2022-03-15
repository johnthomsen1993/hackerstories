import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StoryDto {
  title?: string;
  storyUrl: string;
  score?: number;
  timeStamp?: number;
  createdBy?: string;
  karmaScore?: number;
}

export interface StoryState {
  stories?: StoryDto[];
}

const initialState: StoryState = {
  stories: [],
};

export const StorySlice = createSlice({
  name: 'Story',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setStories: (state, action: PayloadAction<StoryDto[]>) => {
      state.stories = action.payload.sort((a, b) =>
        a.score && b.score ? b.score - a.score : 0,
      );
    },
  },
});

export const { setStories } = StorySlice.actions;

export default StorySlice.reducer;
