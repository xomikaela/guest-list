import { useGuestDetails } from "./GuestContext";

export default function GuestDetailCard() {
  const { selectedGuest, setSelectedGuest } = useGuestDetails();

  if (!selectedGuest) return null;

  return (
    <div className="guest-card">
      <h2>{selectedGuest.name}</h2>
      <p>
        <strong>Email:</strong> {selectedGuest.email}
      </p>
      <p>
        <strong>Phone:</strong> {selectedGuest.phone}
      </p>
      <p>
        <strong>Bio:</strong> {selectedGuest.bio}
      </p>
      <p>
        <strong>Job:</strong> {selectedGuest.job}
      </p>
      <button onClick={() => setSelectedGuest(null)}>← Back to List</button>
    </div>
  );
}
