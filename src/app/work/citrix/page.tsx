import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import SidebarNav from "@/components/SidebarNav";
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern";

export default function CitrixCaseStudy() {
    const project = PROJECTS.find(p => p.slug === "citrix") || {
        title: "Citrix | Client",
        category: "Enterprise & SMB web experience · Personalization · 2-phase delivery",
        year: "2023",
        image: "/projects/Citrix.svg"
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
                        Citrix.
                    </h1>
                    <p className="text-2xl md:text-4xl font-light text-black/70 dark:text-white/70 leading-tight">
                        Turning a Software Giant's Website Into a Personalized Buying Experience
                    </p>
                </header>

                {/* Project Meta Info */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 mb-20 border-y border-black/10 dark:border-white/10 py-10 w-full overflow-hidden text-sm">
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Service</h4>
                        <p className="font-medium">Web Experience · Personalization</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Audience</h4>
                        <p className="font-medium">Enterprise & SMB Buyers</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Delivery</h4>
                        <p className="font-medium">2-Phase Strategic Rollout</p>
                    </div>
                    <div className="shrink-0 font-bold text-black dark:text-white">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Project Year</h4>
                        <p>{project.year}</p>
                    </div>
                </div>

                {/* Impact Metrics Section - Replicating Microsoft Style */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-32">
                    <div className="bg-emerald-600 text-white p-12 rounded-[2rem] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-white/70">Qualified Leads</h3>
                        <div className="text-6xl md:text-7xl font-light tracking-tighter">7X</div>
                        <p className="text-white/60 text-sm italic">Post-launch growth</p>
                    </div>

                    <div className="bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-12 rounded-[2rem] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-black/40 dark:text-white/40">Session Time</h3>
                        <div className="text-6xl md:text-7xl font-light tracking-tighter">20.5m</div>
                        <p className="text-black/60 dark:text-white/60 text-sm">Peak average session time</p>
                    </div>

                    <div className="bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-12 rounded-[2rem] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-black/40 dark:text-white/40">Form Fills</h3>
                        <div className="text-6xl md:text-7xl font-light tracking-tighter">15%</div>
                        <p className="text-black/60 dark:text-white/60 text-sm">Up from 1% baseline</p>
                    </div>

                    <div className="bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-12 rounded-[2rem] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-black/40 dark:text-white/40">Inquiries</h3>
                        <div className="text-6xl md:text-7xl font-light tracking-tighter">3X</div>
                        <p className="text-black/60 dark:text-white/60 text-sm">Direct sales inquiries increase</p>
                    </div>
                </div>

                {/* Main Content with Sticky Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-3 lg:sticky lg:top-[30vh] h-fit">
                        <SidebarNav sections={[
                            { id: "the-problem", label: "The Problem" },
                            { id: "the-approach", label: "The Approach" },
                            { id: "the-outcome", label: "The Outcome" },
                        ]} />
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-9 space-y-32">

                        {/* Section: The Problem */}
                        <section id="the-problem" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">The Problem</h2>
                            <GridPatternCard>
                                <GridPatternCardBody className="space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-medium text-emerald-700 dark:text-emerald-400">A Site for Information, Not Connection</h3>
                                        <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80">
                                            The site was built to inform, not to connect. Prospects landed, scrolled, and left without finding what they needed - creating an obstacle in the sales journey rather than being a part of it.
                                        </p>
                                    </div>
                                </GridPatternCardBody>
                            </GridPatternCard>
                        </section>

                        {/* Section: The Approach */}
                        <section id="the-approach" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">The Approach</h2>
                            <div className="space-y-20">
                                <div className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 max-w-3xl">
                                    <p>
                                        Interviews with both enterprise and SMB buyers exposed exactly where the experience lost people. Personas, journey maps, and a personalization strategy were used to turn a static site into a dynamic, intent-driven conversation.
                                    </p>
                                </div>

                                <div className="p-12 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2rem] border border-black/5 dark:border-white/5">
                                    <h4 className="text-2xl font-medium tracking-tight mb-8">Phase 2 Strategy</h4>
                                    <p className="text-lg font-light text-black/70 dark:text-white/70 leading-relaxed max-w-2xl">
                                        Phase 2 extended the strategy further to SMB buyers specifically, using a rapid mobile-first prototype methodology to validate insights and ship high-impact features faster than traditional enterprise cycles.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section: The Outcome - Replicating Microsoft Layout */}
                        <section id="the-outcome" className="scroll-mt-32">
                            <div className="p-12 md:p-20 bg-emerald-50 dark:bg-emerald-950/20 rounded-[2rem] border border-emerald-100 dark:border-emerald-900/50">
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900 dark:text-emerald-100 mb-8">The Outcome</h2>
                                <p className="text-lg md:text-2xl font-medium leading-relaxed text-emerald-800 dark:text-emerald-200 mb-12 italic">
                                    "The work shifted how the organization saw its website: moving from a marketing asset to its most powerful sales tool."
                                </p>

                                <ul className="space-y-6 text-base md:text-lg font-light leading-relaxed text-emerald-800 dark:text-emerald-200/80 list-none ml-0">
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">✓</span>
                                        <p><strong>Intent-Driven Experience</strong>: Transformed the site from static pages into personalized buying conversations.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">✓</span>
                                        <p><strong>Stakeholder Shift</strong>: Repositioned the digital platform as a core driver for enterprise lead generation.</p>
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
