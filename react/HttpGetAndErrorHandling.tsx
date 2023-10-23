import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function HttpGetAndErrorHandling() {
  const [users, setUsers] = useState<User[]>([]);
  //Error handling
  const [error, setError] = useState("");

  //axios call returns a Promise - an object that holds the eventual result or failure of an asynchronous operation.
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      //error handling
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {/* error handling */}
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default HttpGetAndErrorHandling;
