import React, { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styled from "@emotion/styled";

function fallbackRender({
  error,
  resetErrorBoundary,
}: {
  error: Error | null;
  resetErrorBoundary: Function;
}) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  return (
    <FallbackRender role="alert">
      <p>抱歉，遇到了错误：</p>
      <pre style={{ color: "red" }}>{error?.message}</pre>
    </FallbackRender>
  );
}
export const ErrorBoundaryWrpper = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary
      fallbackRender={fallbackRender}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

const FallbackRender = styled.div`
  margin: calc((100vh - 132px) / 2) auto 0;
  width: 50%;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
