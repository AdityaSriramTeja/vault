import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SidebarContent from "./SidebarContent";
import MainContent from "./MainContent";
import PasswordContent from "./PasswordContent";

export function ContentHolder() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px]  rounded-lg border"
    >
      <ResizablePanel defaultSize={20} maxSize={20}>
        <SidebarContent/>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30} maxSize={40}>
<MainContent/>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
       <PasswordContent/>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
