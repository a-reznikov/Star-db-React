import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  return (
    <Row
      left={<PersonList onItemSelected={(id) => {
        navigate(`/people/${id}`);
      }} />}
      right={<PersonDetails itemId={id} />} />
  );


}

export default PeoplePage;
