import PresentationCard from "@/components/PresentationCard";



export default function Home() {
  return (
    <div className="bg-[url(/images/food-dark.jpg)] bg-cover bg-center min-h-dvh">
    <main className="flex flex-col items-center justify-center  text-center max-w-5xl mx-auto py-8">
      <PresentationCard />
    </main>
  </div>
  );
}
