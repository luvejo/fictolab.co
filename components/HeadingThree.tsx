import classNames from "classnames";

type Props = {
  children: string;
  className?: string;
};

const HeadingThree: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <h2
      className={classNames(
        "text-2xl font-semibold text-th-text-primary md:text-3xl",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default HeadingThree;
