/**
 * Cookie Helper Utilities for CheapRoomMV
 * Provides setCookie, getCookie, and removeCookie functions.
 */

export const setCookie = (name, value, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const serialized = typeof value === "object" ? JSON.stringify(value) : String(value);
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(serialized)}; expires=${expires}; path=/; SameSite=Lax`;
};

export const getCookie = (name) => {
  const nameEQ = encodeURIComponent(name) + "=";
  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (const cookie of cookies) {
    if (cookie.startsWith(nameEQ)) {
      const val = decodeURIComponent(cookie.substring(nameEQ.length));
      try {
        return JSON.parse(val);
      } catch {
        return val;
      }
    }
  }
  return null;
};

export const removeCookie = (name) => {
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
};
