import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListRenderItemInfo, Text, View } from 'react-native';
import { StoryDto } from '../../shared/store/reducers/StorySlice';
import { Styles } from '../util/styles';

export const HackerStory = (props: ListRenderItemInfo<StoryDto>) => {
  const { t } = useTranslation();
  return (
    <View style={Styles.storyMargin}>
      <View style={Styles.storyPadding}>
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
