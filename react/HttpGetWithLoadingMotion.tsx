import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function HttpGetWithLoadingMotion() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      })
      .finally(() => {
        //finally should work on prd but does not work with STRICT MODE on dev server
        //to see the loading effect while the reuest is being fetched setIsLoading in .then() and .catch()
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default HttpGetWithLoadingMotion;
