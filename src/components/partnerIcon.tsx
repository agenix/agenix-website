import React from 'react';

type AppProps = {
    name: string
    description: string
  }

const PartnerIcon: React.FC<AppProps> = ({name, description}) => {
  return (
    <div className="partner-icon">
    <img src={`./images/${name}.svg`} className="span-row-2" alt={`${name} logo`}></img>
      <b>{name}</b>
      <p>{description}</p>
    </div>
  );
}

export default PartnerIcon;
