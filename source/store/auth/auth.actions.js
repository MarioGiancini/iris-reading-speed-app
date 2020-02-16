import { createAction } from 'redux-act';

const signin = createAction('[auth] signin');
const signout = createAction('[auth] signout');

export { signin, signout };
