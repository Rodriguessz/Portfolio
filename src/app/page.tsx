import { AboutSection } from "@/components/layout/AboutSection";
import { ContactSection } from "@/components/layout/ContactSection";
import { Container } from "@/components/layout/Container";
import { HomeSection } from "@/components/layout/HomeSection";
import { ProjectsSection } from "@/components/layout/ProjectsSection";
import { TechSection } from "@/components/layout/TechSection";
import { TimelineSection } from "@/components/layout/TimelineSection";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { itemsPT, itemsEN} from "@/components/ui/FloatingDock/items";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLocale } from "next-intl";


export default function Home() {
  const locale = useLocale()
  let items = itemsPT
  if(locale == "en") items = itemsEN 
  
  return (
      <>
        <Container>
          <LanguageSwitcher />
          
          <HomeSection />
          <AboutSection />
          <TimelineSection />
          <TechSection />
          <ProjectsSection />
          <ContactSection />
          <FloatingDock desktopClassName="fixed bottom-2 left-1/2 -translate-x-1/2 z-999" mobileClassName="fixed bottom-3 right-3 z-999" items={items}/>
        </Container>
      </>

  );
}
