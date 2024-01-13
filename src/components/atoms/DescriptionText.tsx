import React from 'react';

interface DescriptionTextProps {
  children: React.ReactNode;
}

const DescriptionText: React.FC<DescriptionTextProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default DescriptionText;