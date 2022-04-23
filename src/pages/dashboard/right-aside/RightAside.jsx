import { useState } from 'react';
// import downArrow from '../../../assets/down-arrow.png';
import FeedItem from '../../../components/FeedItem/FeedItem';
import Feed from '../../../constants/feed';
import './RightAside.css';

export default function RightAside(){

  return(
    <div className="right-aside-container">
      
      {/*==============*/}
      {/* Profile Card */}
      {/*==============*/}
      <div className="right-aside-top">
        <div className="top">
          <div className="left">
            <h2 className="not-bold shed-margin-padding">John Doe</h2>
            <p className="shed-margin-padding">User</p>
          </div>
          <div className="right">
            <h2 className="not-bold shed-margin-padding">$266</h2>
            <p className="shed-margin-padding">22.2%</p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h3 className="shed-margin-padding">$8.99/month</h3>
            <p className="shed-margin-padding">$80.99 billed anually</p>
          </div>
          <div className="right">
            <button>Accept</button>
          </div>
        </div>
      </div>
      {/* End Of Profile Card */}



      {/*============================*/}
      {/* Beginning of Feeds Section */}
      {/*============================*/}
      <div className="right-aside-bottom">
        <div className="title">
          <h3 className="shed-margin-padding not-bold">Feed</h3>
          <p className="shed-margin-padding">Month</p>
        </div>
        <ul className="feed-list">

          {
            Feed.map((each, index)=>{
              return(
                <FeedItem
                  key={index}
                  title={each.title}
                  time={each.time}
                  feedContent={each.content}
                />
              )
            })
          }
        </ul>
        <div className="line"></div>
      </div>
      {/* End of Feeds Section */}
    </div>
  )
}