/*
 * Errors management
*/

import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false }
    }


    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        console.debug("From ErrorBoundary: ", _)
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.debug("Error: ", error);
        console.info("Error info: ", errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <h1>Oops! I did it again 🙃</h1>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
