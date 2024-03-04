import React from "react";

class DeferredRouteErrorBoundary extends React.Component<
  { children: React.ReactNode; Fallback: React.FC<{ error?: any }> },
  { hasError: boolean; error: any }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: any) {
    try {
      const parsedError = JSON.parse(error?.message);
      return { error: parsedError, hasError: true };
    } catch (err: any) {
      console.error(err);
    }

    return { error, hasError: true };
  }

  render() {
    const { children, Fallback } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      return <Fallback error={error} />;
    }

    return children;
  }
}

export default DeferredRouteErrorBoundary;
