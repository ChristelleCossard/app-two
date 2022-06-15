import React from 'react';
import BookDetailsInformation from './BookDetailsInformation';

const BookDetails = (props) => {
  const today = new Date();
  return (
    <BookDetailsInformation {...props} releasedAt={today} />
  );
}

export default BookDetails;