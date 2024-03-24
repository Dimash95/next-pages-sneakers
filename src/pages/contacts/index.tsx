import {
  IconPhone,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import { cookies } from "next/headers";

export default function Contacts() {
  return (
    <main className="m-auto text-white">
      <h1 className="text-4xl text-center">Contacts</h1>
      <ul className="flex flex-col gap-4 mt-8">
        <li className="flex gap-1">
          <IconPhone /> <p>Phone: 87763434334</p>
        </li>
        <li className="flex gap-1">
          <IconMail /> <p>Email: dinmukhamed.amirov@gmail.com</p>
        </li>
        <li className="flex gap-1">
          <IconBrandGithub size={30} /> <span>Github:</span>
          <a href="https://github.com/Dimash95" target="_blanc" className="text-blue-500">
            https://github.com/Dimash95
          </a>
        </li>
        <li className="flex gap-1">
          <IconBrandLinkedin size={30} /> <span>Linkedin:</span>
          <a
            href="https://www.linkedin.com/in/dinmukhamed-amirov-4b520726b/"
            target="_blanc"
            className="text-blue-500"
          >
            https://www.linkedin.com/in/dinmukhamed-amirov-4b520726b/
          </a>
        </li>
        <li className="flex gap-1">
          <IconFileCv size={30} /> <span>CV:</span>
          <a
            href="https://hh.kz/resume/b6ebaf9bff096cd1370039ed1f37506742786c?hhtmFrom=resume_list"
            target="_blanc"
            className="text-blue-500"
          >
            https://hh.kz/resume/b6ebaf9bff096cd1370039ed1f37506742786c?hhtmFrom=resume_list
          </a>
        </li>
      </ul>
    </main>
  );
}
