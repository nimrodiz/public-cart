import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import ListOverview from './components/ListOverview';

const Wrapper = styled.View`
  flex: 1;
  background-color: #dcecff;
  align-items: center;
  justify-content: center;
`;

const ListOfLists = styled.FlatList`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const data = [
  {
    id: 0,
    name: 'Groceries for home',
  },
];

const AllListsScreen = () => (
  <Wrapper>
    <Text> Hello World!</Text>
    <ListOfLists
      data={data}
      renderItem={({ item }) => <ListOverview {...item} />}
      keyExtractor={(item) => item.id}
    />
  </Wrapper>
);

export default AllListsScreen;
