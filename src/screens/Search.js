import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from "axios";

// components
import ListItem from '../Components/ListItem';
import Loader from '../Components/Loader';
import Error from '../Components/Error';
import Empty from '../Components/Empty';
import { Styles } from '../utils/GlobalStyle';

export default function SearchScreen({ navigation }) {

    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('sri lanka')
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getNews = () => {
        setIsLoading(true);
        setError(false)
        axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&page=${currentPage}&pageSize=3&apiKey=8cff09c5f43b41a48a595561b6f364ba`)
            .then(res => {
                setNews([...news, ...res.data.articles]);
                setIsLoading(false);
            }).catch((e) => {
                setIsLoading(false);
                setError(true)
            });
    };


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Detail', { item: item })
                }}
            >
                <ListItem item={item} />
            </TouchableOpacity >
        )
    }


    const renderLoader = () => {
        return (
            <>
                {isLoading ? <Loader /> : null}
            </>
        )
    }

    const onEndReached = () => {
        setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
        if (search !== '') {
            getNews()
        }
    }, [currentPage, search])

    return (
        <View style={[Styles.SearchContainer]}>
            <View style={[Styles.SearchView]}>
                <TextInput style={[Styles.searchInputText]} placeholder="Search here..." defaultValue={search} onChangeText={(value) => setSearch(value)} />
                <TouchableOpacity
                    style={[Styles.searchButton]}
                    onPress={() => {
                        setSearch('')
                        setNews([])
                        setIsLoading(false)
                        setError(false)
                    }}
                >
                    <Feather name="x" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {error ? <Error /> : <FlatList
                data={news}
                renderItem={renderItem}
                keyExtractor={item => item.publishedAt}
                ListFooterComponent={renderLoader}
                onEndReached={onEndReached}
                style={{ backgroundColor: '#ffffff' }}
                onEndReachedThreshold={0}
                ListEmptyComponent={Empty}
            />}
        </View>
    )
}