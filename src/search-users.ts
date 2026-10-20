import { useState, useEffect } from "react";
import { useDebounce } from "./use-debounce-hook";
import { searchUsers } from "./mock-server";

export function useSearchUsers(query: string): { users: string[]; isLoading: boolean } {
    const [users, setUsers] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const debouncedQuery = useDebounce(query, 300);

    useEffect(() => {
        setIsLoading(true);
        let ignore = false;

        searchUsers(debouncedQuery).then((result) => {
            if (!ignore) {
                setUsers(result);
                setIsLoading(false);
            }
        });


        return () => {
            ignore = true
        }

    }, [debouncedQuery]);

    return { users, isLoading };
}
