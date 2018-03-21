import React from 'react';
import getInputClass from './get-input-class';

const FieldText = ({ meta, label, input }) => {
  return (
    <input
      className={getInputClass(meta)}
      placeholder={`Enter ${label}`}
      {...input}
    />
  );
};

export default FieldText;
