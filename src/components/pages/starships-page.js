import React from 'react';
import { useNavigate } from 'react-router-dom'

import { StarshipList, } from '../sw-components';

const StarshipsPage = () => {
  const history = useNavigate();

  return (
    <StarshipList onItemSelected={(itemId) => {
      history(itemId);
    }} />
  );
}

export default StarshipsPage;
