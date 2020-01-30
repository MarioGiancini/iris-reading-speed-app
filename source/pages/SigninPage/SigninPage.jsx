import React from 'react';
import firebase from 'firebase/app';
import firebaseui from 'firebaseui';
import styled from 'styled-components';

import 'firebaseui/dist/firebaseui.css';

const AuthContainer = styled.div`
  width: 350px;
`;

const SigninPage = () => {
  React.useEffect(() => {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: '/admin',
    });
  }, []);

  return (
    <>
      <AuthContainer id="firebaseui-auth-container" />
    </>
  );
};

export { SigninPage };
