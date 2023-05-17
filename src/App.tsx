import React, { useCallback, useState } from 'react';
import axios from 'axios';

const apiGateway = "https://d5d5n7jhqpq0ije398ch.apigw.yandexcloud.net";

export const App: React.FC = () => {
  const [message, setMessage] = useState("");

  const onClick = (path: string) => {
    axios
      .get(`${apiGateway}/${path}`,
        {
          withCredentials: true
        }
      )
      .then(response => setMessage(response.data));
  };

  return (
    <div>
      <button onClick={() => onClick('login')}>
        login
      </button>
      <button onClick={() => onClick('logout')}>
        logout
      </button>
      <button onClick={() => onClick('sessions')}>
        sessions
      </button>

      <div>
        {message}
      </div>
    </div>
  );
};