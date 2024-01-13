import React from 'react';

interface InfoTextProps {
  children: React.ReactNode;
}

const InfoText: React.FC<InfoTextProps> = ({ children }) => {
  return <span>{children}</span>;
};

export default InfoText;