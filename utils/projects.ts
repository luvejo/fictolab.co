import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getProjects() {
  const projectsPath = path.join(process.cwd(), "data/projects.yaml");
  const fileContents = fs.readFileSync(projectsPath, "utf8");
  const { data } = matter(fileContents);
  return data;
}
