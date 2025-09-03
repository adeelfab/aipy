// utils/auth.js
// Authentication utility functions

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};

export const validateName = (name) => {
  return name && name.trim().length >= 2;
};

export const createUser = (email, name) => {
  return {
    id: Date.now().toString(),
    email,
    name,
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString()
  };
};

export const loginUser = (email) => {
  return {
    email,
    name: email.split('@')[0],
    lastLogin: new Date().toISOString()
  };
};