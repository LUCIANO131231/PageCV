import {RiReactjsFill, RiHtml5Fill, RiCss3Fill, RiJavascriptFill, RiGithubFill, RiTerminalBoxFill} from '@remixicon/react';

const knowledge = [
  {
    id: 1,
    name: "React",
    percentage: 90,
    icon: <RiReactjsFill size={32} />,
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 2,
    name: "HTML5",
    percentage: 95,
    icon: <RiHtml5Fill size={32} />,
    color: "from-orange-400 to-orange-600"
  },
  {
    id: 3,
    name: "CSS3",
    percentage: 85,
    icon: <RiCss3Fill size={32} />,
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 4,
    name: "JavaScript",
    percentage: 88,
    icon: <RiJavascriptFill size={32} />,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: 5,
    name: "Git/GitHub",
    percentage: 80,
    icon: <RiGithubFill size={32} />,
    color: "from-gray-700 to-gray-900"
  },
  {
    id: 6,
    name: "Node.js",
    percentage: 75,
    icon: <RiTerminalBoxFill size={32} />,
    color: "from-green-500 to-green-700"
  }
];

export default knowledge;