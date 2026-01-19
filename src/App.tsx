import Skills from "/components/skills";
import About from "components/about";
import Contact from "/components/contact";
import Projects from "/components/projects";
import DynamicGraphsBackground from "/components/p5-sketch/dynamic-graphs-background";
import { WrenchIcon } from "./assets/icons/WrenchIcon";
import { HouseIcon } from "./assets/icons/HouseIcon";
import { PortfolioIcon } from "./assets/icons/PortfolioIcon";
import { SendIcon } from "./assets/icons/SendIcon";
import { PopupProvider } from "./providers/popup-provider";
import { SideNavigation } from "./components/side-navigation";

const sections = [
  { name: "About", component: About, icon: HouseIcon },
  { name: "Projects", component: Projects, icon: PortfolioIcon },
  { name: "Skills", component: Skills, icon: WrenchIcon },
  { name: "Contact", component: Contact, icon: SendIcon },
];

function App() {
  return (
    <PopupProvider>
      <DynamicGraphsBackground className="fixed inset-0" />

      <div className="fixed inset-0 backdrop-blur-[1.2px]"></div>

      <div className="relative max-w-[3000px] text-sm lg:text-base">
        <SideNavigation sections={sections} />
      </div>
    </PopupProvider>
  );
}

export default App;
