import React from 'react';

interface ImagemProps {
  src: string;
  alt: string;
}

const Imagem: React.FC<ImagemProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Imagem;