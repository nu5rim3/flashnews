import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from "axios";

// components
import ListItem from '../../Components/ListItem';
import Loader from '../../Components/Loader';
import Empty from '../../Components/Empty';
import Error from '../../Components/Error';

export default function Technology({ navigation }) {

  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getNews = () => {
    setIsLoading(true);
    axios.get(`https://newsapi.org/v2/top-headlines?category=technology&page=${currentPage}&pageSize=3&apiKey=8cff09c5f43b41a48a595561b6f364ba`)
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
    getNews()
  }, [currentPage])

  return (
    <>
      {error ? <Error /> :
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={item => item.publishedAt}
          ListFooterComponent={renderLoader}
          onEndReached={onEndReached}
          style={{ backgroundColor: '#ffffff' }}
          onEndReachedThreshold={0}
          ListEmptyComponent={Empty}
        />
      }
    </>
  )
}