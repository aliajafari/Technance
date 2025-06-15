import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { memo } from "react";
import type { HTMLAttributes, RefObject } from "react";

type GenerateElementType = {
  as?: keyof HTMLElementTagNameMap;
  children: string;
  className?: string;
  ref?: React.RefObject<HTMLElement | null>;
  delay?: number;
} & HTMLAttributes<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>;

const GenerateElement = memo(function GenerateElement({
  as = "div",
  children,
  className,
  ref,
  delay = 0,
  ...rest
}: GenerateElementType) {
  const Tag = as;
  const MotionTag = motion(Tag) as React.ElementType;

  const isInView = useInView(ref as RefObject<Element>, {
    once: true,
    margin: "-10% 0px 0px 0px",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.2], [-50, 0, 0]);

  return (
    <MotionTag
      ref={ref}
      style={{
        opacity,
        y,
      }}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`text-center ${className ? className : ""}`}
      {...rest}
    >
      {children.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={
            isInView
              ? { opacity: 1, filter: "blur(0)" }
              : { opacity: 0, filter: "blur(5px)" }
          }
          transition={{
            duration: 0.5,
            delay: index * 0.25 + delay,
          }}
        >
          {`${word} `}
        </motion.span>
      ))}
    </MotionTag>
  );
});

export default GenerateElement;
