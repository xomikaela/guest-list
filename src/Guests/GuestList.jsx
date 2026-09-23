import { useGuestDetails } from "./GuestContext";

export default function GuestList() {
  const { guests, loading, setSelectedGuest } = useGuestDetails();

  if (loading) return <p>Loading Please Wait....</p>;
  return (
    <div className="guestlist">
      <h3>Select A Guest:</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id} onClick={() => setSelectedGuest(guest)}>
            {guest.name}-----{guest.email}-----{guest.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
