import React, { createContext, useContext, useReducer } from 'react';

// src/count/count-context.js

const CountContext = createContext(null);

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { count: state.count + 1 };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};

const CountProvider = props => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const value = React.useMemo(() => [state, dispatch], [state]);

  return <CountContext.Provider value={value} {...props} />;
};

const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [state, dispatch] = context;

  const increment = () => dispatch({ type: 'INCREMENT' });

  return {
    state,
    dispatch,
    increment,
  };
};

// export {CountProvider, useCount}

////////////////////////////////////////////////////////////////////////

// src/count/page.js

// import {CountProvider, useCount} from './count-context'

const Counter = () => {
  const {
    state: { count },
    increment,
  } = useCount();

  return <button onClick={increment}>{count}</button>;
};

const CountDisplay = () => {
  const {
    state: { count },
  } = useCount();

  return <div>The current counter count is {count}</div>;
};

const App = () => {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
};

export default App;

/*
function App() {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <UserPage path="/:userId" />
          <UserSettings path="/settings" />
          <Notifications path="/notifications" />
        </Router>
      </AuthenticationProvider>
    </ThemeProvider>
  )
}

function Notifications() {
  return (
    <NotificationsProvider>
      <NotificationsTab />
      <NotificationsTypeList />
      <NotificationsList />
    </NotificationsProvider>
  )
}

function UserPage({username}) {
  return (
    <UserProvider username={username}>
      <UserInfo />
      <UserNav />
      <UserActivity />
    </UserProvider>
  )
}

function UserSettings() {
  // this would be the associated hook for the AuthenticationProvider
  const {user} = useAuthenticatedUser()
}
*/
