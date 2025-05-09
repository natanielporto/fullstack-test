import { LeftSection } from "../components/LeftSection";
import { RightSection } from "../components/RightSection";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full mt-8 mb-8">
      <main className="flex justify-between gap-8 w-[56rem] h-[36rem]">
        <LeftSection />
        <RightSection />
      </main>
    </div>
  );
}
