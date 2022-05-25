import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '882595251996-36u6e71c3beidsqcgf5oltp9qpma7cuq.apps.googleusercontent.com',
          scope: 'email',
          plugin_name: 'streamy',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) return null;
    else if (this.state.isSignedIn)
      return (
        <button className='ui red google button' onClick={this.onSignOut}>
          <i className='google icon'></i> Sign Out
        </button>
      );
    else
      return (
        <button className='ui red google button' onClick={this.onSignIn}>
          <i className='google icon'></i> Sign In with Google
        </button>
      );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
