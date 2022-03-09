import ProjectEntry, { Project } from "components/ProjectEntry";
import ArchivedProject from "components/ArchivedProject";

import type { NextPage } from "next";
import { getProjects } from "utils/projects";

type Props = {
  projects: Project[];
};

const Projects: NextPage<Props> = ({ projects }: Props) => {
  const featuredProjects = projects.filter((p) => !p.archived);
  const archivedProjects = projects.filter((p) => p.archived);

  return (
    <div className="mx-auto my-14 w-full max-w-content flex-grow text-th-text-primary ">
      <section>
        <h2 className="mb-20 text-center text-6xl font-semibold">Featured</h2>

        {featuredProjects.map((project) => (
          <ProjectEntry
            title={project.title}
            description={project.description}
            stack={project.stack}
            screenshot={project.screenshot}
            links={project.links}
            firstCommit={project.firstCommit}
            lastCommit={project.lastCommit}
          />
        ))}
      </section>

      <section>
        <h2 className="mb-20 text-center text-6xl font-semibold">Archive</h2>

        {archivedProjects.map((project) => (
          <ArchivedProject
            title={project.title}
            description={project.description}
            links={project.links}
            firstCommit={project.firstCommit}
            lastCommit={project.lastCommit}
          />
        ))}
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const projects = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/projects.json?alt=media"
  ).then((res) => res.json());

  return {
    props: {
      projects,
    },
  };
}

export default Projects;
