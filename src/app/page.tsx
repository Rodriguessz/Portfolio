import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";

import { FloatingDock } from "@/components/ui/FloatingDock";

import { items } from "@/components/ui/FloatingDock/items";


export default function Home() {

  return (
      <>
        <Container>
          <Content className="grid-content h-full overflow-x-hidden md:overflow-auto"/>
          <FloatingDock desktopClassName="grid-dock" mobileClassName="fixed bottom-10 right-10" items={items}/>
        </Container>
      </>

  );
}
