import AboutComponent from "@/components/About";
import Process from "@/components/Process";
import WorkExperience from "@/components/WorkExperience";
import Recognition from "@/components/Recognition";
import TechnicalSkills from "@/components/TechnicalSkills";
import Education from "@/components/Education";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <AboutComponent />
            <Process />
            <WorkExperience />
            <Recognition />
            <TechnicalSkills />
            <Education />
        </main>
    );
}
