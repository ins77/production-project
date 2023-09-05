import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from 'shared/config/routesConfig/routesConfig';
import { PageLoader } from 'shared/ui/PageLoader';

function AppRouter() {
    return (
        <Routes>
            {Object.values(routesConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="pageWrapper">{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
}

export default AppRouter;
