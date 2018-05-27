import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h3>Pages</h3>
        <hr />
        <div>
          <a href="/Conv">Conversation</a>
          <br />
          <a href="/second">second</a>
          <br />
          <a href="/ConvEmptyII">ConvEmptyII</a>
          <br />
          <a href="/CreateConv">CreateConv</a>
          <br />
          <a href="/ConvEmptyO">ConvEmptyO</a>
          <br />
          <a href="/ConvEmptyI">ConvEmptyI</a>
          <br />
          <a href="/ConvWebEmpty">ConvWebEmpty</a>
          <br />
          <a href="/ActivitiesEmpty">ActivitiesEmpty</a>
          <br />
          <a href="/ActivitiesHome">ActivitiesHome</a>
          <br />
          <a href="/ActivitiesRecord">ActivitiesRecord</a>
        </div>
      </div>
    );
  }
}

export default HomePage;
