import Navigation from "components/Navigation";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import classNames from "classnames";

const MainLayout: React.FC = ({ children }) => {
  const [lightThemeOn, setLightThemeOn] = useState(false);

  const toggleTheme = () => setLightThemeOn(!lightThemeOn);

  return (
    <div
      className={classNames(
        { "light-theme": lightThemeOn },
        "absolute top-0 left-0 flex min-h-[100.1%] w-full flex-col bg-th-bg transition-colors duration-500"
      )}
    >
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZFG2C78VKF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZFG2C78VKF');
        `}
      </Script>

      <Navigation onChangeTheme={toggleTheme} lightThemeOn={lightThemeOn} />

      {children}

      <footer className="bg-gray-500 p-4">
        <p className="text-center text-xl text-white">
          Thanks for passing by! 👋
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
