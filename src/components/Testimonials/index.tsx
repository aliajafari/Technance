import TestimonialCard from "../TestimonialCard";

export default function Testimonials({ toRight }: { toRight?: boolean }) {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  const repeatedItems = [...items, ...items];
  return (
    <div className="overflow-hidden mb-4">
      <div
        className={`flex gap-4 w-[100vw] ${
          toRight ? "animate-marquee-to-right" : "animate-marquee-to-left"
        }`}
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}
