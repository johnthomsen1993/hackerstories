import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { useAppSelector } from '../../shared/store/hooks';
import { Styles } from '../util/styles';
import { StoryDto } from '../../shared/store/reducers/StorySlice';
import { useTranslation } from 'react-i18next';
import { HackerStory } from './hacker-story';

export const HackerStoryList = () => {
  const stories = useAppSelector(state => state.story.stories);
  const renderItems = useCallback(
    item => <HackerStory key={item.index} {...item} />,
    [],
  );
  return (
    <View style={Styles.backgroundColor}>
      <FlatList data={stories} renderItem={renderItems} />
    </View>
  );
};
