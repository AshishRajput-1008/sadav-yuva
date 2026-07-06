import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Handshake, Newspaper, Megaphone, BarChart3,
  ShieldCheck, BookOpen, ArrowRight,
} from 'lucide-react';

const SG = "'Space Grotesk', sans-serif";
const MR = "'Manrope', sans-serif";

const collaborations = [
  {
    icon: Megaphone,
    title: 'Joint Awareness Campaigns',
    desc: 'Coordinated cyber safety awareness drives reaching millions of citizens through digital and traditional media channels across urban and rural India.',
    stat: '50M+',
    statLabel: 'Citizens Reached',
    accentBg: '#eef2ff', accentText: '#4338ca', accentBorder: '#c7d2fe',
  },
  {
    icon: BarChart3,
    title: 'Cyber Awareness Reports',
    desc: 'Quarterly threat intelligence and awareness reports published jointly, providing data-driven insights into emerging cyber threats affecting Indian citizens.',
    stat: '24',
    statLabel: 'Reports Published',
    accentBg: '#eff6ff', accentText: '#1d4ed8', accentBorder: '#bfdbfe',
  },
  {
    icon: Newspaper,
    title: 'Special Coverage',
    desc: 'In-depth investigative journalism on major cyber incidents, exposing fraud networks, and highlighting systemic vulnerabilities in digital infrastructure.',
    stat: '180+',
    statLabel: 'Stories Covered',
    accentBg: '#f0fdf4', accentText: '#15803d', accentBorder: '#bbf7d0',
  },
  // {
  //   icon: ShieldCheck,
  //   title: 'Security Insights',
  //   desc: 'Expert analysis from security researchers and industry leaders providing actionable guidance for organizations and individuals to strengthen their defenses.',
  //   stat: '95%',
  //   statLabel: 'Accuracy Rate',
  //   accentBg: '#fff1f2', accentText: '#be123c', accentBorder: '#fecdd3',
  // },
  {
    icon: BookOpen,
    title: 'Educational Publications',
    desc: 'Cyber safety handbooks, awareness guides, and training materials distributed through schools, colleges, community centers, and digital platforms nationwide.',
    stat: '12',
    statLabel: 'Publications',
    accentBg: '#fff1f2', accentText: '#be123c', accentBorder: '#fecdd3',
  },
];

export default function SadaivSatyaCollab() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="collaboration"
      ref={ref}
      style={{ background: '#fff', fontFamily: 'var(--font-body)', padding: 'clamp(48px, 7vw, 66px) 36px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background blobs */}
      <div aria-hidden style={{ position: 'absolute', top: '-120px', right: '-80px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, margin: '0 auto' }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.42 }}
          style={{ textAlign: 'center', marginBottom: '14px' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px', borderRadius: '999px',
            background: '#eef2ff', border: '1px solid #c7d2fe',
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#4338ca', fontFamily: 'var(--font-body)',
          }}>
            Media Partnership
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-ui)', fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 800, letterSpacing: '-0.03em',
            color: '#0d1117', lineHeight: 1.1, margin: '0 auto 14px',
            textAlign: 'center', maxWidth: '640px',
          }}
        >
          Powered By{' '}
          <span style={{ color: 'transparent', WebkitTextStroke: '2px #4338ca' }}>
            Sadaiv Satya
          </span>
          <br />News Partnership
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22 }}
          style={{
            textAlign: 'center', fontSize: '14.5px', color: '#64748b',
            lineHeight: 1.8, maxWidth: '580px', margin: '0 auto 44px',
          }}
        >
          Cyber security news and awareness content are supported through our media
          collaboration initiatives to help citizens stay informed about emerging cyber
          threats, security updates, and digital safety practices.
        </motion.p>

        {/* Partnership badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '52px', flexWrap: 'wrap' }}
        >
          {/* Partner A */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '14px 22px', borderRadius: '14px',
            background: '#fff', border: '1px solid #e2e8f0',
            boxShadow: '0 2px 16px rgba(0,0,0,.06)',
          }}>
            <div style={{
              width: '42px', height: '42px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Handshake size={20} color="#fff" />
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: 700, color: '#0d1117', margin: 0 }}>Sadaiv Yuva Foundation</p>
              <p style={{ fontSize: '10px', color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '2px 0 0', fontWeight: 600 }}>Knowledge Partner</p>
            </div>
          </div>

          {/* Connector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '1px', background: '#c7d2fe' }} />
            <div style={{
              width: '28px', height: '28px', borderRadius: '8px',
              background: '#eef2ff', border: '1px solid #c7d2fe',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', fontWeight: 700, color: '#4338ca',
            }}>
              ×
            </div>
            <div style={{ width: '28px', height: '1px', background: '#c7d2fe' }} />
          </div>

          {/* Partner B */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '14px 22px', borderRadius: '14px',
            background: '#fff', border: '1px solid #e2e8f0',
            boxShadow: '0 2px 16px rgba(0,0,0,.06)',
          }}>
            <div style={{
              width: '42px', height: '42px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Newspaper size={20} color="#fff" />
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: 700, color: '#0d1117', margin: 0 }}>Sadaiv Satya News</p>
              <p style={{ fontSize: '10px', color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '2px 0 0', fontWeight: 600 }}>Media Partner</p>
            </div>
          </div>
        </motion.div>

        {/* Collaboration cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '18px',
        }}>
          {collaborations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
            >
              <div style={{
                background: '#fff', borderRadius: '16px',
                border: '1px solid #e2e8f0', padding: '22px 24px',
                height: '100%', display: 'flex', flexDirection: 'column', gap: '10px',
                transition: 'box-shadow .2s',
              }}>
                {/* Top row: icon + stat */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '12px',
                    background: item.accentBg, border: `1px solid ${item.accentBorder}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <item.icon size={19} color={item.accentText} />
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '22px', fontWeight: 800, color: item.accentText, letterSpacing: '-0.03em', margin: 0, lineHeight: 1 }}>
                      {item.stat}
                    </p>
                    <p style={{ fontSize: '9.5px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', margin: '3px 0 0' }}>
                      {item.statLabel}
                    </p>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', fontWeight: 700, color: '#0d1117', letterSpacing: '-0.01em', margin: 0 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.75, margin: 0, flex: 1 }}>
                  {item.desc}
                </p>

                <button style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  fontSize: '12px', fontWeight: 600, color: item.accentText,
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', padding: 0, marginTop: '4px',
                }}>
                  Learn More <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}