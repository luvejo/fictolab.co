import Image, { ImageProps } from "next/image";
import { getAssetUrl } from "utils/assets";
import classNames from "classnames";

type Props = Omit<ImageProps, "src"> & {
  fileName: string;
};

const FramedImage: React.FC<Props> = ({
  height,
  width,
  alt,
  fileName,
  layout,
  className,
}: Props) => {
  return (
    <div
      className={classNames("framed-image h-full w-full rounded-xl", className)}
    >
      <Image
        className="rounded-xl"
        src={getAssetUrl(fileName)}
        alt={alt}
        height={height}
        width={width}
        quality={90}
        layout={layout}
      />
    </div>
  );
};

export default FramedImage;
