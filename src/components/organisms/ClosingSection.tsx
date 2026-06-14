import { GradText } from '../atoms/GradText';
import './ClosingSection.css';

export function ClosingSection() {
  return (
    <section className="closing" id="closing">
      <div className="closing-bg" />
      <div className="inner closing-inner">
        <div className="eyebrow closing-eyebrow">TL;DR · Take this home</div>
        <h2 className="closing-title">
          If you remember nothing else,<br /><GradText>remember this:</GradText>
        </h2>
        <p className="closing-sub">
          AI is one of the most powerful tools in our craft. The trick isn't whether to use it — it's how to use it without losing the parts of the job that make us engineers.
        </p>
        <div className="closing-quote">
          AI generates <GradText>outputs.</GradText><br />Humans own <GradText>outcomes.</GradText>
          <div className="closing-quote-sub">The person who approves the change is accountable for the result.</div>
        </div>
      </div>
    </section>
  );
}