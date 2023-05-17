import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";

const apiGateway = "https://d5d5n7jhqpq0ije398ch.apigw.yandexcloud.net";

interface Session {
  id: string;
  name: string;
}

export const App: React.FC = () => {
  const [message, setMessage] = useState("");
  const [sessions, setSessions] = useState<Session[]>([]);

  const authActions = (path: string) => {
    axios
      .get(`${apiGateway}/${path}`,
        {
          withCredentials: true
        }
      )
      .then(response => {
        setMessage(response.data);
        // sessionsActions();
      });
  };

  const sessionsActions = () => {
    axios
      .get(`${apiGateway}/sessions`,
        {
          withCredentials: true
        }
      )
      .then(response => setSessions(response.data));
  };

  // useEffect(() => {
  //   sessionsActions();
  //
  //   setTimeout(() => {
  //     sessionsActions();
  //   }, 5000);
  // }, []);

  return (
    <div className="div-1">
      <div className="div-2">
        <div className="title">
          Actions
        </div>
        <div className="buttons">
          <button
            className="button"
            onClick={() => authActions('login')}
          >
            Login
          </button>
          <button
            className="button"
            onClick={() => authActions('logout')}
          >
            Logout
          </button>
        </div>

        {message && (
          <>
            <div className="title">
              Message
            </div>
            <div>
              {message}
            </div>
          </>
        )}
      </div>

      <div className="div-2">
        <div className="title">
          Sessions
        </div>
        <div>
          <ul>
            {sessions.map(session =>
              <li>
                {session.name}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};