import FeaturedProject, { Project } from "components/FeaturedProject";
import ArchivedProject from "components/ArchivedProject";

import type { NextPage } from "next";
import Head from "next/head";
import HeadingOne from "components/HeadingOne";

type Props = {
  projects: Project[];
};

const Projects: NextPage<Props> = ({ projects }: Props) => {
  const featuredProjects = projects.filter((p) => !p.archived);
  const archivedProjects = projects.filter((p) => p.archived);

  return (
    <>
      <Head>
        <title>Luis Velásquez | Projects</title>
      </Head>
      <div className="mx-auto my-14 w-full max-w-content flex-grow px-5 text-th-text-primary ">
        <section>
          <HeadingOne className="mb-16 text-center">Featured</HeadingOne>

          {featuredProjects.map((project) => (
            <FeaturedProject
              key={project.title}
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
          <HeadingOne className="mb-16 text-center">Archive</HeadingOne>

          {archivedProjects.map((project) => (
            <ArchivedProject
              key={project.title}
              title={project.title}
              description={project.description}
              links={project.links}
              firstCommit={project.firstCommit}
              lastCommit={project.lastCommit}
            />
          ))}
        </section>
      </div>
    </>
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
