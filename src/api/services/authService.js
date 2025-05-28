import { useAuthStore } from "../../store/authStore";
import api from "../axiosInstance";

 export const login = async (credentials) => {
    console.log("Logging in with credentials:", credentials);
    try {
        const response = await api.post('/parent/login', credentials)
    console.log(response.data);
        const auth = useAuthStore.getState();
        localStorage.setItem('token', response.data.token);
    auth.setToken(response.data.token)
    console.log(auth.token)
    const userResponse = await api.get('/parent/me');
    auth.setUser(userResponse.data);
    console.log(auth.user);
    console.log("Login successful")
    } catch (error) {
        console.log(error)
    }
}

export const signUp = async (credentials) => {
  try {
    console.log("Signing up with credentials:", credentials);
    const response = await api.post('/parent/register', credentials);
    console.log(response.data);
      const auth = useAuthStore.getState();
      localStorage.setItem('token', response.data.token);
    auth.setToken(response.data.token);
    console.log(auth.token);
      Me();
    console.log("Sign up successful");
  } catch (error) {
    console.log(error)
  }
}

export const Me = async() => {
    try {
        const response = await api.get('/parent/me');
        const auth = useAuthStore.getState();
        auth.setUser(response.data);
        console.log("User data fetched successfully:", response.data);
    } catch (error) {
        console.log(error)
    }
}