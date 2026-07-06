import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Newspaper, Headphones, ShieldCheck, ArrowRight, Globe2 } from 'lucide-react';

const SG = "'Space Grotesk', sans-serif";
const MR = "'Manrope', sans-serif";

const actions = [
  {
    icon: Newspaper,
    label: 'Read Latest News',
    desc: 'Stay informed with real-time cyber security updates',
    href: '#featured',
    bg: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
    shadow: 'rgba(79,70,229,0.35)',
    badgeBg: 'rgba(255,255,255,0.15)', badgeBorder: 'rgba(255,255,255,0.2)',
  },
  {
    icon: Headphones,
    label: 'Explore Podcasts',
    desc: 'Listen to expert discussions on cyber threats',
    href: '#podcasts',
    bg: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
    shadow: 'rgba(29,78,216,0.35)',
    badgeBg: 'rgba(255,255,255,0.15)', badgeBorder: 'rgba(255,255,255,0.2)',
  },
  {
    icon: ShieldCheck,
    label: 'Learn Cyber Safety',
    desc: 'Protect yourself with practical safety knowledge',
    href: '#knowledge',
    bg: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
    shadow: 'rgba(8,145,178,0.35)',
    badgeBg: 'rgba(255,255,255,0.15)', badgeBorder: 'rgba(255,255,255,0.2)',
  },
];

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="cta"
      ref={ref}
      style={{ background: '#f0f2f8', fontFamily: 'var(--font-body)', padding: 'clamp(48px, 7vw, 46px) 24px', position: 'relative', overflow: 'hidden' }}
    >
      <div aria-hidden style={{ position: 'absolute', top: '10%', left: '20%', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '10%', right: '15%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55, type: 'spring' }}
          style={{ display: 'inline-flex', marginBottom: '28px' }}
        >
          <div style={{
            width: '64px', height: '64px', borderRadius: '18px',
            background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(79,70,229,0.3)',
          }}>
            <Globe2 size={30} color="#fff" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 'clamp(36px, 7vw, 62px)',
            fontWeight: 800, letterSpacing: '-0.04em',
            color: '#0d1117', lineHeight: 1.05,
            margin: '0 0 20px',
          }}
        >
          Stay Informed.
          <br />
          <span style={{ color: 'transparent', WebkitTextStroke: '2.5px #4338ca' }}>
            Stay Protected.
          </span>
          <br />
          Stay Ahead.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.28 }}
          style={{
            fontSize: '15px', color: '#64748b', lineHeight: 1.8,
            maxWidth: '480px', margin: '0 auto 52px',
          }}
        >
          Knowledge is your strongest defense. Empower yourself with the latest cyber intelligence and take control of your digital security.
        </motion.p>

        {/* Action cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.38 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px', marginBottom: '60px',
          }}
        >
          {actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.44 + i * 0.08 }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                padding: '24px', borderRadius: '18px',
                background: action.bg,
                boxShadow: `0 8px 32px ${action.shadow}`,
                textDecoration: 'none', transition: 'transform .2s, box-shadow .2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: action.badgeBg, border: `1px solid ${action.badgeBorder}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <action.icon size={20} color="#fff" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', fontWeight: 700, color: '#fff', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                {action.label}
              </h3>
              <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: '0 0 16px', textAlign: 'left' }}>
                {action.desc}
              </p>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: 'auto',
                fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.9)',
              }}>
                Get Started <ArrowRight size={13} />
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.62 }}
          style={{ paddingTop: '28px', borderTop: '1px solid #e2e8f0' }}
        >
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 600, color: '#64748b', margin: '0 0 5px' }}>
            Cyber News & Intelligence Center
          </p>
          <p style={{ fontSize: '11.5px', color: '#94a3b8', margin: 0 }}>
            Operated by Sadaiv Yuva Foundation in collaboration with Sadaiv Satya News
          </p>
        </motion.div>
      </div>
    </section>
  );
}