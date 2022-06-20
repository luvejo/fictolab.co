import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import FramedImage from "components/FramedImage";
import HeadingOne from "components/HeadingOne";
import Paragraph from "components/Paragraph";
import IconGitHub from "public/icons/github.svg";
import IconDevTo from "public/icons/devto.svg";
import IconLinkedIn from "public/icons/linkedin.svg";
import { getAssetUrl } from "utils/assets";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luis Velásquez | About</title>
      </Head>

      <div className="mx-auto my-14 flex flex-grow items-center">
        <div className="flex max-w-md flex-col items-center gap-x-12 px-5 md:max-w-[740px] md:flex-row ">
          {/* Desktop Avatar */}
          <div className="hidden md:block">
            <FramedImage
              className="flex"
              fileName="avatar.jpg"
              alt=" Picture of me"
              height={260}
              width={260}
              layout="fixed"
            />
          </div>

          {/* Mobile Avatar */}
          <div className="overflow-hidden md:hidden">
            <Image
              src={getAssetUrl("avatar.jpg")}
              className="rounded-full"
              alt=" Picture of me"
              height={128}
              width={128}
              quality={100}
              layout="fixed"
            />
          </div>

          {/* About */}
          <section className="text-center md:text-left">
            <HeadingOne>Hi, I&apos;m Luis</HeadingOne>

            <p className="text-2xl font-semibold leading-none text-th-text-secondary md:text-3xl">
              Web Frontend
            </p>

            <Paragraph className="mt-9">
              <strong>Fictolab</strong> is the playground of my web app ideas
              and wanders.
            </Paragraph>

            <div className="mt-6 flex justify-center gap-x-5 md:justify-start">
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
    </>
  );
};

export default Index;
