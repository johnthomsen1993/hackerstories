import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../shared/store/hooks';
import { setStories, StoryDto } from '../../shared/store/reducers/StorySlice';
import { Author, Story } from '../../shared/util/api/model';
import { HackerStoryList } from '../components/hacker-story-list';

export const HackerStoryPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const data = await fetch(
        'https://hacker-news.firebaseio.com/v0/topstories.json',
      );
      const idArray: number[] = await data.json();
      let initIndex = Math.floor(Math.random() * (idArray.length - 0 + 1) + 0);
      if (initIndex + 10 > idArray.length) {
        if (initIndex - 10 > 0) {
          initIndex = initIndex - 10;
        } else {
          initIndex = 0;
        }
      }
      let idsToUse = idArray.slice(initIndex, initIndex + 10);
      let stories: Story[] = [];

      for (let index = 0; index < idsToUse.length; index++) {
        const id = idsToUse[index];
        var story = (await (
          await fetch(
            'https://hacker-news.firebaseio.com/v0/item/' + id + '.json',
          )
        ).json()) as Story;
        stories.push(story);
      }
      const storyDtos: StoryDto[] = [];
      for (let index = 0; index < stories.length; index++) {
        const element = stories[index];
        const author = (await (
          await fetch(
            'https://hacker-news.firebaseio.com/v0/user/' +
              element.by +
              '.json',
          )
        ).json()) as Author;
        const storyDto: StoryDto = {
          title: element.title,
          storyUrl: element.url,
          score: element.score,
          timeStamp: element.time,
          createdBy: element.by,
          karmaScore: author.karma,
        };
        storyDtos.push(storyDto);
      }
      dispatch(setStories(storyDtos));
    })();
  }, [dispatch]);

  return (
    <View>
      <HackerStoryList />
    </View>
  );
};
