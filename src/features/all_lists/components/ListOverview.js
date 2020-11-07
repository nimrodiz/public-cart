import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import { CenterView } from 'components/Views';

const Wrapper = styled(CenterView)`
  background-color: #fff;
  border-radius: 10px;
  height: 50px;
`;

const ListOverview = ({ name }) => (
  <TouchableOpacity>
    <Wrapper>
      <Text>{name}</Text>
    </Wrapper>
  </TouchableOpacity>
);

ListOverview.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ListOverview;
