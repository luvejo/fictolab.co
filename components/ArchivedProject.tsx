import ProjectLinks from "components/ProjectLinks";
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
          <h3 className="text-4xl font-semibold">{title}</h3>
          <ProjectLinks links={links} />
        </div>
        <p className="text-2xl text-th-text-secondary">
          {getSimplifiedDateRange(firstCommit, lastCommit)}
        </p>
      </div>

      <div className="w-1/2">
        <p
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </article>
  );
};

export default ArchivedEntry;
