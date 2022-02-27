import Image, { ImageProps } from "next/image";
import { getAssetUrl } from "utils/assets";

type Props = Omit<ImageProps, "src"> & {
  fileName: string;
};

const FramedImage: React.FC<Props> = ({
  height,
  width,
  alt,
  fileName,
  layout,
}: Props) => {
  const shadowStyles = {
    width,
    height,
  };

  return (
    <div className="relative">
      <div
        className="absolute top-3 left-3 rounded-xl bg-gray-500"
        style={shadowStyles}
      />
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
