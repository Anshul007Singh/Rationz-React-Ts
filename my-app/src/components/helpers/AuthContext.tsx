import React, { ReactNode, createContext, useContext, useEffect, useReducer } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: { username: string } | null;
}

type AuthAction = { type: 'LOGIN'; user: { username: string } } | { type: 'LOGOUT' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { isAuthenticated: true, user: action.user };
    case 'LOGOUT':
      return { isAuthenticated: false, user: null };
    default:
      return state;
  }
};

const AuthContext = createContext<{ state: AuthState; dispatch: React.Dispatch<AuthAction> } | undefined>(
  undefined
);

interface AuthProviderProps {
    children: ReactNode;
  }

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: true, user: null });

  useEffect(() => {
    // Check localStorage for saved authentication state on component mount
    const storedState = localStorage.getItem('authState');
    if (storedState) {
      dispatch({ type: 'LOGIN', user: JSON.parse(storedState).user });
    }
  }, []);

  useEffect(() => {
    // Save authentication state to localStorage on state change
    localStorage.setItem('authState', JSON.stringify(state));
  }, [state]);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
