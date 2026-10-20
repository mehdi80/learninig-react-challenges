import { useState } from "react";
import { useSearchUsers } from "./search-users";

export default function App() {
  const [query, setQuery] = useState('');
  const { users, isLoading } = useSearchUsers(query);
  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
      />
      {isLoading && <p>Loading...</p>}
      <ul>
        {users.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>
    </>
  );
}
