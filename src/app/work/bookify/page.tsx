import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import SidebarNav from "@/components/SidebarNav";
import ZoomableImage from "@/components/ZoomableImage";
import AlternatingFeatureGallery from "@/components/AlternatingFeatureGallery";
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern";

export const metadata = {
    title: "Bookify | Case Study",
    description: "Read more. Earn more. Together.",
};

export default function BookifyCaseStudy() {
    const project = PROJECTS.find(p => p.slug === "bookify");

    return (
        <main className="min-h-screen bg-background text-foreground pt-36 pb-32 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto">
                <Link href="/work" className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors mb-12 inline-flex items-center gap-2">
                    <span>←</span> Back to Work
                </Link>

                {/* Hero Section */}
                <header className="mb-20">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-[1.1]">
                        Bookify.
                    </h1>
                    <p className="text-2xl md:text-4xl font-light text-black/70 dark:text-white/70 max-w-4xl leading-tight">
                        Read more. Earn more. Together.
                    </p>
                </header>

                {/* Project Meta Info */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 mb-20 border-y border-black/10 dark:border-white/10 py-10 w-fit md:w-full max-w-full overflow-hidden">
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Role</h4>
                        <p className="font-medium">Researcher, Designer</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Year</h4>
                        <p className="font-medium">2020</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Type</h4>
                        <p className="font-medium">UX/UI, Mobile Application</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Context</h4>
                        <p className="font-medium">Concept Project</p>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full aspect-[16/9] md:h-[75vh] rounded-[2rem] overflow-hidden mb-32 shadow-2xl">
                    <Image
                        src="/projects/Bookify banner.png"
                        alt="Bookify App Preview"
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
                            { id: "objective", label: "Objective" },
                            { id: "goals", label: "Goals" },
                            { id: "process", label: "Process" },
                            { id: "test", label: "Test" },
                            { id: "outcomes-and-reflection", label: "Outcomes And Reflection" },
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
                                        Most reading apps lose casual readers within the first month. Not because the content is bad, but because there is nothing pulling them back.
                                    </p>
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80">
                                        Bookify's reward program changed that. Usability testing showed strong positive response to the Read Along feature, with users calling it genuinely motivating in a way existing apps had not achieved. Built from real interviews with avid and casual readers, the program introduced social reading, multi-platform point redemption, and community-driven earning, things Kindle and Google Play Books simply don't offer.
                                    </p>
                                    <p className="text-lg md:text-xl font-medium leading-relaxed text-black dark:text-white bg-white/50 dark:bg-black/50 p-4 rounded-xl backdrop-blur-sm border border-black/5 dark:border-white/5 inline-block">
                                        The result is a loyalty system that makes reading feel less like a solo habit and more like something worth showing up for.
                                    </p>
                                </GridPatternCardBody>
                            </GridPatternCard>
                        </section>

                        {/* Section: Objective */}
                        <section id="objective" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Objective</h2>
                            <div className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-16">
                                <p>
                                    Bookify had a strong content library. What it lacked was a reason for casual readers to keep coming back. This project set out to design a reward program that felt native to the reading experience, not bolted on, giving users meaningful incentives tied directly to how and how much they read.
                                </p>
                            </div>
                        </section>

                        {/* Section: Goals */}
                        <section id="goals" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Goals</h2>
                            <div className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 border-l-4 border-blue-500/50 pl-8 py-2">
                                <ul className="space-y-4 list-disc list-inside">
                                    <li>Give users a compelling reason to choose Bookify over other free reading apps</li>
                                    <li>Build lasting reading habits through structured, rewarding engagement</li>
                                    <li>Create a long-term loyalty program that deepens over time</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section: Process */}
                        <section id="process" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Process</h2>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-12 max-w-4xl">
                                The project followed a five-step framework: Observe, Define, Ideate, Design, and Validate.
                            </p>

                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
                                    <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-2">Step 1</h4>
                                    <p className="font-medium text-lg">Observe</p>
                                </div>
                                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
                                    <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-2">Step 2</h4>
                                    <p className="font-medium text-lg">Define</p>
                                </div>
                                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
                                    <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-2">Step 3</h4>
                                    <p className="font-medium text-lg">Ideate</p>
                                </div>
                                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/10 dark:border-white/10">
                                    <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-2">Step 4</h4>
                                    <p className="font-medium text-lg">Design</p>
                                </div>
                                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/10 dark:border-white/10">
                                    <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-2">Step 5</h4>
                                    <p className="font-medium text-lg">Validate</p>
                                </div>
                            </div>
                        </section>

                        {/* Section: Observe */}
                        <section id="observe" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Observe</h2>

                            <div className="space-y-16">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-tight mb-6">User Interviews</h3>
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-6 max-w-4xl">
                                        I interviewed seven co-workers and friends who are avid readers. The goal was to understand their digital reading behaviors, what motivated them to open a reading app, and what they expected from a rewards experience.
                                    </p>
                                    <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl border border-black/10 dark:border-white/10 inline-block">
                                        <p className="font-medium mb-1">User Profile</p>
                                        <p className="text-black/70 dark:text-white/70 font-light">Ages 20 to 40, tech-savvy, regularly use mobile devices, Kindles, or reading apps.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-medium tracking-tight mb-6">Key Takeaways</h3>
                                        <ul className="space-y-4 text-black/70 dark:text-white/70 font-light leading-relaxed list-none ml-0">
                                            <li><strong className="font-medium text-black dark:text-white">Why people read digitally:</strong> access to reviews before buying, convenience of always having books on hand, avoiding carrying physical books, and personal growth.</li>
                                            <li><strong className="font-medium text-black dark:text-white">When people read:</strong> commuting, during work breaks, before sleep, when bored.</li>
                                            <li><strong className="font-medium text-black dark:text-white">What they expect from rewards:</strong> flexible programs similar to shopping or travel apps, redeemable on platforms they already use.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium tracking-tight mb-6">User Challenges</h3>
                                        <ul className="space-y-4 text-black/70 dark:text-white/70 font-light leading-relaxed list-none ml-0">
                                            <li className="flex gap-3"><span className="text-red-500">•</span> Casual readers struggle to find motivation to start and continue reading</li>
                                            <li className="flex gap-3"><span className="text-red-500">•</span> Hard to pick up where they left off after a break</li>
                                            <li className="flex gap-3"><span className="text-red-500">•</span> Existing reward programs feel generic and disconnected from the reading experience itself</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Define */}
                        <section id="define" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Define</h2>

                            <div className="space-y-16">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-tight mb-6">Personas</h3>
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-6">
                                        Research surfaced two distinct reader types. <strong>Engaged Readers</strong> with clear preferences who rely on summaries and reviews before choosing a book. And <strong>Casual Readers</strong> who follow popular trends and read what others around them are reading.
                                    </p>
                                    <p className="text-lg font-medium leading-relaxed bg-black/5 dark:bg-white/5 p-6 rounded-xl border-l-4 border-black dark:border-white">
                                        I chose to focus on the Casual Reader. They represented the majority of interview participants and the highest drop-off risk, making them the most important segment to design for.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-medium tracking-tight mb-6">Hypotheses</h3>
                                    <ul className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 list-none ml-0">
                                        <li className="flex gap-4 md:items-start">
                                            <div className="bg-black/10 dark:bg-white/10 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">H1</div>
                                            <p>A social reading feature called <strong>Read Along</strong> will increase engagement among Casual Readers by letting them read with friends globally, track each other's progress, and earn points together. Seeing a friend's progress creates a pull to open the app that passive content alone cannot.</p>
                                        </li>
                                        <li className="flex gap-4 md:items-start">
                                            <div className="bg-black/10 dark:bg-white/10 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">H2</div>
                                            <p>Offering multiple ways to earn points will keep users engaged longer. Reading, quizzes, referrals, reading to visually impaired individuals, and donating physical books each tap into different motivations, making the program feel personal rather than transactional.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section: Ideate */}
                        <section id="ideate" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Ideate</h2>
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-tight mb-4">Concept Model</h3>
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80">
                                        I used concept modeling to map how the reward system would interconnect across reading behaviors, social features, and redemption pathways. Multiple iterations were made before landing on a structure that felt coherent and scalable.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium tracking-tight mb-4">Lo-Fi Wireframes</h3>
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-6">
                                        Early ideas and flows were explored through paper sketches to test structure before committing to screens.
                                    </p>
                                    <div className="relative w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 flex items-center justify-center">
                                        <ZoomableImage
                                            src="/projects/Bookify0.png"
                                            alt="Bookify Lo-Fi Wireframes"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Design */}
                        <section id="design" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Design</h2>

                            <AlternatingFeatureGallery
                                sections={[
                                    {
                                        id: "my-points",
                                        image: "/projects/Bookify1.png",
                                        content: (
                                            <div>
                                                <h3 className="text-3xl font-medium tracking-tight mb-6">My Points Screen</h3>
                                                <p className="text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-8">
                                                    A central hub showing total points earned, performance milestones, and a breakdown of earning activity.
                                                </p>
                                                <ul className="space-y-4 list-disc list-inside text-lg text-black/70 dark:text-white/70 font-light leading-relaxed ml-4">
                                                    <li><strong>Points overview card</strong> with a summary of lifetime earnings, redeemed points, and a quick link to claim rewards</li>
                                                    <li><strong>Performance tracking</strong> covering total reading time and audio summaries consumed, both tied to milestone rewards</li>
                                                    <li><strong>Earn points section</strong> covering all available earning methods</li>
                                                </ul>
                                            </div>
                                        )
                                    },
                                    {
                                        id: "ways-to-earn",
                                        image: "/projects/Bookify1.png",
                                        content: (
                                            <div>
                                                <h3 className="text-3xl font-medium tracking-tight mb-8">Ways to Earn</h3>
                                                <div className="space-y-8">
                                                    <div>
                                                        <h4 className="text-xl font-medium mb-2">Read Along</h4>
                                                        <p className="text-lg font-light text-black/70 dark:text-white/70 leading-relaxed">Invite friends to read the same book, track each other's progress in real time, leave notes at chapters, set deadlines, and earn points for staying ahead.</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xl font-medium mb-2">Play Quiz</h4>
                                                        <p className="text-lg font-light text-black/70 dark:text-white/70 leading-relaxed">Compete with friends on books you have read and earn points for winning.</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xl font-medium mb-2">Refer</h4>
                                                        <p className="text-lg font-light text-black/70 dark:text-white/70 leading-relaxed">Earn points by bringing new users to Bookify.</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xl font-medium mb-2">Read to the Visually Impaired</h4>
                                                        <p className="text-lg font-light text-black/70 dark:text-white/70 leading-relaxed">Find a nearby NGO and read aloud from Bookify. Users appear on a public leaderboard, making it a social recognition moment as much as a giving one.</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xl font-medium mb-2">Donate Physical Books</h4>
                                                        <p className="text-lg font-light text-black/70 dark:text-white/70 leading-relaxed">Find nearby NGOs to donate books and earn points in return.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    },
                                    {
                                        id: "read-along",
                                        image: "/projects/Bookify2.png",
                                        content: (
                                            <div>
                                                <h3 className="text-3xl font-medium tracking-tight mb-6">Read Along Screen</h3>
                                                <p className="text-xl font-light text-black/80 dark:text-white/80 leading-relaxed">
                                                    The flagship social feature. Users can invite friends via a shareable code, track real-time reading progress, receive nudges when a friend moves ahead, and leave notes at any chapter. A deadline feature keeps the group accountable and motivated.
                                                </p>
                                            </div>
                                        )
                                    },
                                    {
                                        id: "rewards",
                                        image: "/projects/Bookify3.png",
                                        content: (
                                            <div>
                                                <h3 className="text-3xl font-medium tracking-tight mb-6">Rewards Screen</h3>
                                                <p className="text-xl font-light text-black/80 dark:text-white/80 leading-relaxed">
                                                    Users can redeem points across books, apparel, food, and entertainment. Redemption is not locked to Bookify content, which was a key ask from research. Large offer cards with product imagery and strong copy make the experience feel closer to a shopping app than a typical loyalty screen.
                                                </p>
                                            </div>
                                        )
                                    },
                                    {
                                        id: "help",
                                        image: "/projects/Bookify5.png",
                                        content: (
                                            <div>
                                                <h3 className="text-3xl font-medium tracking-tight mb-6">Help Screen</h3>
                                                <p className="text-xl font-light text-black/80 dark:text-white/80 leading-relaxed">
                                                    A control center style overlay explaining how to earn points, the value of points, and how to claim rewards. Accessible via a persistent icon on the rewards screen.
                                                </p>
                                            </div>
                                        )
                                    },
                                    {
                                        id: "offer",
                                        image: "/projects/Bookify6.png",
                                        content: (
                                            <div>
                                                <h3 className="text-3xl font-medium tracking-tight mb-6">Offer Screen</h3>
                                                <p className="text-xl font-light text-black/80 dark:text-white/80 leading-relaxed">
                                                    Full offer detail including terms, points required, expiry, and a one-tap claim action.
                                                </p>
                                            </div>
                                        )
                                    },
                                    {
                                        id: "points-earned",
                                        image: "/projects/Bookify7.png",
                                        content: (
                                            <div>
                                                <h3 className="text-3xl font-medium tracking-tight mb-6">Points Earned Screen</h3>
                                                <p className="text-xl font-light text-black/80 dark:text-white/80 leading-relaxed">
                                                    A confirmation screen shown after earning points through any activity, reinforcing the reward loop and encouraging repeat behavior.
                                                </p>
                                            </div>
                                        )
                                    }
                                ]}
                            />
                        </section>

                        {/* Section: Test */}
                        <section id="test" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Test</h2>
                            <h3 className="text-2xl font-medium tracking-tight mb-6">Validation</h3>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-10 max-w-4xl">
                                I conducted usability testing with ten users matching the target profile. They interacted with a clickable prototype covering the Read Along feature and the points earning flow.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/20">
                                    <h4 className="font-medium text-emerald-900 dark:text-emerald-100 flex items-center gap-2 mb-4">✅ What worked well:</h4>
                                    <p className="text-emerald-800 dark:text-emerald-200/80 font-light leading-relaxed">The social dimension of Read Along resonated strongly. Users found it genuinely motivating, not gimmicky. The breadth of redemption options, especially outside of books, was called out as a key differentiator.</p>
                                </div>
                                <div className="bg-amber-50 dark:bg-amber-900/10 p-8 rounded-2xl border border-amber-100 dark:border-amber-800/20">
                                    <h4 className="font-medium text-amber-900 dark:text-amber-100 flex items-center gap-2 mb-4">🚧 What needed refinement:</h4>
                                    <p className="text-amber-800 dark:text-amber-200/80 font-light leading-relaxed">Navigation within the rewards section needed clearer signposting. Instructions on how points are earned and what they are worth needed to be more visible earlier in the experience.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section: Outcomes and Reflection */}
                        <section id="outcomes-and-reflection" className="scroll-mt-32">
                            <div className="p-12 md:p-20 bg-blue-50 dark:bg-blue-950/20 rounded-[2rem] border border-blue-100 dark:border-blue-900/50">
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 dark:text-blue-100 mb-8">Outcomes and Reflection</h2>
                                <p className="text-lg md:text-2xl font-medium leading-relaxed text-blue-800 dark:text-blue-200 mb-12">
                                    The reward program addressed the core problem: casual readers have no structural reason to return. By tying points to social behavior, personal milestones, and community contribution, Bookify created multiple return triggers that existing competitors had not explored.
                                </p>

                                <ul className="space-y-6 text-base md:text-lg font-light leading-relaxed text-blue-800 dark:text-blue-200/80 list-none ml-0">
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">1</span>
                                        <p><strong>What I would do differently:</strong> the Read Along feature deserved its own design sprint. It tested as the strongest concept but was designed in parallel with everything else. Given its impact on retention potential, it warranted deeper exploration of edge cases, notification design, and group dynamics.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">2</span>
                                        <p><strong>A future iteration</strong> should also explore how the leaderboard and community features could surface more prominently, since social proof was one of the strongest motivators uncovered in research.</p>
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
