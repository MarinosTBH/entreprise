import React from 'react'
import ContentHeader from './ContentHeader';
import "../../styles/Content.css";
import Card from './Card';

function Content() {
  return (
    <div className="content">
       <ContentHeader/>
      <Card/>
    </div>
  );
}
export default Content; 