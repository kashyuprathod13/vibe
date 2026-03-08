import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import SidebarNav from "@/components/SidebarNav";
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern";

export default function GrangeInsuranceCaseStudy() {
    const project = PROJECTS.find(p => p.slug === "grange-insurance") || {
        title: "Grange Insurance | Client",
        category: "Insurance · Agent-facing portal · UX/UI · Mobile, Desktop & Tablet",
        year: "2022",
        image: "/projects/Grange Insurance.svg"
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
                        Grange Insurance.
                    </h1>
                    <p className="text-2xl md:text-4xl font-light text-black/70 dark:text-white/70 leading-tight">
                        Reimagining an Insurance Agent Portal From the Ground Up
                    </p>
                </header>

                {/* Project Meta Info */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 mb-20 border-y border-black/10 dark:border-white/10 py-10 w-full overflow-hidden">
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Service</h4>
                        <p className="font-medium">UX/UI · Portal Design</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Platform</h4>
                        <p className="font-medium">Insurance Agent Portal</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Role</h4>
                        <p className="font-medium">Lead Product Designer</p>
                    </div>
                    <div className="shrink-0 font-bold text-black dark:text-white">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Status</h4>
                        <p>Complete Delivery</p>
                    </div>
                </div>

                {/* Impact Metrics Section - Replicating Microsoft Style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                    <div className="bg-[#f59e0b] text-black p-12 rounded-[2rem] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
                        <h3 className="text-sm font-semibold tracking-widest uppercase opacity-70">Platforms Designed</h3>
                        <div className="text-6xl md:text-7xl font-light tracking-tighter">3</div>
                        <p className="text-black/60 text-sm italic">Mobile, Desktop & Tablet</p>
                    </div>

                    <div className="bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-12 rounded-[2rem] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-black/40 dark:text-white/40">Continuity</h3>
                        <div className="text-5xl md:text-6xl font-light tracking-tighter leading-tight">End-to-end</div>
                        <p className="text-black/60 dark:text-white/60 text-sm">Quote-to-issue seamless flow</p>
                    </div>

                    <div className="bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-12 rounded-[2rem] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-black/40 dark:text-white/40">Philosophy</h3>
                        <div className="text-4xl lg:text-5xl font-light tracking-tight leading-[1.1]">Outside-in Approach</div>
                        <p className="text-black/60 dark:text-white/60 text-sm">User-centric design methodology</p>
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
                                        <h3 className="text-xl font-medium text-amber-700 dark:text-[#f59e0b]">A Friction-Heavy Legacy System</h3>
                                        <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80">
                                            Insurance agents were navigating an outdated portal that slowed them down at every step - from searching accounts to issuing policies. The tools did not reflect how agents actually worked, and the gap between system capabilities and usability was costing time and trust.
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
                                        Starting with a current-state audit and competitive analysis, I mapped what agents needed at each stage of their workflow: quoting, coverage selection, driver details, payment, and policy issuance.
                                    </p>
                                </div>

                                <div className="p-12 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2rem] border border-black/5 dark:border-white/5">
                                    <h4 className="text-2xl font-medium tracking-tight mb-8">Iterative Design & Testing</h4>
                                    <p className="text-lg font-light text-black/70 dark:text-white/70 leading-relaxed max-w-2xl text-balance">
                                        Using design thinking and an outside-in lens, the experience was redesigned to be simple, intuitive, and easy to use across mobile, desktop, and tablet. Prototypes were built and tested iteratively, covering complex flows like multi-vehicle coverages, blanket policies, and premium modification.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section: The Outcome - Replicating Microsoft Layout */}
                        <section id="the-outcome" className="scroll-mt-32">
                            <div className="p-12 md:p-20 bg-emerald-50 dark:bg-emerald-950/20 rounded-[2rem] border border-emerald-100 dark:border-emerald-900/50">
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900 dark:text-emerald-100 mb-8">The Outcome</h2>
                                <p className="text-lg md:text-2xl font-medium leading-relaxed text-emerald-800 dark:text-emerald-200 mb-12 italic">
                                    "The redesign delivered a simplified dashboard that surfaces the right tools immediately, reducing the cognitive load agents carried every day."
                                </p>

                                <ul className="space-y-6 text-base md:text-lg font-light leading-relaxed text-emerald-800 dark:text-emerald-200/80 list-none ml-0">
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">✓</span>
                                        <p><strong>Frictionless Flows</strong>: Streamlined process flows that handle a meaningful variety of agent tasks without friction.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">✓</span>
                                        <p><strong>Clean Submissions</strong>: A cleaner submission process reducing turnaround time for policy issuance.</p>
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
