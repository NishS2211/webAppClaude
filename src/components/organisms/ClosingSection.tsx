import { motion } from 'framer-motion';
import { GradText } from '../atoms/GradText';
import './ClosingSection.css';

const sentence =
  "AI is one of the most powerful tools in our craft. The trick isn't whether to use it — it's how to use it without losing the parts of the job that make us engineers.";

const words = sentence.split(' ');

export function ClosingSection() {
  return (
    <section className="closing" id="closing">
      <div className="closing-bg" />
      <div className="inner closing-inner">
        <div className="eyebrow closing-eyebrow">05 · The Engineer's Creed</div>
        <h2 className="closing-title">
          If you remember <GradText>one thing</GradText>,<br />let it be this.
        </h2>

        <motion.div
          className="closing-manifesto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
        >
          <div className="closing-manifesto-bar" />
          <p className="closing-manifesto-text">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="closing-word"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </p>
        </motion.div>

        <div className="closing-quote">
          AI generates <GradText>outputs.</GradText><br />Humans own <GradText>outcomes.</GradText>
          <div className="closing-quote-sub">The person who approves the change is accountable for the result.</div>
        </div>
      </div>
    </section>
  );
}