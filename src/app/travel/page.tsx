import TravelGrid from "@/components/TravelGrid";

export const metadata = {
    title: "Travel | Kashyap Rathod",
    description: "A visual journal of moments and architectural stories from my travels.",
};

export default function TravelPage() {
    return (
        <main className="min-h-screen bg-background pt-20">
            <TravelGrid />
        </main>
    );
}
