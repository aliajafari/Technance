import TestimonialCard from "../TestimonialCard";

export default function Testimonials({ toRight }: { toRight?: boolean }) {
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
