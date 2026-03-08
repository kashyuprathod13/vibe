import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import SidebarNav from "@/components/SidebarNav";
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern";

export default function MicrosoftCaseStudy() {
    const project = PROJECTS.find(p => p.slug === "microsoft") || {
        title: "Microsoft | Client",
        category: "Enterprise event platform · UX/UI · Multi-device · End-to-end",
        year: "2024",
        image: "/projects/Microsoft.svg"
    };

    return (
        <main className="min-h-screen bg-background text-foreground pt-36 pb-32 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto">
                <Link href="/work" className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors mb-12 inline-flex items-center gap-2">
                    <span>←</span> Back to Work
                </Link>

                {/* Hero Section */}
                <header className="mb-20">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-[1.1]">
                        Microsoft.
                    </h1>
                    <p className="text-2xl md:text-4xl font-light text-black/70 dark:text-white/70 max-w-4xl leading-tight">
                        Redesigning How a Global Tech Brand Runs Its Events
                    </p>
                </header>

                {/* Project Meta Info */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 mb-20 border-y border-black/10 dark:border-white/10 py-10 w-full overflow-hidden">
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Service</h4>
                        <p className="font-medium">UX/UI · Product Strategy</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Platform</h4>
                        <p className="font-medium">Multi-device · Enterprise</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Role</h4>
                        <p className="font-medium">Senior Product Designer</p>
                    </div>
                    <div className="shrink-0 font-bold text-black dark:text-white">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Status</h4>
                        <p>End-to-end Delivery</p>
                    </div>
                </div>

                {/* NDA Safe Hero Visual - High Impact Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                    <div className="bg-blue-600 dark:bg-blue-700 text-white p-12 rounded-[2rem] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
                        <h3 className="text-sm font-semibold tracking-widest uppercase opacity-70">Productivity Recovered</h3>
                        <div className="text-6xl md:text-7xl font-light tracking-tighter">$11M+</div>
                        <p className="text-blue-100/70 text-sm italic">per fiscal year</p>
                    </div>

                    <div className="bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-12 rounded-[2rem] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-black/40 dark:text-white/40">Research Scope</h3>
                        <div className="text-6xl md:text-7xl font-light tracking-tighter">3</div>
                        <p className="text-black/60 dark:text-white/60 text-sm">Distinct user types researched & mapped</p>
                    </div>

                    <div className="bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-12 rounded-[2rem] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-black/40 dark:text-white/40">Delivery</h3>
                        <div className="text-4xl lg:text-5xl font-light tracking-tight leading-[1.1]">Multi-phase Roadmap</div>
                        <p className="text-black/60 dark:text-white/60 text-sm">Strategy for long-term scalability</p>
                    </div>
                </div>

                {/* Main Content with Sticky Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-3 lg:sticky lg:top-[30vh] h-fit">
                        <SidebarNav sections={[
                            { id: "the-challenge", label: "The Challenge" },
                            { id: "our-approach", label: "Our Approach" },
                            { id: "the-outcome", label: "The Outcome" },
                        ]} />
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-9 space-y-32">

                        {/* Section: The Challenge */}
                        <section id="the-challenge" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">The Challenge</h2>
                            <GridPatternCard>
                                <GridPatternCardBody className="space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400">Disconnected Ecosystems</h3>
                                        <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80">
                                            Planners, speakers, and attendees were all working from disconnected tools. For a brand known for world-class events, the digital experience told a very different story.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-100 dark:border-red-900/30">
                                        <p className="text-lg font-medium text-red-900 dark:text-red-200">
                                            The fragmentation was costing the organization over $11M a year in lost productivity.
                                        </p>
                                    </div>
                                </GridPatternCardBody>
                            </GridPatternCard>
                        </section>

                        {/* Section: Our Approach */}
                        <section id="our-approach" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Our Approach</h2>
                            <div className="space-y-16">
                                <div className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 max-w-3xl">
                                    <p>
                                        Research across all three user types shaped personas and journey maps that grounded a shared north star. This research wasn't just observational it was fundamental to untangling a decade of legacy workflow debt.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6 bg-white dark:bg-white/5 p-8 rounded-3xl border border-black/5 dark:border-white/5">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">1</div>
                                        <h4 className="text-xl font-medium">Concept & Prototype</h4>
                                        <p className="font-light text-black/60 dark:text-white/60">Rapid iterations allowed stakeholders to "feel" the workflow before a single line of production code was written.</p>
                                    </div>
                                    <div className="space-y-6 bg-white dark:bg-white/5 p-8 rounded-3xl border border-black/5 dark:border-white/5">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">2</div>
                                        <h4 className="text-xl font-medium">Testing & Validation</h4>
                                        <p className="font-light text-black/60 dark:text-white/60">Usability testing with actual event planners ensured the design solved for real-world high-pressure scenarios.</p>
                                    </div>
                                </div>

                                <div className="p-12 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2rem] border border-black/5 dark:border-white/5">
                                    <h4 className="text-2xl font-medium tracking-tight mb-6">A Shared North Star</h4>
                                    <p className="text-lg font-light text-black/70 dark:text-white/70 leading-relaxed mb-8">
                                        The final design produced a multi-device experience built around three core pillars:
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        {["Agenda Clarity", "Personalized Content", "Frictionless Workflows"].map((pillar) => (
                                            <span key={pillar} className="px-6 py-3 bg-white dark:bg-black rounded-full text-sm font-medium border border-black/10 dark:border-white/10 shadow-sm">
                                                {pillar}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: The Outcome */}
                        <section id="the-outcome" className="scroll-mt-32">
                            <div className="p-12 md:p-20 bg-emerald-50 dark:bg-emerald-950/20 rounded-[2rem] border border-emerald-100 dark:border-emerald-900/50">
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900 dark:text-emerald-100 mb-8">The Outcome</h2>
                                <p className="text-lg md:text-2xl font-medium leading-relaxed text-emerald-800 dark:text-emerald-200 mb-12 italic">
                                    "A fragmented stakeholder group aligned fast. The work sparked a wider push to systematize the organization's digital event suite."
                                </p>

                                <ul className="space-y-6 text-base md:text-lg font-light leading-relaxed text-emerald-800 dark:text-emerald-200/80 list-none ml-0">
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">✓</span>
                                        <p><strong>Systematic Shift</strong>: Leaving behind a scalable design foundation ready for future phases.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">✓</span>
                                        <p><strong>Global Alignment</strong>: Unified the digital experience for a world-class tech giant.</p>
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
