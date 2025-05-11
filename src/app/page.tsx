import { AboutSection } from "@/components/layout/AboutSection";
import { Container } from "@/components/layout/Container";
import { HomeSection } from "@/components/layout/HomeSection";
import { TechSection } from "@/components/layout/TechSection";
import { TimelineSection } from "@/components/layout/TimelineSection";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { items } from "@/components/ui/FloatingDock/items";


export default function Home() {

  return (
      <>
        <Container>
          <HomeSection />
          <AboutSection />
          <TimelineSection />
          <TechSection />


          <FloatingDock desktopClassName="fixed bottom-2 left-1/2 -translate-x-1/2" mobileClassName="fixed bottom-3 right-3 " items={items}/>
        </Container>
      </>

  );
}
