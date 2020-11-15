import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';

import {
  Container,
  Post,
  Header,
  Avatar,
  Name,
  PostImage,
  Description,
  Loading,
} from './styles';

const Feed = () => {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadPage(pageNumber = page, shouldRefresh = false){
    if (totalPage && pageNumber > totalPage) return;

    setLoading(true);
    
    const response = await fetch(
      `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`
    );

    const data = await response.json();
    const total = response.headers.get('X-Total-Count');

    setTotalPage(Math.ceil(total / 5));
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(pageNumber + 1);

    setLoading(false);
  };

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  };

  return (
    <Container>
      <FlatList
        data={feed}
        keyExtractor={(post) => String(post.id)}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }} />
              <Name>{item.author.name}</Name>
            </Header>

            <PostImage aspectRatio={item.aspectRatio} source={{ uri: item.image }} />

            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
        ListFooterComponent={loading && <Loading />}
      />
    </Container>
  );
};

export default Feed;
