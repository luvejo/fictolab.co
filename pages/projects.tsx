import ProjectEntry, { Project } from "components/ProjectEntry";

import type { NextPage } from "next";
import { getProjects } from "utils/projects";

type Props = {
  projects: Project[];
};

const Projects: NextPage<Props> = ({ projects }: Props) => {
  const featuredProjects = projects.filter((p) => !p.archived);

  return (
    <div className="mx-auto my-14 w-full max-w-content flex-grow text-th-text-primary ">
      <h1 className="mb-20 text-center text-6xl font-semibold">Featured</h1>

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
    </div>
  );
};

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
}

export default Projects;
