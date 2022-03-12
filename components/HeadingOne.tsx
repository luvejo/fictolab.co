import classNames from "classnames";

type Props = {
  children: string;
  className?: string;
};

const HeadingOne: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <h1
      className={classNames(
        "text-[40px] font-semibold leading-none text-th-text-primary md:text-6xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;
