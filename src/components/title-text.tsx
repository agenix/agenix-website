import React from 'react';

type appProps = {
    preTitle: string
    title: string
    text: string
  }

const TitleText: React.FC<appProps> = ({preTitle, title, text}) => {
  return (
    <div className="title-text">
      <h5><span></span>{preTitle}</h5>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default TitleText;
