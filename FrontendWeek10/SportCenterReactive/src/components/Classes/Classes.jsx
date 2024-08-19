import React, { useState, useEffect } from 'react';

function Classes() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setActiveTab(1);
  }, []);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div id="classes" className="classes">  
      <div className="bg"></div>
      <div className="container">
        <div className="section-title">
          <h2>OUR CLASSES</h2>
          <div className="divider"></div>
          <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
        </div>
        <div className="tab-menu">
          {['Yoga', 'Group', 'Solo', 'Stretching'].map((label, index) => {
            const tabNumber = index + 1;
            const isActive = activeTab === tabNumber;

            return (
              <div key={tabNumber} className={`tab-bar ${isActive ? 'tab-bar--active' : ''}`}>
                <button
                  className={`tab-button ${isActive ? 'tab-button--active' : ''}`}
                  data-for-tab={tabNumber}
                  onClick={() => handleTabClick(tabNumber)}
                >
                  {label}
                </button>
                <div className={`caret-down ${isActive ? 'caret-down--active' : ''}`} data-tab={tabNumber}></div>
              </div>
            );
          })}
        </div>
        <div className="class-contents">
          {[
            {
              tabNumber: 1,
              title: 'Why Choose Yoga?',
              content: (
                <>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorem placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.</p>
                  <br/>
                  <h3>Class Hours for Yoga</h3>
                  <p>Saturday-Sunday: 8:00am - 10:00am</p>
                  <p>Monday-Tuesday: 10:00am - 12:00pm</p>
                  <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                </>
              ),
              image: './images/yoga.jpg',
              alt: 'Yoga'
            },
            {
              tabNumber: 2,
              title: 'Why Choose Group?',
              content: (
                <>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorem placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.</p>
                  <br/>
                  <h3>Class Hours for Group</h3>
                  <p>Saturday-Sunday: 8:00am - 10:00am</p>
                  <p>Monday-Tuesday: 10:00am - 12:00pm</p>
                  <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                </>
              ),
              image: './images/group.webp',
              alt: 'Group'
            },
            {
              tabNumber: 3,
              title: 'Why Choose Solo?',
              content: (
                <>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorem placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.</p>
                  <br/>
                  <h3>Class Hours for Solo</h3>
                  <p>Saturday-Sunday: 8:00am - 10:00am</p>
                  <p>Monday-Tuesday: 10:00am - 12:00pm</p>
                  <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                </>
              ),
              image: './images/solo.jpg',
              alt: 'Solo'
            },
            {
              tabNumber: 4,
              title: 'Why Choose Stretching?',
              content: (
                <>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorem placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.</p>
                  <br/>
                  <h3>Class Hours for Stretching</h3>
                  <p>Saturday-Sunday: 8:00am - 10:00am</p>
                  <p>Monday-Tuesday: 10:00am - 12:00pm</p>
                  <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                </>
              ),
              image: './images/stret.webp',
              alt: 'Stretching'
            },
          ].map(({ tabNumber, title, content, image, alt }) => (
            <div
              key={tabNumber}
              className={`class-content ${activeTab === tabNumber ? 'class-content--active' : ''}`}
              data-tab={tabNumber}
            >
              <div className="class-info">
                <h3>{title}</h3>
                {content}
              </div>
              <div className="class-image">
                <img src={image} alt={alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Classes;
