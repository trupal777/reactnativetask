import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {EventCard} from '../../components/eventCard';
import {Header} from '../../components/header';
import {getEventsList} from '../../redux/actions/AuthActions';
import * as styles from './styles';

export const FavoriteEventsScreen = () => {
  const renderEventCard = ({item, index}) => {
    return (
      <EventCard
        title={item.title}
        description={item.description}
        item={item}
        list={eventsList}
        index={index}
      />
    );
  };
  const [eventsList, setEventsList] = useState([]);
  const dispatch = useDispatch();

  const {favoriteEventData} = useSelector(state => state.eventReducer);

  const getEvents = async () => {
    try {
      const res = await dispatch(getEventsList());

      if (res) {
        // if
        setEventsList(res.data.events);
      }
    } catch (error) {
      console.log('eroor', error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <View style={styles.rootContainer()}>
      <Header />
      <View style={styles.listContainer()}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={eventsList?.filter(ele =>
            favoriteEventData?.includes(ele?.event_date_id),
          )}
          renderItem={renderEventCard}
          keyExtractor={item => item.id}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          windowSize={5}
          removeClippedSubviews={true}
          contentContainerStyle={styles.flatListContentContainer()}
        />
      </View>
    </View>
  );
};
