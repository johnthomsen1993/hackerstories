import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { useAppSelector } from '../../shared/store/hooks';
import { Styles } from '../util/styles';
import { StoryDto } from '../../shared/store/reducers/StorySlice';
import { useTranslation } from 'react-i18next';

export const HackerStoryList = () => {
  const stories = useAppSelector(state => state.auth.stories);
  console.log(stories);
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

export const HackerStory = (props: ListRenderItemInfo<StoryDto>) => {
  const { t } = useTranslation();
  return (
    <View style={Styles.storyPadding}>
      <View style={{ padding: 8, backgroundColor: '#fff' }}>
        <Text>{t('story.title') + props.item.title}</Text>
        <Text>{t('story.url') + (props.item.storyUrl ?? t('None'))}</Text>
        <Text>{t('story.timestamp') + props.item.timeStamp}</Text>
        <Text>{t('story.score') + props.item.score}</Text>
        <Text>{t('story.Auther') + props.item.createdBy}</Text>
        <Text>{t('story.AutherKarmaScore') + props.item.karmaScore}</Text>
      </View>
    </View>
  );
};
