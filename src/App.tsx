import { useState, useEffect } from "react";

// api.js (given, don't change)
const USERS = ['Ali', 'Alireza', 'Amir', 'Maryam', 'Mehdi', 'Mohammad', 'Sara', 'Zahra'];

function searchUsers(query: string): Promise<string[]> {
  const delay = 200 + Math.random() * 1000; // random latency
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(USERS.filter((u) => u.toLowerCase().startsWith(query.toLowerCase())));
    }, delay);
  });
}



export default function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let ignore = false;

    searchUsers(query).then((result) => {
      if (!ignore) {
        setUsers(result);
        setIsLoading(false);
      }
    });


    return () => {
      ignore = true
    }
  }, [query]);

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
