import "./styles/index.scss";
import React, { Suspense } from "react";
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "./providers/ThemeContextProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { LangSwitcher } from "shared/ui/LangSwitcher";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="...Loading">
        <Navbar />
        <div className="contentPage">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
