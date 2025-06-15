import styles from "./styles.module.css";

export default function TestimonialCard({
  classNames,
}: {
  classNames?: string;
}) {
  return (
    <div className={`${styles.testimonialCard} ${classNames ?? ""}`}>
      <div className={`${styles.testimonialCardContent} rounded-sm`}>
        <h2>Mobile Trading Done Right</h2>
        <p>
          "I've been using this platform for a few months now, and it's been a
          game-changer for my trading. The interface is easy to use, and the
          charts are clear and easy to read."
        </p>
      </div>
    </div>
  );
}
