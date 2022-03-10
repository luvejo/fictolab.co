import FramedImage from "./FramedImage";
import ProjectLinks from "./ProjectLinks";

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
}: Project) => {
  return (
    <article className="mb-28 flex justify-between gap-9 odd:flex-row-reverse">
      <div>
        <div className="flex items-center gap-4">
          <h2 className="text-4xl font-semibold">{title}</h2>

          <ProjectLinks links={links} />
        </div>
        <p className="text-2xl text-th-text-secondary">Jan, 2022 - Present</p>

        <p
          className="mt-9  text-2xl"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <h3 className="mt-3 text-3xl font-semibold">Tech</h3>

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
