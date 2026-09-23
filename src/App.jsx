import { useState } from "react";

import GuestDetails from "./Guests/GuestDetails";
import GuestList from "./Guests/GuestList";
import { useGuestDetails } from "./Guests/GuestContext";

/** Users can toggle between a list of guests and the details of a single guest */
export default function App() {
  const { selectedGuest, setSelectedGuest } = useGuestDetails();
  return (
    <main>
      {selectedGuest ? (
        <GuestDetails
          guestId={selectedGuest.id}
          setGuestId={setSelectedGuest}
        />
      ) : (
        <GuestList setGuestId={setSelectedGuest} />
      )}
    </main>
  );
}
