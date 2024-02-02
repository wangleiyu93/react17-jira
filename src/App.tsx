import React from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";
import { ConfigProvider } from "antd";

function App() {
  const { user } = useAuth();
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#004990" } }}>
      <div className="App">
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
    </ConfigProvider>
  );
}

export default App;
