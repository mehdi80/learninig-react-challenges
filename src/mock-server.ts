const USERS = ['Ali', 'Alireza', 'Amir', 'Maryam', 'Mehdi', 'Mohammad', 'Sara', 'Zahra'];

export function searchUsers(query: string): Promise<string[]> {
  const delay = 200 + Math.random() * 1000; // random latency
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(USERS.filter((u) => u.toLowerCase().startsWith(query.toLowerCase())));
    }, delay);
  });
}
