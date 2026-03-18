import React, { createContext, useContext, useState, type ReactNode } from 'react'

interface UserContextType {
  id: string;           
  name: string;
  age: number;
  status: 'single' | 'married';
  img: string;
}
interface UsersContextValue {
  users: UserContextType[];
  setUsers: React.Dispatch<React.SetStateAction<UserContextType[]>>;
}
const UserContext = createContext<UsersContextValue | undefined>(undefined);    
  export function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<UserContextType[]>([
    // example starting data
    {
      id: '1',
      name: 'Sokha',
      age: 18,
      status: 'single',
      img: 'https://via.placeholder.com/150?text=Sokha',
    },
    {
      id: '2',
      name: 'Mina',
      age: 20,
      status: 'married',
      img: 'https://via.placeholder.com/150?text=Mina',
    },
  ]);
    return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used inside UserProvider');
  }
  return context;
};