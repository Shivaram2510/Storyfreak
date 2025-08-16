import { User } from '@/types';
import usersData from '@/data/users.json';

const STORAGE_KEYS = {
  USERS: 'storyfreak-users',
  THEME: 'storyfreak-theme',
  INPUT_VALUES: 'storyfreak-input-values',
} as const;

// Users management
export const getUsers = (): User[] => {
  try {
    const storedUsers = localStorage.getItem(STORAGE_KEYS.USERS);
    if (storedUsers) {
      return JSON.parse(storedUsers);
    }
    // If no stored users, use JSON data and save to localStorage
    const users = usersData as User[];
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    return users;
  } catch (error) {
    console.error('Error loading users:', error);
    return usersData as User[];
  }
};

export const saveUsers = (users: User[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
  }
};

export const addUser = (user: Omit<User, 'id'>): User => {
  const users = getUsers();
  const newUser: User = {
    ...user,
    id: (Math.max(...users.map(u => parseInt(u.id)), 0) + 1).toString(),
  };
  const updatedUsers = [...users, newUser];
  saveUsers(updatedUsers);
  return newUser;
};

export const updateUser = (id: string, updatedUser: Partial<User>): User | null => {
  const users = getUsers();
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) return null;
  
  const updated = { ...users[userIndex], ...updatedUser, id };
  users[userIndex] = updated;
  saveUsers(users);
  return updated;
};

export const deleteUser = (id: string): boolean => {
  const users = getUsers();
  const filteredUsers = users.filter(u => u.id !== id);
  
  if (filteredUsers.length === users.length) return false;
  
  saveUsers(filteredUsers);
  return true;
};

// Input values management
export const getInputValues = (): Record<string, string> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.INPUT_VALUES);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error loading input values:', error);
    return {};
  }
};

export const saveInputValues = (values: Record<string, string>): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.INPUT_VALUES, JSON.stringify(values));
  } catch (error) {
    console.error('Error saving input values:', error);
  }
};

// Clear all data
export const clearAllData = (): void => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};

// Export storage keys for reference
export { STORAGE_KEYS };