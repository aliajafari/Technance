import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(2_430_059);
  const target = 40000000;
  const intervalMs = 200;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const randomIncrement =
          Math.floor(Math.random() * (9000 - 4000 + 1)) + 4000;
        const next = prev + randomIncrement;

        if (next >= target) {
          clearInterval(interval);
          return target;
        }

        return next;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  const formattedCount = count.toLocaleString();
  return (
    <div className="text-3xl tracking-wide font-bold">{formattedCount}</div>
  );
}
