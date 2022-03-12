import classNames from "classnames";

type Props = {
  children: string;
  className?: string;
};

const HeadingTwo: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <h2
      className={classNames(
        "text-3xl font-semibold text-th-text-primary md:text-4xl ",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default HeadingTwo;
