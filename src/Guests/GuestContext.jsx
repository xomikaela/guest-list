import { createContext, useContext, useEffect, useState } from "react";

const GuestDetailsContext = createContext(null);

export function GuestDetailsProvider({ children }) {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGuestData() {
      try {
        setLoading(true);
        const answer = await fetch(
          "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2606-FTB-CT-WEB-PT/guests",
        );
        if (!answer.ok) {
          throw new Error(`HTTP Error${answer.statusText}`);
        }
        const result = await answer.json();
        setGuests(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchGuestData();
  }, []);
  return (
    <GuestDetailsContext.Provider
      value={{ guests, selectedGuest, setSelectedGuest, loading, error }}
    >
      {children}
    </GuestDetailsContext.Provider>
  );
}

export function useGuestDetails() {
  const context = useContext(GuestDetailsContext);
  if (!context) {
    throw new Error("UseGuestDetails must be used within GuestDetailsProvider");
  }
  return context;
}
