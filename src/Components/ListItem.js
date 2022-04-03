import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import moment from "moment";

import { Styles } from '../utils/GlobalStyle';

const ListItem = ({ item, navigation }) => {
    return (
        <ImageBackground style={[Styles.cardView]} source={{ uri: item.urlToImage }} imageStyle={{ borderRadius: 15 }}>
            <View style={[Styles.cardDetailView]}>
                <Text style={[Styles.cardTitle]}>{item.title}</Text>
                <Text style={[Styles.cardTitle]}>{item.email}</Text>
                <Text style={[Styles.cardAuthornData]}>{item.author} - {moment(item.publishedAt).format("MMMM D, YYYY")}</Text>
            </View>
        </ImageBackground>
    )
};

export default ListItem;