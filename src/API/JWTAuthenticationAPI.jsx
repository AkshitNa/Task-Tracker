import {apiClient} from './ApiClient'

// For Spring Security Authentication [No JWT]

export const executeBasicAuthenticationService
 = (token) => apiClient.get(`/basicauth`, 
    {
        headers: {
            Authorization : token
        }
    }
);

// For Spring Security JWT Authentication

export const executeJWTAuthenticationService
 = (username, password) => 
    apiClient.post(`api/auth/authenticate`, {username, password});