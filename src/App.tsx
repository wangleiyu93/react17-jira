import React from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";
import { ConfigProvider } from "antd";
import { ErrorBoundaryWrpper } from "components/error-boundary";

function App() {
  const { user } = useAuth();
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#004990" } }}>
      <div className="App">
        <ErrorBoundaryWrpper>
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </ErrorBoundaryWrpper>
      </div>
    </ConfigProvider>
  );
}

export default App;
