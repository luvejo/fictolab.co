import Navigation from "components/Navigation";
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
