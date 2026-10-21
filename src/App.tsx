import { useState } from "react";
import { useSearchUsers } from "./search-users";

export default function App() {
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(0);

  const { users, isLoading } = useSearchUsers(query, (user: string[]) => {
    console.log(user)
  });


  return (
    <>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
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
