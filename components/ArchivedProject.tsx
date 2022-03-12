import ProjectLinks from "components/ProjectLinks";
import HeadingTwo from "components/HeadingTwo";
import Paragraph from "components/Paragraph";
import { getSimplifiedDateRange } from "utils/date";
import { Links, CommitDate } from "types";

export type Project = {
  title: string;
  links: Links;
  description: string;
  firstCommit: CommitDate;
  lastCommit?: CommitDate;
  archived?: boolean;
};

const ArchivedEntry: React.FC<Project> = ({
  title,
  description,
  links,
  firstCommit,
  lastCommit,
}: Project) => {
  return (
    <article className="mb-0.5 flex bg-th-card py-8 px-12 first-of-type:rounded-t-xl last-of-type:rounded-b-xl">
      <div className="w-1/2">
        <div className="flex items-center gap-4">
          <HeadingTwo>{title}</HeadingTwo>
          <ProjectLinks links={links} />
        </div>
        <Paragraph textColorClass="text-th-text-secondary">
          {getSimplifiedDateRange(firstCommit, lastCommit)}
        </Paragraph>
      </div>

      <div className="md:w-1/2">
        <Paragraph className="mt-2 md:mt-0">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Paragraph>
      </div>
    </article>
  );
};

export default ArchivedEntry;
