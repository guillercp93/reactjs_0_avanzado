import App from "./App";
import { AppRouter } from "./AppRouter";
import { ModalProvider } from "./Components/Modal/context/ModalContext";
import { GlobalProvider } from "./Context/global.context";
import ErrorBoundary from "./ErrorBoundary";

export const AppHookContainer = () => {
    return (
        <ErrorBoundary>
            <GlobalProvider>
                <ModalProvider>
                    <AppRouter>
                        <App />
                    </AppRouter>
                </ModalProvider>
            </GlobalProvider>
        </ErrorBoundary>
    );
}
