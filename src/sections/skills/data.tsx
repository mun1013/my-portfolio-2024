import {
  SiAdobexd,
  SiFigma,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiAzuredevops,
  SiExcalidraw,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiJest,
  SiTestinglibrary,
} from "react-icons/si";
import {
  FaServer,
  FaLaptop,
  FaMobile,
  FaGit,
  FaInfinity,
  FaCode,
} from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { PiGitBranchDuotone } from "react-icons/pi";
import { TbBrandReactNative } from "react-icons/tb";
import { IconType } from "react-icons";
import "./skills.css";

type Skills = {
  id: number;
  categoryIcon: IconType;
  title: string;
  icons: IconType;
};

const data: Skills[] = [
  {
    id: 1,
    categoryIcon: () => <FaCode />,
    title: "Languages",
    icons: () => (
      <>
        <a
          title="JavaScript"
          href="https://www.javascript.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiJavascript className="skills__icon" />
        </a>
        <a
          title="TypeScript"
          href="https://www.typescriptlang.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTypescript className="skills__icon" />
        </a>
      </>
    ),
  },
  {
    id: 2,
    categoryIcon: () => <SiExcalidraw />,
    title: "UI/UX Design",
    icons: () => (
      <>
        <a
          title="Figma"
          href="https://www.figma.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFigma className="skills__icon" />
        </a>
        <a
          title="AdobeXD"
          href="https://adobexdplatform.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiAdobexd className="skills__icon" />
        </a>
      </>
    ),
  },
  {
    id: 3,
    categoryIcon: () => <FaLaptop />,
    title: "Frontend Development",
    icons: () => (
      <>
        <a
          title="HTML5"
          href="https://html.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiHtml5 className="skills__icon" />
        </a>
        <a
          title="CSS3"
          href="https://css3.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCss3 className="skills__icon" />
        </a>
        <a
          title="ReactJS"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiReact className="skills__icon" />
        </a>
        <a
          title="NextJS"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiNextdotjs className="skills__icon" />
        </a>
      </>
    ),
  },
  {
    id: 4,
    categoryIcon: () => <FaServer />,
    title: "Backend Development",
    icons: () => (
      <>
        <a
          title="NodeJS"
          href="https://nodejs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiNodedotjs className="skills__icon" />
        </a>
        <a
          title="ExpressJS"
          href="https://expressjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiExpress className="skills__icon" />
        </a>
        <a
          title="Microsoft SQL Server"
          href="https://www.microsoft.com/en-my/sql-server/sql-server-downloads"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiMicrosoftsqlserver className="skills__icon" />
        </a>
        <a
          title="PostgreSQL"
          href="https://www.postgresql.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiPostgresql className="skills__icon" />
        </a>
      </>
    ),
  },
  {
    id: 5,
    categoryIcon: () => <FaMobile />,
    title: "Mobile Development",
    icons: () => (
      <a
        title="React Native"
        href="https://reactnative.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbBrandReactNative className="skills__icon" />
      </a>
    ),
  },
  {
    id: 6,
    categoryIcon: () => <PiGitBranchDuotone />,
    title: "Version Control",
    icons: () => (
      <a
        title="Git"
        href="https://git-scm.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGit className="skills__icon" />
      </a>
    ),
  },
  {
    id: 7,
    categoryIcon: () => <FaInfinity />,
    title: "DevOps",
    icons: () => (
      <a
        title="Azure DevOps"
        href="https://azure.microsoft.com/en-us/products/devops"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiAzuredevops className="skills__icon" />
      </a>
    ),
  },
  {
    id: 8,
    categoryIcon: () => <GrTest />,
    title: "Testing",
    icons: () => (
      <>
        <a
          title="Jest"
          href="https://jestjs.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiJest className="skills__icon" />
        </a>
        <a
          title="React Testing Library"
          href="https://testing-library.com/docs/react-testing-library/intro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTestinglibrary className="skills__icon" />
        </a>
      </>
    ),
  },
];

export default data;
