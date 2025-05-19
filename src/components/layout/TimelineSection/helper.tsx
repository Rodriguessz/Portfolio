import { AnimatedCertifications } from "@/components/ui/AnimatedCertifications";
import { Timeline } from "@/components/ui/Timeline";
import { experiencePT, educationPT, certificationsPT } from "./tabsPT";
import { experienceEN, educationEN, certificationsEN } from "./tabsEN";


export const tabsPT = [
  {
    title: "Experiência",
    value: "experiencia",
    component: (
      <div>
        <Timeline data={experiencePT} />
      </div>
    ),
  },

  {
    title: "Educação",
    value: "educacao",
    component: (
      <div>
        <Timeline data={educationPT} />
      </div>
    ),
  },

  {
    title: "Certificações",
    value: "certificacoes",
    component: (
      <div className="flex justify-center">
        <AnimatedCertifications certification={certificationsPT}/>
      </div>
    ),
  },
  
  

];

export const tabsEN = [
  {
    title: "Experience",
    value: "experience",
    component: (
      <div>
        <Timeline data={experienceEN} />
      </div>
    ),
  },

  {
    title: "Education",
    value: "education",
    component: (
      <div>
        <Timeline data={educationEN} />
      </div>
    ),
  },

  {
    title: "Certfications",
    value: "certfications",
    component: (
      <div className="flex justify-center">
        <AnimatedCertifications certification={certificationsEN}/>
      </div>
    ),
  },
  
  

];