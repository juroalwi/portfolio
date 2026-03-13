import { PopupProvider } from "/providers/popup-provider";
import { ScreenSizeProvider } from "/providers/screen-size-provider";
import { Skills } from "/components/skills";
import { About } from "components/about";
import { Contact } from "/components/contact";
import { Projects } from "/components/projects";
import { DynamicGraphsBackground } from "/components/p5-sketch/dynamic-graphs-background";
import { SideNavigation } from "/components/side-navigation";
import { WrenchIcon } from "/assets/icons/WrenchIcon";
import { HouseIcon } from "/assets/icons/HouseIcon";
import { PortfolioIcon } from "/assets/icons/PortfolioIcon";
import { SendIcon } from "/assets/icons/SendIcon";

const sections = [
  { name: "About", component: About, icon: HouseIcon },
  { name: "Projects", component: Projects, icon: PortfolioIcon },
  { name: "Skills", component: Skills, icon: WrenchIcon },
  { name: "Contact", component: Contact, icon: SendIcon },
];

function App() {
  return (
    <ScreenSizeProvider>
      <PopupProvider>
        <DynamicGraphsBackground className="fixed inset-0" />

        <div className="fixed inset-0 backdrop-blur-[0.0625rem]"></div>

        <div className="relative mx-auto w-full max-w-150 lg:max-w-500">
          <SideNavigation sections={sections} />
        </div>
      </PopupProvider>
    </ScreenSizeProvider>
  );
}

export default App;
