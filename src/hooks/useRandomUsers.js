import { useState, useEffect } from "react";
import axios from "axios";
import { getRandomUsers } from "../api/randomUsers.api";

export const useRandomUsers = (numberOfUsers) => {
  const [users, setUsers] = useState(null);
  const [numberOfResults] = useState(numberOfUsers);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const { token, cancel } = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);

      try {
        const randomUsers = await getRandomUsers(numberOfResults, token);
        setUsers(randomUsers.results);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      cancel("useRandomUsers cancelled");
    };
  }, [numberOfResults]);

  return { users, loading, error };
};
