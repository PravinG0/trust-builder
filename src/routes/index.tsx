import { createFileRoute } from "@tanstack/react-router";
import { WhyChooseSection } from "@/components/WhyChooseSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Medical Center | Hormone Therapy & Weight Management" },
      {
        name: "description",
        content:
          "Personalized TRT, HRT, peptide, and weight loss programs with transparent all-inclusive pricing, a low price guarantee, and licensed medical supervision.",
      },
      {
        property: "og:title",
        content: "Royal Medical Center | Hormone Therapy & Weight Management",
      },
      {
        property: "og:description",
        content:
          "Transparent pricing, no hidden fees, and personalized programs guided by licensed medical supervision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <WhyChooseSection />
    </main>
  );
}
