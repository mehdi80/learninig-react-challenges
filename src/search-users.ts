import { useState, useEffect, useEffectEvent } from "react";
import { useDebounce } from "./use-debounce-hook";
import { searchUsers } from "./mock-server";

export function useSearchUsers(query: string, onResult: (users: string[]) => void): { users: string[]; isLoading: boolean } {
    const debouncedQuery = useDebounce(query, 300);
    const [users, setUsers] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const callBack = useEffectEvent((e: string[]) => {onResult(e) });
    
    useEffect(() => {
        setIsLoading(true);
        let ignore = false;
        
        searchUsers(debouncedQuery).then((result) => {
            if (!ignore) {
                setUsers(result);
                setIsLoading(false);
                callBack(result)      
            }
        });


        return () => {
            ignore = true
        }

    }, [debouncedQuery]);

    return { users, isLoading };
}
