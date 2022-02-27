import type { NextPage } from "next";

import FramedImage from "components/FramedImage";
import IconGitHub from "public/icons/github.svg";
import IconDevTo from "public/icons/devto.svg";
import IconLinkedIn from "public/icons/linkedin.svg";

const Index: NextPage = () => {
  return (
    <div className="mx-auto my-8 flex flex-grow items-center ">
      <div className="flex w-[740px]  gap-12">
        <FramedImage
          fileName="avatar.jpg"
          alt=" Picture of me"
          height={310}
          width={310}
          layout="fixed"
        />

        <section>
          <h1 className="text-6xl font-semibold text-th-text-primary">
            Hi, I&apos;m Luis
          </h1>

          <p className="text-3xl font-semibold text-th-text-secondary">
            Web Frontend
          </p>

          <p className="mt-8 text-2xl text-th-text-primary">
            <strong>Fictolab</strong> is where I share the web prototypes that I
            would love to see in the world.
          </p>

          <div className="mt-12 flex gap-5">
            <a
              href="https://github.com/luvejo"
              target="_blank"
              rel="noreferrer"
            >
              <IconGitHub className="fill-th-text-primary" />
            </a>

            <a
              href="https://www.linkedin.com/in/luisfelipevelasquez"
              target="_blank"
              rel="noreferrer"
            >
              <IconLinkedIn className="fill-th-text-primary" />
            </a>

            <a href="https://dev.to/luvejo" target="_blank" rel="noreferrer">
              <IconDevTo className="fill-th-text-primary" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
