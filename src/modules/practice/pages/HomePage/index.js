import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h3>Pages</h3>
        <hr />
        <div>
          <a href="/chats">Chats</a>
          <br />
          <a href="/second">second</a>
          <br />
          <a href="/third">third</a>
        </div>
      </div>
    );
  }
}

export default HomePage;
