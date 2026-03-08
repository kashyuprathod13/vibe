import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import SidebarNav from "@/components/SidebarNav";
import ZoomableImage from "@/components/ZoomableImage";
import ZoomGallery from "@/components/ZoomGallery";
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern";

export const metadata = {
    title: "Care for You | Case Study",
    description: "Simplified healthcare appointment booking, enhanced accessibility for patients",
};

export default function CareForYouCaseStudy() {
    const project = PROJECTS.find(p => p.slug === "care-for-you");

    return (
        <main className="min-h-screen bg-background text-foreground pt-36 pb-32 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto">
                <Link href="/work" className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors mb-12 inline-flex items-center gap-2">
                    <span>←</span> Back to Work
                </Link>

                {/* Hero Section */}
                <header className="mb-20">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-[1.1]">
                        Care for You.
                    </h1>
                    <p className="text-2xl md:text-4xl font-light text-black/70 dark:text-white/70 max-w-4xl leading-tight">
                        Simplified healthcare appointment booking, enhanced accessibility for patients.
                    </p>
                </header>

                {/* Project Meta Info */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 mb-20 border-y border-black/10 dark:border-white/10 py-10 w-fit md:w-full max-w-full overflow-hidden">
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Role</h4>
                        <p className="font-medium">UX/UI Researcher & Designer</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Year</h4>
                        <p className="font-medium">2024</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Type</h4>
                        <p className="font-medium">Capstone Project | IIT Roorkee</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Category</h4>
                        <p className="font-medium">Healthcare Mobile App</p>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full aspect-[16/9] md:h-[75vh] rounded-[2rem] overflow-hidden mb-32 shadow-2xl">
                    <Image
                        src="/projects/Care for you Banner.png"
                        alt="Care for You App Preview"
                        fill
                        quality={100}
                        priority
                        className="object-cover object-top"
                    />
                </div>

                {/* Main Content with Sticky Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-3 lg:sticky lg:top-[30vh] h-fit">
                        <SidebarNav sections={[
                            { id: "why-this-matters", label: "Why This Matters" },
                            { id: "objective", label: "The objective" },
                            { id: "problem", label: "The problem" },
                            { id: "solution", label: "The solution" },
                            { id: "design-process", label: "Design Process" },
                            { id: "user-research", label: "User Research" },
                            { id: "design-architecture", label: "Design & Architecture" },
                            { id: "outcomes", label: "Outcomes & Reflections" },
                        ]} />
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-9 space-y-32">
                        {/* Section: Why This Matters */}
                        <section id="why-this-matters" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Why This Matters</h2>
                            <GridPatternCard>
                                <GridPatternCardBody className="space-y-6">
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80">
                                        Most healthcare apps streamline the booking process. They don't fix the step before it: patients not knowing what to book or who to book with.
                                    </p>
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80">
                                        Care for You solved both. Built from 15 real patient interviews, it introduced symptom-to-specialist guidance upfront, reducing the full booking flow to 6 taps and under 90 seconds. Something no existing app in the space had prioritized.
                                    </p>
                                    <p className="text-lg md:text-xl font-medium leading-relaxed text-black dark:text-white bg-white/50 dark:bg-black/50 p-4 rounded-xl backdrop-blur-sm border border-black/5 dark:border-white/5 inline-block">
                                        Less confusion. Faster care. Designed from the ground up around how patients actually think.
                                    </p>
                                </GridPatternCardBody>
                            </GridPatternCard>
                        </section>

                        {/* Section: The Objective */}
                        <section id="objective" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">The Objective</h2>
                            <div className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-16">
                                <p>
                                    Healthcare appointment booking is broken. Patients face fragmented information, long phone queues, and no single reliable place to find, compare, and book care. This project set out to solve that, designing a mobile application that makes booking a healthcare appointment as simple as ordering a cab.
                                </p>
                            </div>

                            {/* Overview & Audience inside Objective */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 p-12 md:p-20 bg-black/5 dark:bg-white/5 rounded-[2rem]">
                                <div>
                                    <h3 className="text-xl font-medium tracking-tight mb-6">Overview</h3>
                                    <p className="text-black/70 dark:text-white/70 font-light leading-relaxed">
                                        Care for You is a mobile healthcare companion that connects patients with nearby hospitals, specialists, labs, and pharmacies, all from one place. The app was designed around a single principle: the right care should take less effort to find than the wrong one. The end-to-end booking flow was refined to just 6 taps across 3 screens, reducing friction at every step.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium tracking-tight mb-6">Target Audience</h3>
                                    <p className="text-black/70 dark:text-white/70 font-light leading-relaxed mb-4">
                                        Three distinct groups shaped the design from the start:
                                    </p>
                                    <ul className="space-y-6 text-black/70 dark:text-white/70 font-light leading-relaxed list-none ml-0">
                                        <li><strong className="font-medium text-black dark:text-white">Patients</strong> - seeking routine check-ups, specialist consultations, diagnostics, or medication refills who are frustrated by the effort required to find and book care.</li>
                                        <li><strong className="font-medium text-black dark:text-white">Caregivers</strong> - managing healthcare for dependents, who need a trustworthy and easy-to-navigate tool.</li>
                                        <li><strong className="font-medium text-black dark:text-white">Healthcare Providers</strong> - looking to reach patients more efficiently and reduce administrative overhead around appointment management.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section: The Problem */}
                        <section id="problem" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">The Problem</h2>
                            <div className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 border-l-4 border-red-500/50 pl-8 py-2">
                                <p className="mb-6">
                                    In India's urban healthcare landscape, patients aren't failing because they don't want care. They're failing because the system makes it unnecessarily hard to access it. Five core pain points emerged consistently across research:
                                </p>
                                <ul className="space-y-4 list-disc list-inside">
                                    <li>Finding available appointments is time-consuming, often leading to delayed care.</li>
                                    <li>Booking requires navigating multiple channels (calls, websites, walk-ins) with no unified experience.</li>
                                    <li>Patients lack reliable information to choose the right provider or care type.</li>
                                    <li>Missed appointments and forgotten bookings are common due to no proactive reminders.</li>
                                    <li>There is no single source of truth for hospitals, labs, and pharmacies.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section: The Solution */}
                        <section id="solution" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">The Solution</h2>
                            <div className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 border-l-4 border-green-500/50 pl-8 py-2">
                                <p className="mb-6">
                                    Care for You addresses each pain point directly, not with features, but with a designed experience built on clarity, confidence, and convenience.
                                </p>
                                <ul className="space-y-4 list-disc list-inside">
                                    <li><strong>Streamlined booking</strong> to find and confirm an appointment in 6 taps, without phone calls or waiting queues.</li>
                                    <li><strong>Unified provider directory</strong> covering hospitals, labs, and pharmacies in one place, with filters for location, specialty, and availability.</li>
                                    <li><strong>Informed decision-making</strong> through rich provider profiles with ratings, specializations, insurance compatibility, and patient reviews.</li>
                                    <li><strong>Smart reminders</strong> with proactive appointment notifications to reduce no-shows.</li>
                                    <li><strong>Symptom-to-specialist guidance</strong> to help patients identify the right type of care before they book, reducing wasted appointments.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section: Design Process */}
                        <section id="design-process" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Design Process</h2>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-12 max-w-4xl">
                                The project ran over 5 weeks with a structured double-diamond approach, diverging to understand users deeply before converging on a validated, testable solution.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-black/5 dark:bg-white/5 p-8 rounded-2xl">
                                    <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-4">Phase 1: Research</h4>
                                    <p className="font-medium text-lg mb-2">Week 1</p>
                                    <p className="text-black/70 dark:text-white/70 font-light">User interviews, synthesis, persona building</p>
                                </div>
                                <div className="bg-black/5 dark:bg-white/5 p-8 rounded-2xl">
                                    <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-4">Phase 2: Define</h4>
                                    <p className="font-medium text-lg mb-2">Week 2</p>
                                    <p className="text-black/70 dark:text-white/70 font-light">Problem framing, user flows, IA</p>
                                </div>
                                <div className="bg-black/5 dark:bg-white/5 p-8 rounded-2xl">
                                    <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-4">Phase 3: Design</h4>
                                    <p className="font-medium text-lg mb-2">Weeks 3 to 4</p>
                                    <p className="text-black/70 dark:text-white/70 font-light">Wireframes, UI design, prototype</p>
                                </div>
                                <div className="bg-black/5 dark:bg-white/5 p-8 rounded-2xl border border-black/10 dark:border-white/10">
                                    <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-4">Phase 4: Iterate</h4>
                                    <p className="font-medium text-lg mb-2">Week 5</p>
                                    <p className="text-black/70 dark:text-white/70 font-light">Usability testing, refinements, final handoff</p>
                                </div>
                            </div>
                        </section>

                        {/* Section: User Research */}
                        <section id="user-research" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">User Research</h2>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-12 max-w-4xl">
                                To ground the design in real patient experience, I conducted 1:1 interviews with 15 diverse participants including patients managing chronic conditions, caregivers booking care for family members, and working professionals who had abandoned online booking out of frustration. The mix was intentional: I needed both the emotional texture of qualitative stories and patterns I could quantify to prioritize design decisions.
                            </p>

                            <h3 className="text-2xl font-medium tracking-tight mb-8">What I heard:</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                                <div className="bg-black/5 dark:bg-white/5 p-8 rounded-2xl">
                                    <p className="italic text-lg mb-6 leading-relaxed">"I don't know whether I need urgent care, emergency care, or an online visit. There are so many different options across so many websites."</p>
                                    <p className="font-medium">- Kumari, Housewife</p>
                                </div>
                                <div className="bg-black/5 dark:bg-white/5 p-8 rounded-2xl">
                                    <p className="italic text-lg mb-6 leading-relaxed">"I'm so confused when searching for an ENT. I see completely different results depending on whether I search 'sinus' or 'cold'."</p>
                                    <p className="font-medium">- Naina Sharma, Retired</p>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
                                    <p className="italic text-lg mb-6 leading-relaxed">"I don't have time to make an appointment by phone after waiting in a queue. If only I could book online."</p>
                                    <p className="font-medium text-blue-800 dark:text-blue-300">- Lata Rama, Professional</p>
                                </div>
                                <div className="bg-black/5 dark:bg-white/5 p-8 rounded-2xl">
                                    <p className="italic text-lg mb-6 leading-relaxed">"How will I know if I contacted the right kind of doctor without wasting money?"</p>
                                    <p className="font-medium">- Suman Phadke, Banker</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-medium tracking-tight mb-6">Key Research Insights:</h3>
                            <ul className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 list-none ml-0 mb-32">
                                <li className="flex flex-col md:flex-row gap-2 md:gap-12 md:items-start">
                                    <div className="flex gap-4 md:w-56 shrink-0">
                                        <span className="font-bold text-black dark:text-white">1.</span>
                                        <span className="text-black dark:text-white">Confusion before booking:</span>
                                    </div>
                                    <p>Most users didn't know which type of care they needed before they began searching, creating drop-off before they even attempted to book.</p>
                                </li>
                                <li className="flex flex-col md:flex-row gap-2 md:gap-12 md:items-start">
                                    <div className="flex gap-4 md:w-56 shrink-0">
                                        <span className="font-bold text-black dark:text-white">2.</span>
                                        <span className="text-black dark:text-white">Trust deficit:</span>
                                    </div>
                                    <p>Users were skeptical of results and needed social proof (ratings, reviews, known provider networks) to feel confident.</p>
                                </li>
                                <li className="flex flex-col md:flex-row gap-2 md:gap-12 md:items-start">
                                    <div className="flex gap-4 md:w-56 shrink-0">
                                        <span className="font-bold text-black dark:text-white">3.</span>
                                        <span className="text-black dark:text-white">Time pressure:</span>
                                    </div>
                                    <p>Working users and caregivers needed a fast, mobile-first solution. Phone-based booking was seen as a dealbreaker.</p>
                                </li>
                                <li className="flex flex-col md:flex-row gap-2 md:gap-12 md:items-start">
                                    <div className="flex gap-4 md:w-56 shrink-0">
                                        <span className="font-bold text-black dark:text-white">4.</span>
                                        <span className="text-black dark:text-white">Fragmentation fatigue:</span>
                                    </div>
                                    <p>Nearly all participants had used 3 or more sources (Google, hospital websites, referrals, phone calls) for a single booking.</p>
                                </li>
                            </ul>

                            {/* Persona & Empathy Map */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 xl:gap-12">
                                {/* User Persona */}
                                <div className="bg-black/5 dark:bg-white/5 p-8 lg:p-12 rounded-[2rem]">
                                    <h2 className="text-2xl font-semibold tracking-tight mb-8 flex items-center gap-4">
                                        <span className="bg-black dark:bg-white text-white dark:text-black w-10 h-10 flex items-center justify-center rounded-full text-base">👤</span>
                                        User Persona: Mak
                                    </h2>
                                    <div className="mb-6 pb-6 border-b border-black/10 dark:border-white/10">
                                        <p className="text-xl font-medium mb-1">IT Professional, 28, Mumbai</p>
                                        <p className="italic text-black/60 dark:text-white/60 mb-6 font-light">"I want to find the care I need without wasting time I don't have."</p>
                                        <p className="font-light leading-relaxed">
                                            Mak just moved to a new area and woke up with a severe ear infection. He needs to see a doctor today but doesn't know which clinic is nearby, whether they're accepting walk-ins, or how to book.
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-2">Goals</h4>
                                            <ul className="font-light leading-relaxed list-disc list-inside space-y-1">
                                                <li>Book without friction.</li>
                                                <li>Find a nearby, qualified doctor.</li>
                                                <li>Locate a pharmacy on the way home.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-2">Frustrations</h4>
                                            <ul className="font-light leading-relaxed list-disc list-inside space-y-1 text-sm lg:text-base">
                                                <li>No direct way to contact clinics.</li>
                                                <li>Provider information is scattered.</li>
                                                <li>Has to rely on word-of-mouth or outdated Google listings.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Empathy Map */}
                                <div className="bg-black/5 dark:bg-white/5 p-8 lg:p-12 rounded-[2rem]">
                                    <h2 className="text-2xl font-semibold tracking-tight mb-8 flex items-center gap-4">
                                        <span className="bg-black dark:bg-white text-white dark:text-black w-10 h-10 flex items-center justify-center rounded-full text-base">🧠</span>
                                        Empathy Map
                                    </h2>
                                    <p className="font-light leading-relaxed mb-8">
                                        The empathy map gave structure to the emotional arc users experience, from the moment they realize they need care to the moment they (hopefully) confirm a booking.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-white dark:bg-black p-5 rounded-xl shadow-sm border border-black/5 dark:border-white/5">
                                            <h4 className="font-medium tracking-tight mb-2 flex items-center gap-2">💭 Thinks & Feels</h4>
                                            <p className="text-xs lg:text-sm font-light leading-relaxed text-black/70 dark:text-white/70">Anxiety about choosing provider. Relief when slot is secured. Frustration at navigating unclear options.</p>
                                        </div>
                                        <div className="bg-white dark:bg-black p-5 rounded-xl shadow-sm border border-black/5 dark:border-white/5">
                                            <h4 className="font-medium tracking-tight mb-2 flex items-center gap-2">👂 Hears</h4>
                                            <p className="text-xs lg:text-sm font-light leading-relaxed text-black/70 dark:text-white/70">Busy signals, automated responses, conflicting advice from friends, long hold music on calls.</p>
                                        </div>
                                        <div className="bg-white dark:bg-black p-5 rounded-xl shadow-sm border border-black/5 dark:border-white/5">
                                            <h4 className="font-medium tracking-tight mb-2 flex items-center gap-2">👁️ Sees</h4>
                                            <p className="text-xs lg:text-sm font-light leading-relaxed text-black/70 dark:text-white/70">Overwhelming search results, long wait times, cluttered booking interfaces with no clear next step.</p>
                                        </div>
                                        <div className="bg-white dark:bg-black p-5 rounded-xl shadow-sm border border-black/5 dark:border-white/5">
                                            <h4 className="font-medium tracking-tight mb-2 flex items-center gap-2">🗣️ Says & Does</h4>
                                            <p className="text-xs lg:text-sm font-light leading-relaxed text-black/70 dark:text-white/70">Calls multiple clinics. Reads reviews obsessively. Gives up and asks family for help. Settles.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Design & Architecture */}
                        <section id="design-architecture" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Design & Architecture</h2>
                            <div className="space-y-20 text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-tight text-black dark:text-white mb-6">Information Architecture</h3>
                                    <p className="mb-6">
                                        The IA was designed around the three core tasks users needed to complete: find a provider, book an appointment, and access follow-up care (pharmacy, lab). Navigation was kept flat and task-oriented, reducing the cognitive overhead of exploring a traditional hierarchical menu system.
                                    </p>
                                    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                                        <ZoomableImage
                                            src="/projects/your-ia-diagram.png"
                                            alt="Information Architecture Diagram"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-medium tracking-tight text-black dark:text-white mb-6">User Flow</h3>
                                    <p className="mb-6">
                                        The primary booking flow was mapped end-to-end, from app entry to confirmed appointment, with decision points designed to guide rather than overwhelm. The target: 6 taps, 3 screens, zero confusion.
                                    </p>
                                    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                                        <ZoomableImage
                                            src="/projects/user flow.png"
                                            alt="User Flow Diagram"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-medium tracking-tight text-black dark:text-white mb-6">Wireframes & UI Design</h3>
                                    <p className="mb-6">
                                        Wireframes prioritized information hierarchy over visual polish, ensuring the right data (availability, distance, ratings) appeared at each decision moment without requiring users to dig for it. The UI design introduced a calm, reassuring palette and clear typographic hierarchy, reflecting the emotional context in which users access the app: often stressed, unwell, or under time pressure.
                                    </p>
                                    <div className="space-y-16 mt-12">
                                        {/* Wireframes */}
                                        <div>
                                            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-8 border-b border-black/10 dark:border-white/10 pb-4">Wireframes</h4>
                                            <ZoomGallery
                                                images={[1, 2, 3, 4, 5].map(num => ({
                                                    src: `/projects/careforyouwire${num}.png`,
                                                    alt: `Wireframe Screen ${num}`
                                                }))}
                                            />
                                        </div>

                                        {/* UI Screens */}
                                        <div>
                                            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-8 border-b border-black/10 dark:border-white/10 pb-4">High-Fidelity UI Screens</h4>
                                            <ZoomGallery
                                                images={[1, 2, 3, 4, 5].map(num => ({
                                                    src: `/projects/careforyouui${num}.png`,
                                                    alt: `UI Screen ${num}`
                                                }))}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Outcomes & Reflection */}
                        <section id="outcomes" className="scroll-mt-32">
                            <div className="p-12 md:p-20 bg-emerald-50 dark:bg-emerald-950/20 rounded-[2rem] border border-emerald-100 dark:border-emerald-900/50">
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900 dark:text-emerald-100 mb-8">Outcomes & Reflection</h2>
                                <p className="text-lg md:text-2xl font-medium leading-relaxed text-emerald-800 dark:text-emerald-200 mb-12">
                                    Usability testing revealed that participants could complete a booking in under 90 seconds, a significant improvement over the 8 to 12 minute average they reported spending across existing tools.
                                </p>

                                <h3 className="text-xl font-medium tracking-tight text-emerald-900 dark:text-emerald-100 mb-6">Key learnings to carry forward:</h3>
                                <ul className="space-y-6 text-base md:text-lg font-light leading-relaxed text-emerald-800 dark:text-emerald-200/80 list-none ml-0">
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">1</span>
                                        <p><strong>The symptom-to-specialist guidance feature</strong> tested extremely well but was added late in the process. It should have been a design anchor from the start.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">2</span>
                                        <p><strong>More caregiver testing was needed.</strong> Mak's persona dominated early decisions; Anupama's use case (managing care for a family member) surfaced nuances that were underrepresented.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">3</span>
                                        <p><strong>Integration with insurance.</strong> A future iteration should explore integration with insurance providers. The trust gap around cost was a recurring theme that wasn't fully resolved.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Footer Outro */}
                <div className="text-center py-20 border-t border-black/10 dark:border-white/10 mt-32">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-12 text-black/90 dark:text-white/90">Thank you for reading!</h2>
                    <Link
                        href="/work"
                        className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors border-b border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white pb-0.5"
                    >
                        Explore More Work →
                    </Link>
                </div>
            </div>
        </main>
    );
}
