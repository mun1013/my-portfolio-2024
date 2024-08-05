import {
  AiFillLinkedin,
  AiOutlineMedium,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IconType } from "react-icons";

type SocialIcon = {
  id: number;
  link: string;
  icon: IconType;
};

const data: SocialIcon[] = [
  { id: 1, link: "https://www.linkedin.com/in/lim-kah-mun-10a9b158", icon: () => <AiFillLinkedin /> },
  { id: 2, link: "https://medium.com/@mun1013", icon: () => <AiOutlineMedium /> },
  { id: 3, link: "https://github.com/mun1013", icon: () => <AiFillGithub /> },
  { id: 4, link: "https://www.instagram.com/kahmun1013", icon: () => <AiOutlineInstagram /> },
];

export default data;
