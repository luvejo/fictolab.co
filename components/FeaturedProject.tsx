import FramedImage from "components/FramedImage";
import ProjectLinks from "components/ProjectLinks";
import HeadingTwo from "components/HeadingTwo";
import HeadingThree from "components/HeadingThree";
import Paragraph from "components/Paragraph";
import { Links, CommitDate } from "types";
import { getSimplifiedDateRange } from "utils/date";

export type Project = {
  title: string;
  links: Links;
  description: string;
  stack: string[];
  screenshot: string;
  firstCommit: CommitDate;
  lastCommit?: CommitDate;
  archived?: boolean;
};

const FeaturedProject: React.FC<Project> = ({
  title,
  description,
  screenshot,
  links,
  stack,
  firstCommit,
  lastCommit,
}: Project) => {
  const mainLink = links?.demo || links?.figma || links?.github;

  return (
    <article className="mb-16 items-start justify-between gap-9 md:flex md:even:flex-row-reverse lg:mb-28 lg:flex lg:flex-row">
      {/* Screenshot */}
      <div className="flex grow justify-center">
        <div className="lg:h-screenshot h-full w-full max-w-screenshot lg:w-screenshot">
          <a href={mainLink} target="_blank" rel="noreferrer">
            <FramedImage
              fileName={screenshot}
              alt=" Screenshot of the project"
              width={493}
              height={369}
              layout="responsive"
            />
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto mt-6 max-w-[496px] md:mt-0 md:w-2/5">
        <div className="flex items-center gap-4">
          <HeadingTwo>{title}</HeadingTwo>

          <ProjectLinks links={links} />
        </div>
        <p className="text-2xl text-th-text-secondary">
          {getSimplifiedDateRange(firstCommit, lastCommit)}
        </p>

        <Paragraph className="mt-2 lg:mt-9">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Paragraph>

        <HeadingThree className="mt-3">Tech</HeadingThree>

        <div className="mt-3 flex flex-wrap gap-3">
          {stack.map((tech) => (
            <div
              key={tech}
              className="rounded-md bg-th-card py-2 px-4 text-lg font-semibold md:text-2xl"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
