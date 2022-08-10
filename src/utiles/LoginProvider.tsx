import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

interface ContextType {
  user: FirebaseAuthTypes.User | null;
  isloading: boolean;
}

export const LoginContext = React.createContext({} as ContextType);

interface Props {
  children: React.ReactNode;
}

export default function LoginProvider(props: Props) {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isloading, setIsloading] = useState<boolean>(true);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    setIsloading(false);
  };

  useEffect(() => {
    const subscribe = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);
  return;
  <LoginContext.Provider value={{user, isloading}}>
    {props.children}
  </LoginContext.Provider>;
}
