import React from 'react';
import {Image, Text, TouchableOpacity, Vibration, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {addItemsToFavorite} from '../../redux/actions/EventActions';
import {color, IcExport, IcFavorite} from '../../theme';
import * as styles from './styles';

export const EventCard = ({item, list, index}) => {
  const {favoriteEventData} = useSelector(state => state.eventReducer);
  const dispatch = useDispatch();

  const onFavouriteHandle = async selectedItem => {
    try {
      let filteredItem = favoriteEventData ? [...favoriteEventData] : [];

      if (filteredItem.includes(item.event_date_id)) {
        filteredItem = filteredItem.filter(ele => ele !== item.event_date_id);
      } else {
        filteredItem.push(item.event_date_id);
      }

      await dispatch(addItemsToFavorite(filteredItem));
    } catch (error) {
      console.error('Error adding favorite event:', error);
    }
  };

  return (
    <View style={styles.rootContainer()}>
      <View style={styles.imageContainer()}>
        <Image
          source={{uri: item?.event_profile_img}}
          style={styles.imageStyle()}
        />
      </View>
      <View style={styles.cardDetailContainer()}>
        <View style={styles.titleView()}>
          <Text style={styles.titleText()}>{item?.event_name}</Text>
        </View>
        <View style={styles.dateAndLocationContainer()}>
          <View style={styles.dateView()}>
            <Text style={styles.subTitleText('date')}>
              {item?.readable_from_date}{' '}
              {item?.readable_to_date != null ? -item?.readable_to_date : ''}
            </Text>
          </View>
          <View style={styles.locationView()}>
            <Text style={styles.subTitleText()}>
              {item?.city}, {item?.country}
            </Text>
          </View>
        </View>
        <View style={styles.amountView()}>
          <Text style={styles.amountText()}>
            €{item?.event_price_from} - €{item?.event_price_to}
          </Text>
        </View>
        <View style={styles.bottomContainer()}>
          <View style={styles.bottomLeftView()}>
            {item?.danceStyles.map((ele, eleIndex) => {
              return <Text style={styles.typeText()}>{ele?.ds_name}</Text>;
            })}
          </View>
          <View style={styles.bottomRightView()}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                Vibration.vibrate(10);
              }}>
              <IcExport height={18} width={20} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                Vibration.vibrate(10);
                onFavouriteHandle(item);
              }}>
              <IcFavorite
                height={20}
                width={22}
                fill={
                  favoriteEventData?.includes(item.event_date_id)
                    ? color.limeGreen
                    : 'none'
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
