// src/api/api.js

const BASE_URL = 'http://localhost:3001/api/v1';

// Fonction pour se connecter
export const loginUserApi = async (credentials) => {
    const response = await fetch(`${BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
};

// Fonction pour obtenir le profil utilisateur
export const fetchUserProfileApi = async (token) => {
    const response = await fetch(`${BASE_URL}/user/profile`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user profile');
    }

    return response.json();
};
