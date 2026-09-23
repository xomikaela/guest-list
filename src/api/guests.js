import { API } from "../constants";

/** Fetches an array of guests from the API */
export async function getGuests() {
  try {
    const response = await fetch(API + "/guests");
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

/** Fetches a single guest by ID from the API */
export async function getGuest(id) {
  try {
    const response = await fetch(API + "/guests/" + id);
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
