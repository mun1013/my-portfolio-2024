import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { IconType } from "react-icons";

type SocialIcon = {
  id: number;
  link: string;
  icon: IconType;
};

const data: SocialIcon[] = [
  {
    id: 1,
    link: "mailto:mun2happy@gmail.com",
    icon: () => <HiOutlineMail />,
  },
  { id: 2, link: "https://wa.me/+60162885717", icon: () => <FaWhatsapp /> },
  {
    id: 3,
    link: "https://m.me/1013kahmun",
    icon: () => <RiMessengerLine />,
  },
];

export default data;
