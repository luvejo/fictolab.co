import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

type Props = {
  children: string;
  href: string;
};

const NavigationLink: React.FC<Props> = ({ children, href }: Props) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <div className="relative cursor-pointer py-4 px-2 hover:border-gray-400 ">
        {children}

        <span
          className={classNames([
            "absolute left-0 bottom-0 w-full border-b-6 border-white opacity-0 transition-opacity duration-500",
            { "opacity-100": isActive },
          ])}
        />
      </div>
    </Link>
  );
};

export default NavigationLink;
