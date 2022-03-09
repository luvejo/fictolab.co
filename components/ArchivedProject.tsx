import ProjectLinks from "components/ProjectLinks";

export type Links = {
  demo?: string;
  github?: string;
  figma?: string;
};

export type CommitDate = {
  month: string;
  year: number;
};

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
          {firstCommit.month}, {firstCommit.year} -
          {lastCommit?.month
            ? ` ${lastCommit.month}, ${lastCommit.year}`
            : " Present"}
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
