import { IconBrandGithub, IconBrandLinkedin, IconFileCv } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="flex items-center w-3/4  mx-auto my-8  py-4  bg-red-400 rounded-3xl">
      <ul className="flex justify-between items-center w-full px-10 text-white">
        <li>Simple Next app</li>
        <li>Made by Dimash | 2024</li>
        <li className="flex gap-2 cursor-pointer">
          <a href="https://github.com/Dimash95" target="_blanc">
            <IconBrandGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/dinmukhamed-amirov-4b520726b/" target="_blanc">
            <IconBrandLinkedin size={30} />
          </a>
          <a
            href="https://hh.kz/resume/b6ebaf9bff096cd1370039ed1f37506742786c?hhtmFrom=resume_list"
            target="_blanc"
          >
            <IconFileCv size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
