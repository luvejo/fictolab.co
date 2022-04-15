import Figma from "public/icons/figma.svg";
import Demo from "public/icons/demo.svg";
import GitHub from "public/icons/github.svg";

import { Links } from "types";

interface IconTypes {
  [key: string]: any;
}

const iconTypes = {
  figma: Figma,
  demo: Demo,
  github: GitHub,
} as IconTypes;

type Props = {
  links: Links;
};

const ProjectLinks: React.FC<Props> = ({ links }: Props) => {
  const linkComponents = Object.entries(links).map(([type, link]) => {
    const Icon = iconTypes[type];

    return (
      <a
        key={type}
        href={link}
        className="flex items-center"
        target="_blank"
        rel="noreferrer"
      >
        <Icon className="text-th-text-secondary" />
      </a>
    );
  });

  return <div className="flex gap-4">{linkComponents}</div>;
};

export default ProjectLinks;
