import React from 'react';
import zelloLogoImg from '../assets/zello-logo.png';

interface ZelloLogoProps {
  size?: number;
  className?: string;
}

export const ZelloLogo: React.FC<ZelloLogoProps> = ({ size = 44, className = '' }) => {
  return (
    <img
      src={zelloLogoImg}
      alt="ZELLO Logo"
      width={size}
      height={size}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${size * 0.22}px`,
        objectFit: 'contain',
        display: 'block',
        boxShadow: '0 4px 14px rgba(240, 78, 56, 0.4)'
      }}
    />
  );
};

export default ZelloLogo;
