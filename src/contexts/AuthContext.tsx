"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  school: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: Omit<User, 'id'>) => Promise<void>;
  logout: () => void;
  googleAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app load
    const checkAuth = async () => {
      try {
        // Check localStorage or cookies for existing session
        const savedUser = localStorage.getItem('edwance_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Error checking auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - replace with actual API call
      const mockUser: User = {
        id: '1',
        email,
        firstName: 'John',
        lastName: 'Doe',
        school: 'Demo School',
        role: 'student'
      };
      
      setUser(mockUser);
      localStorage.setItem('edwance_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: Omit<User, 'id'>) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - replace with actual API call
      const mockUser: User = {
        id: Date.now().toString(),
        ...userData
      };
      
      setUser(mockUser);
      localStorage.setItem('edwance_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('edwance_user');
  };

  const googleAuth = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - replace with actual Google OAuth
      const mockUser: User = {
        id: 'google_' + Date.now(),
        email: 'user@gmail.com',
        firstName: 'Google',
        lastName: 'User',
        school: 'Demo School',
        role: 'student'
      };
      
      setUser(mockUser);
      localStorage.setItem('edwance_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Google auth error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
    googleAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
