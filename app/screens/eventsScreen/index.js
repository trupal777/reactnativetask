import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {Header} from '../../components/header';
import {EventCard} from '../../components/eventCard';
import {getEventsList} from '../../redux/actions/AuthActions';
import * as styles from './styles';

export const EventsScreen = () => {
  const [eventsList, setEventsList] = useState([]);
  const dispatch = useDispatch();

  const getEvents = async () => {
    try {
      const res = await dispatch(getEventsList());
      if (res) {
        setEventsList(res.data.events);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const renderEventCard = ({item, index}) => (
    <EventCard item={item} list={eventsList} index={index} />
  );

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <View style={styles.rootContainer()}>
      <Header />
      <View style={styles.listContainer()}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={eventsList}
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
