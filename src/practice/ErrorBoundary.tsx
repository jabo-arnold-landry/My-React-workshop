import React, { Component, type ReactNode } from "react";
interface ClassProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface BoundaryError {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ClassProps> {
  state: BoundaryError = { hasError: false };

  static getDerivedStateFromError(error: Error): BoundaryError {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(`${error.message}-${errorInfo}`);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <h2>there was a problem</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
