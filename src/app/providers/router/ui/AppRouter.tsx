import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from 'shared/config/routesConfig/routesConfig';

function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routesConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="pageWrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
