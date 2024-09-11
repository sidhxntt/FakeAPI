import { BackgroundLinesDemo } from "@/components";
import { FeaturesSectionDemo } from "@/components/main";

BackgroundLinesDemo;
export default function Home() {
  return (
    <>
      <BackgroundLinesDemo />
      <section id="usage">
        <FeaturesSectionDemo />
      </section>
    </>
  );
}
