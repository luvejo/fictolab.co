import NavigationLink from "components/NavigationLink";
import IconMoon from "public/icons/moon.svg";
import IconSun from "public/icons/sun.svg";

type Props = {
  onChangeTheme: () => void;
  lightThemeOn: boolean;
};

const Navigation: React.FC<Props> = ({
  onChangeTheme,
  lightThemeOn,
}: Props) => {
  return (
    <nav className=" bg-gray-300 text-white">
      <div className="mx-auto flex max-w-content items-center justify-between px-5">
        <div className="flex gap-6 text-xl font-bold md:text-2xl">
          <NavigationLink href="/">About</NavigationLink>
          <NavigationLink href="/projects">Projects</NavigationLink>
        </div>

        <button onClick={onChangeTheme}>
          {lightThemeOn ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
