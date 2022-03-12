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

const ProjectEntry: React.FC<Project> = ({
  title,
  description,
  screenshot,
  links,
  stack,
  firstCommit,
  lastCommit,
}: Project) => {
  return (
    <article className="mb-28 flex justify-between gap-9 odd:flex-row-reverse">
      <div>
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
              className="rounded-md bg-th-card py-2 px-4 text-2xl"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="grow">
        <FramedImage
          fileName={screenshot}
          alt=" Screenshot of the project"
          width={493}
          height={369}
          layout="fixed"
        />
      </div>
    </article>
  );
};

export default ProjectEntry;
