import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';

import {
  Container,
  Post,
  Header,
  Avatar,
  Name,
  PostImage,
  Description
} from './styles';

const Feed = () => {
  const [feed, setFeed] = useState();

  async function loadPage(pageNumber = 1){
    console.log('LoadPage');
  };

  useEffect(() => {
    async function loadFeed() {
      const response = await fetch(
        'http://localhost:3000/feed?_expand=author&_limit=5&_page=1'
      );

      const data = await response.json();

      setFeed(data);
    };

    loadFeed();
  }, []);

  return (
    <Container>
      <FlatList
        data={feed}
        keyExtractor={(post) => String(post.id)}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
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
      />
    </Container>
  );
};

export default Feed;
