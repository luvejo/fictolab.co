import classNames from "classnames";

type Props = {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
  textColorClass?: string;
};

const Paragraph: React.FC<Props> = ({
  children,
  className,
  textColorClass = "text-th-text-primary",
}: Props) => {
  return (
    <p
      className={classNames(
        "paragraph text-xl md:text-2xl",
        textColorClass,
        className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
