import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import moment from "moment";
import { Styles } from '../utils/GlobalStyle';
import { Feather } from '@expo/vector-icons';

export const DeatilScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const [isZoom, setIsZoom] = useState(false);

    return (
        <View style={{flex: 1,position:'relative'}}>
            <ScrollView style={[Styles.detailScrollView]}>
                <Image source={{ uri: item.urlToImage }} style={[Styles.detailImage]} />
                <View style={[Styles.detailContainer]}>
                    <Text style={[Styles.detailTitle]}>{item.title}</Text>
                    <Text style={[Styles.detailSub]}>{item.author} - {moment(item.publishedAt).format("MMMM D, YYYY")}</Text>
                    <Text style={[Styles.detailSub2]}>{item.source.name}</Text>
                    <Text style={[Styles.detailDescription, { fontSize: (isZoom ? 35 : 25) }]}>{item.description}</Text>

                    <TouchableOpacity style={[Styles.detailMoreButton]} onPress={() => { Linking.openURL(`${item.url}`) }}><Text style={[Styles.detailMoreButtonText]}>Visit to read more</Text></TouchableOpacity>
                </View>

            </ScrollView>
            <TouchableOpacity
                style={[Styles.zoomButton]}
                onPress={() => {
                    setIsZoom(!isZoom)
                }}
            >
                {isZoom ? <Feather name="zoom-out" size={34} color="black" /> : <Feather name="zoom-in" size={34} color="black" />}
            </TouchableOpacity>
        </View>
    );
}