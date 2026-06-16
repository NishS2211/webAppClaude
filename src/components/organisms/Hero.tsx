import { LuArrowRight, LuZap } from 'react-icons/lu';
import { GradText } from '../atoms/GradText';
import { AgendaCard } from '../molecules/AgendaCard';
import { agendaItems } from '../../data/agenda';
import './Hero.css';

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-grid"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-bar"></div>
          React Native
          <span className="hero-eyebrow-icon"><LuZap size={12} /></span>
          Claude AI
        </div>
        <h1>
          AI builds fast.<br />You stay <GradText>accountable.</GradText>
        </h1>
        <p className="hero-sub">
          A no-BS workflow from real production projects — <strong>HDFleet, Decor CDI, ePropertyPlus, Dash Desktop</strong>. Less theory. More visuals. Click anything to dig in.
        </p>

        <div className="agenda">
          {agendaItems.map((item) => (
            <AgendaCard key={item.id} item={item} />
          ))}
        </div>

        <div className="hero-cta">
          <a className="hero-btn hero-btn-primary" href="#philosophy">
            Start the session
            <LuArrowRight size={14} />
          </a>
          <a className="hero-btn hero-btn-ghost" href="#closing">Skip to takeaways</a>
        </div>
      </div>
    </div>
  );
}