import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";

import { FloatingDock } from "@/components/ui/FloatingDock";

import { items } from "@/components/ui/FloatingDock/items";


export default function Home() {

  return (
      <>
        <Container>
          <Content className="grid-content h-full md:overflow-auto"/>
          <FloatingDock desktopClassName="grid-dock" mobileClassName="grid-dock-mobile mr-1" items={items}/>
        </Container>
      </>

  );
}
