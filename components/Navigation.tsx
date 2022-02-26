import NavigationLink from "components/NavigationLink";

type Props = {
  onChangeTheme: () => void;
  lightThemeOn: boolean;
};

const Navigation: React.FC<Props> = ({
  onChangeTheme,
  lightThemeOn,
}: Props) => {
  const themeIcon = lightThemeOn ? "sun.svg" : "moon.svg";

  return (
    <nav className=" bg-gray-300 text-white">
      <div className="mx-auto flex max-w-content items-center justify-between">
        <div className="flex gap-6 text-2xl font-bold">
          <NavigationLink href="/">About</NavigationLink>
          <NavigationLink href="/projects">Projects</NavigationLink>
        </div>

        <button onClick={onChangeTheme}>
          <img src={`/icons/${themeIcon}`} alt=" Dark theme moon" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
