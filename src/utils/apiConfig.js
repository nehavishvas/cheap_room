/**
 * Centralized API Configuration for CheapRoomMV
 * Reads base URL from environment variables (.env).
 *
 * Local Server:   http://192.168.1.72:5050
 * Staging Server: https://mobappssolutiondevelopment.com/agoda_app
 */

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://192.168.1.72:5050";

/**
 * Builds the full endpoint URL for a given path.
 * Ensures consistent handling of trailing/leading slashes.
 */
export const getApiUrl = (endpoint) => {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const cleanBase = API_BASE_URL.replace(/\/$/, "");
  return `${cleanBase}${cleanEndpoint}`;
};

export const API_ENDPOINTS = {
  REGISTER: getApiUrl("/api/userAuth/register"),
  LOGIN: getApiUrl("/api/userAuth/login"),
};

export default API_ENDPOINTS;
