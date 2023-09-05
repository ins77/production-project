import 'shared/config/i18n/i18n';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { ThemeContextProvider } from 'app/providers/ThemeContextProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
