import Navigation from "components/Navigation";
import Head from "next/head";
import { useState } from "react";
import classNames from "classnames";

const MainLayout: React.FC = ({ children }) => {
  const [lightThemeOn, setLightThemeOn] = useState(false);

  const toggleTheme = () => setLightThemeOn(!lightThemeOn);

  return (
    <div
      className={classNames(
        { "light-theme": lightThemeOn },
        "absolute top-0 left-0 flex min-h-full w-full flex-col bg-th-bg transition-colors duration-500"
      )}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navigation onChangeTheme={toggleTheme} lightThemeOn={lightThemeOn} />

      {children}

      <footer className="bg-gray-500 p-4">
        <p className="text-center text-xl text-gray-200">
          Thanks for passing by.
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
