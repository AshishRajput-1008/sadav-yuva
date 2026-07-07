'use client';
import d1 from "@/Assests/images/Phising and Frauds/pexels-anete-lusina-5240543.jpg"
import d2 from "@/Assests/images/hero3/pexels-mikhail-nilov-6963098.jpg"
import d3 from "@/Assests/images/Phising and Frauds/cybernews1.jpg"
import d4 from "@/Assests/images/Phising and Frauds/uip fraud.jpg"
import d5 from "@/Assests/images/Phising and Frauds/geralt-crime-4512605_1920.jpg"
import d6 from "@/Assests/images/Phising and Frauds/pexels-markus-winkler-1430818-30885916.jpg"
import d7 from "@/Assests/images/Phising and Frauds/online-documentation-database-it-consultant-being-set-up-virtual-document-management-system_184421-2374.jpg"
  import d8 from "@/Assests/images/Phising and Frauds/banking fraud.jpg"
  import d9 from "@/Assests/images/Phising and Frauds/qrcode2.avif"
  import d10 from "@/Assests/images/Phising and Frauds/upi fraud2.jpg"
  import d11 from "@/Assests/images/Phising and Frauds/qr3.jpg"
  import d12 from "@/Assests/images/Phising and Frauds/10practice.jpg"

import Head from 'next/head';

export default function CyberPage() {
  return (
    <>
      <style jsx global>{`
        :root {
          --navy: #1a3a6b;
          --blue: #2563eb;
          --blue-light: #3b82f6;
          --blue-pale: #eff6ff;
          --blue-tint: #f0f4ff;
          --cream: #fafbff;
          --white: #ffffff;
          --alert-red: #dc2626;
          --alert-red-bg: #fef2f2;
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --text-muted: #94a3b8;
          --border: #e2e8f0;
          --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
          --shadow-md: 0 4px 16px rgba(37, 99, 235, 0.08),
            0 2px 6px rgba(0, 0, 0, 0.04);
          --shadow-lg: 0 12px 40px rgba(37, 99, 235, 0.12),
            0 4px 12px rgba(0, 0, 0, 0.06);
          --radius: 16px;
          --radius-sm: 10px;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-body), sans-serif;
          background: var(--cream);
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

    /* Fonts Application */
h1,
h2,
h3,
h4,
h5,
h6,
.brand-name,
.section-heading,
.featured-title,
.card-title,
.sidebar-card-header h3,
.newsletter-sidebar h3,
.stat-chip .num,
.mr-rank {
  font-family: var(--font-ui), sans-serif;
}

        /* ── BACKGROUND CANVAS ── */
        .bg-canvas {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(
              ellipse 80% 60% at 10% 10%,
              rgba(219, 234, 254, 0.45) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse 60% 50% at 90% 80%,
              rgba(239, 246, 255, 0.5) 0%,
              transparent 55%
            ),
            radial-gradient(
              ellipse 50% 40% at 50% 50%,
              rgba(248, 250, 255, 0.3) 0%,
              transparent 70%
            );
        }
        .bg-canvas svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.035;
        }

        /* ── NAV ── */
    
        .brand-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .brand-icon svg {
          width: 22px;
          height: 22px;
          fill: white;
        }
        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        .brand-name {
          font-weight: 700;
          font-size: 15px;
          color: var(--navy);
        }
        .brand-sub {
          font-size: 10px;
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        .nav-links a {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .nav-links a:hover {
          color: var(--blue);
          background: var(--blue-pale);
        }
        .nav-cta {
          background: var(--blue) !important;
          color: white !important;
          padding: 7px 18px !important;
          border-radius: 8px !important;
        }
        .nav-cta:hover {
          background: var(--navy) !important;
          color: white !important;
        }

        /* ── ALERT TICKER ── */
        .alert-ticker {
        
          background: linear-gradient(90deg, #fff5f5 0%, #fef2f2 100%);
          border-bottom: 1px solid #feca;
          padding: 10px 0;
          overflow: hidden;
          position: relative;
          z-index: 1;
          margin-top:13px;
        }
        .ticker-label {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: 2;
          background: var(--alert-red);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          padding: 0 16px;
          white-space: nowrap;
        }
        .ticker-label::after {
          content: '';
          position: absolute;
          right: -10px;
          top: 0;
          bottom: 0;
          width: 10px;
          background: linear-gradient(90deg, var(--alert-red), transparent);
        }
        .ticker-track {
          display: flex;
          gap: 48px;
          animation: ticker 28s linear infinite;
          padding-left: calc(100px + 24px);
          will-change: transform;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #991b1b;
          white-space: nowrap;
          cursor: pointer;
        }
        .ticker-item .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--alert-red);
          flex-shrink: 0;
        }
        .ticker-item:hover {
          color: var(--alert-red);
          text-decoration: underline;
        }

        /* ── HERO ── */
 .hero {
  position: relative;
  z-index: 1;
  padding: clamp(40px, 6vw, 70px)
           clamp(16px, 3vw, 54px)
           clamp(60px, 8vw, 80px);
  overflow: hidden;
}
        .hero::before {
          content: '';
          position: absolute;
          top: -100px;
          left: -100px;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(37, 99, 235, 0.09) 0%,
            transparent 65%
          );
          pointer-events: none;
        }
        .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .hero-eyebrow {
        margin-top:81px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--blue-pale);
          border: 1px solid #bfdbfe;
          color: var(--blue);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 17px;
        }
        .hero-eyebrow span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--blue);
        }
        .hero h1 {
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800;
          line-height: 1.12;
          color: var(--navy);
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        .hero h1 em {
          font-style: italic;
          color: var(--blue);
        }
        .hero-sub {
          font-size: 17px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 12px;
        }
        .hero-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 36px;
        }
        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--blue);
          color: white;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 28px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover {
          background: var(--navy);
          transform: translateY(-1px);
          box-shadow: var(--shadow-lg);
        }
        .btn-secondary {
          background: white;
          color: var(--navy);
          font-size: 15px;
          font-weight: 600;
          padding: 13px 28px;
          border-radius: 10px;
          border: 1.5px solid var(--border);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-secondary:hover {
          border-color: var(--blue);
          color: var(--blue);
          transform: translateY(-1px);
        }
        .btn-ghost {
          background: transparent;
          color: var(--blue);
          font-size: 15px;
          font-weight: 600;
          padding: 13px 20px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-ghost:hover {
          background: var(--blue-pale);
        }

        /* Hero illustration */
        .hero-visual {
          position: relative;
        }
        .hero-illo {
          width: 100%;
          aspect-ratio: 1.1;
          background: linear-gradient(
            135deg,
            #eff6ff 0%,
            #dbeafe 40%,
            #ede9fe 100%
          );
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(37, 99, 235, 0.12);
          box-shadow: var(--shadow-lg);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-illo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Hero stats */
        .hero-stats {
          display: flex;
          gap: 8px;
          margin-top: 36px;
        }
        .stat-chip {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          flex: 1;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .stat-chip .num {
          font-size: 22px;
          font-weight: 700;
          color: var(--navy);
          display: block;
        }
        .stat-chip .lbl {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* ── MAIN CONTENT ── */
        .page-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 60px) 80px;
          position: relative;
          z-index: 1;
        }

        /* ── FEATURED ARTICLE ── */
        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--blue);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }

        .featured-card {
          background: white;
          border-radius: 24px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          margin-bottom: 56px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .featured-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        .featured-img {
          position: relative;
          min-height: 380px;
          overflow: hidden;
          background: #1e3a5f; /* Fallback */
        }
        .featured-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          transition: transform 0.5s ease;
        }
        .featured-card:hover .featured-img img {
          transform: scale(1.03);
        }
        .featured-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          color: var(--alert-red);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 6px;
          z-index: 2;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .featured-body {
          padding: 44px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .featured-meta {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .tag {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 6px;
          background: var(--blue-pale);
          color: var(--blue);
        }
        .tag.alert {
          background: #fef2f2;
          color: var(--alert-red);
        }
        .meta-text {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 400;
        }
        .meta-sep {
          color: var(--border);
        }
        .featured-title {
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 700;
          line-height: 1.3;
          color: var(--navy);
          margin-bottom: 16px;
        }
        .featured-excerpt {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 28px;
        }
        .read-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--blue);
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: gap 0.2s;
        }
        .read-link:hover {
          gap: 12px;
        }

        /* ── SECTION HEADING ── */
        .section-heading {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .section-desc {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        /* ── MAIN GRID ── */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 40px;
          align-items: start;
        }
        .content-main {
        }
        .content-sidebar {
          position: sticky;
          top: 88px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* ── ARTICLE CARDS ── */
        .articles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }
        .article-card {
          background: white;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          overflow: hidden;
          transition: all 0.28s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
        }
        .article-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
          border-color: #bfdbfe;
        }
        .card-img {
          height: 180px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          background: #f0f0f0; /* placeholder bg */
        }
        .card-img-inner {
          width: 100%;
          height: 100%;
        }
        .card-img-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .article-card:hover .card-img-inner img {
          transform: scale(1.05);
        }
        .card-tag-overlay {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 2;
        }
        .card-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 5px;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(4px);
          color: white;
        }
        .card-body {
          padding: 20px 22px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .card-meta {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 12px;
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 400;
        }
        .card-title {
          font-size: 17px;
          font-weight: 600;
          line-height: 1.38;
          color: var(--navy);
          margin-bottom: 10px;
          transition: color 0.2s;
        }
        .article-card:hover .card-title {
          color: var(--blue);
        }
        .card-excerpt {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.65;
          flex: 1;
          margin-bottom: 16px;
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid var(--border);
        }
        .card-author {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 500;
        }
        .membership-badge {
          color: var(--blue);
          font-weight: 600;
        }
        .card-read {
          font-size: 12px;
          color: var(--blue);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ── ARTICLE PAGE PREVIEW ── */
        .article-full {
          background: white;
          border-radius: 24px;
          border: 1px solid var(--border);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          margin-bottom: 40px;
        }
        .article-header {
          background: linear-gradient(160deg, #eff6ff 0%, #dbeafe 100%);
          padding: 48px 56px 40px;
          border-bottom: 1px solid var(--border);
        }
        .article-header .tag {
          margin-bottom: 16px;
          display: inline-block;
        }
        .article-header h2 {
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 800;
          line-height: 1.2;
          color: var(--navy);
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }
        .article-meta-row {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }
        .meta-pill {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 400;
        }
        .meta-pill svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          opacity: 0.6;
        }
        .article-body {
          padding: 48px 56px;
        }
        .drop-cap p:first-of-type::first-letter {
          font-size: 72px;
          font-weight: 800;
          color: var(--blue);
          float: left;
          line-height: 0.75;
          margin: 8px 12px -4px 0;
          padding: 0 4px;
       font-family: var(--font-ui), sans-serif;
        }
        .article-body p {
          font-size: 16.5px;
          line-height: 1.9;
          color: #1e293b;
          margin-bottom: 22px;
        }
        .article-body h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--navy);
          margin: 36px 0 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid var(--blue-pale);
        }

        /* Info cards */
        .info-card {
          border-radius: var(--radius-sm);
          padding: 22px 26px;
          margin: 28px 0;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .info-card.tip {
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          border-left: 4px solid var(--blue);
          border: 1px solid #bfdbfe;
          border-left: 4px solid var(--blue);
        }
        .info-card.warning {
          background: linear-gradient(135deg, #fff7ed, #fef3c7);
          border: 1px solid #fde68a;
          border-left: 4px solid #f59e0b;
        }
        .info-card.danger {
          background: linear-gradient(135deg, #fff5f5, #fef2f2);
          border: 1px solid #feca;
          border-left: 4px solid var(--alert-red);
        }
        .info-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 18px;
        }
        .info-card.tip .info-icon {
          background: #dbeafe;
        }
        .info-card.warning .info-icon {
          background: #fef3c7;
        }
        .info-card.danger .info-icon {
          background: #fee2e2;
        }
        .info-card-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .info-card.tip .info-card-label {
          color: var(--blue);
        }
        .info-card.warning .info-card-label {
          color: #b45309;
        }
        .info-card.danger .info-card-label {
          color: var(--alert-red);
        }
        .info-card p {
          font-size: 14.5px !important;
          line-height: 1.65 !important;
          margin: 0 !important;
        }
        .info-card.tip p {
          color: #1e40af !important;
        }
        .info-card.warning p {
          color: #92400e !important;
        }
        .info-card.danger p {
          color: #991b1b !important;
        }

        /* Stats */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 32px 0;
        }
        .stat-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 20px;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .stat-card .big-num {
          font-size: 28px;
          font-weight: 800;
          color: var(--blue);
          display: block;
          margin-bottom: 6px;
      font-family: var(--font-ui), sans-serif;
        }
        .stat-card .stat-desc {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
          font-weight: 400;
        }

        /* Checklist */
        .checklist {
          background: var(--blue-tint);
          border-radius: var(--radius-sm);
          padding: 24px 28px;
          margin: 28px 0;
          border: 1px solid #bfdbfe;
        }
        .checklist h4 {
          font-size: 17px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 16px;
font-family: var(--font-ui), sans-serif;        }
        .checklist ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .checklist li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--text-primary);
          line-height: 1.5;
        }
        .check-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--blue);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .check-icon svg {
          width: 11px;
          height: 11px;
          stroke: white;
          fill: none;
          stroke-width: 2.5;
        }

        /* ── SIDEBAR ── */
        .sidebar-card {
          background: white;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .sidebar-card-header {
          padding: 42px 22px 16px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sidebar-card-header h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--navy);
        }
        .sidebar-card-body {
          padding: 8px 0;
        }

        .most-read-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px 22px;
          transition: background 0.15s;
          cursor: pointer;
          border-bottom: 1px solid var(--border);
        }
        .most-read-item:last-child {
          border-bottom: none;
        }
        .most-read-item:hover {
          background: var(--blue-tint);
        }
        .mr-rank {
          font-size: 20px;
          font-weight: 800;
          color: var(--border);
          line-height: 1;
          flex-shrink: 0;
          min-width: 24px;
          padding-top: 2px;
        }
        .most-read-item:hover .mr-rank {
          color: var(--blue);
        }
        .mr-info {
        }
        .mr-title {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.4;
          margin-bottom: 4px;
        }
        .most-read-item:hover .mr-title {
          color: var(--blue);
        }
        .mr-meta {
          font-size: 11.5px;
          color: var(--text-muted);
        }

        /* Categories */
        .cat-cloud {
          padding: 16px 22px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cat-chip {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-secondary);
          background: var(--blue-tint);
          border: 1px solid var(--border);
          padding: 5px 12px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.15s;
          text-decoration: none;
        }
        .cat-chip:hover {
          background: var(--blue);
          color: white;
          border-color: var(--blue);
        }

        /* Trending */
        .trend-cloud {
          padding: 16px 22px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .trend-tag {
          font-size: 12px;
          font-weight: 600;
          color: var(--blue);
          background: var(--blue-pale);
          border: 1px solid #bfdbfe;
          padding: 5px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s;
          text-decoration: none;
        }
        .trend-tag:hover {
          background: var(--blue);
          color: white;
        }

        /* Newsletter sidebar */
        .newsletter-sidebar {
          background: linear-gradient(160deg, var(--navy) 0%, #1e40af 100%);
          border-radius: var(--radius);
          padding: 28px 24px;
          color: white;
          box-shadow: var(--shadow-md);
        }
        .newsletter-sidebar h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .newsletter-sidebar p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .nl-input {
          width: 100%;
          padding: 11px 14px;
          border-radius: 8px;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 13.5px;
          outline: none;
          transition: border 0.2s;
          margin-bottom: 10px;
        }
        .nl-input::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }
        .nl-input:focus {
          border-color: rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.15);
        }
        .nl-btn {
          width: 100%;
          padding: 11px;
          background: white;
          color: var(--navy);
          font-weight: 700;
          font-size: 14px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nl-btn:hover {
          background: #eff6ff;
          transform: translateY(-1px);
        }

        /* ── RELATED ARTICLES ── */
        .related-section {
          margin-top: 56px;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ── NEWSLETTER FULL ── */
        .newsletter-full {
          background: linear-gradient(
            135deg,
            var(--navy) 0%,
            #1e40af 50%,
            #2563eb 100%
          );
          border-radius: 24px;
          padding: 64px 56px;
          color: white;
          text-align: center;
          margin: 56px 0;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .newsletter-full::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.05) 0%,
            transparent 65%
          );
        }
        .newsletter-full::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.04) 0%,
            transparent 65%
          );
        }
        .newsletter-full h2 {
          font-size: clamp(26px, 3vw, 36px);
          font-weight: 800;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
font-family: var(--font-ui), sans-serif;        }
        .newsletter-full > p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 560px;
          margin: 0 auto 36px;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }
        .nl-row {
          display: flex;
          gap: 12px;
          max-width: 480px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .nl-row input {
          flex: 1;
          padding: 14px 18px;
          border-radius: 10px;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.12);
          color: white;
          font-size: 15px;
          outline: none;
          transition: all 0.2s;
        }
        .nl-row input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        .nl-row input:focus {
          border-color: rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.18);
        }
        .nl-row button {
          padding: 14px 28px;
          background: white;
          color: var(--navy);
          font-weight: 700;
          font-size: 15px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .nl-row button:hover {
          background: #eff6ff;
          transform: translateY(-1px);
        }
        .nl-trust {
          margin-top: 16px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          position: relative;
          z-index: 1;
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: center;
        }
        .nl-trust::before {
          content: '🔒';
        }

        /* ── FOOTER ── */
        footer {
          background: var(--navy);
          color: rgba(255, 255, 255, 0.7);
          padding: 48px clamp(16px, 4vw, 60px) 28px;
          position: relative;
          z-index: 1;
        }
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 40px;
        }
        .footer-brand .brand-name {
          color: white;
          font-size: 17px;
        }
        .footer-brand .brand-sub {
          color: rgba(255, 255, 255, 0.45);
        }
        .footer-brand p {
          font-size: 13.5px;
          line-height: 1.7;
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.6);
        }
        .footer-col h4 {
          font-size: 14px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          letter-spacing: 0.02em;
font-family: var(--font-ui), sans-serif;        }
        .footer-col a {
          display: block;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          margin-bottom: 8px;
          transition: color 0.15s;
        }
        .footer-col a:hover {
          color: #93c5fd;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.4);
          flex-wrap: wrap;
          gap: 12px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }
          .hero-visual {
            display: none;
          }
          .content-grid {
            grid-template-columns: 1fr;
          }
          .content-sidebar {
            position: static;
          }
          .footer-top {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .featured-card {
            grid-template-columns: 1fr;
          }
          .featured-img {
            min-height: 220px;
          }
          .featured-body {
            padding: 28px 28px 32px;
          }
          .articles-grid {
            grid-template-columns: 1fr;
          }
          .related-grid {
            grid-template-columns: 1fr;
          }
          .stats-row {
            grid-template-columns: 1fr;
          }
          .nl-row {
            flex-direction: column;
          }
          .footer-top {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .article-header,
          .article-body {
            padding: 28px 24px;
          }
          .nav-links {
            display: none;
          }
        }
      `}</style>

      <main>
        {/* Background canvas */}
        <div className="bg-canvas" aria-hidden="true">
          <svg viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="1440" height="900" fill="url(#grid)" />
            <circle cx="200" cy="200" r="3" fill="#2563EB" />
            <circle cx="380" cy="120" r="2" fill="#2563EB" />
            <circle cx="600" cy="300" r="2.5" fill="#2563EB" />
            <circle cx="900" cy="150" r="2" fill="#2563EB" />
            <circle cx="1100" cy="280" r="3" fill="#2563EB" />
            <circle cx="1300" cy="80" r="2" fill="#2563EB" />
            <circle cx="150" cy="500" r="2" fill="#2563EB" />
            <circle cx="400" cy="600" r="2.5" fill="#2563EB" />
            <circle cx="700" cy="700" r="2" fill="#2563EB" />
            <circle cx="1000" cy="550" r="3" fill="#2563EB" />
            <line
              x1="200"
              y1="200"
              x2="380"
              y2="120"
              stroke="#2563EB"
              strokeWidth="0.4"
            />
            <line
              x1="380"
              y1="120"
              x2="600"
              y2="300"
              stroke="#2563EB"
              strokeWidth="0.4"
            />
            <line
              x1="600"
              y1="300"
              x2="900"
              y2="150"
              stroke="#2563EB"
              strokeWidth="0.4"
            />
            <line
              x1="900"
              y1="150"
              x2="1100"
              y2="280"
              stroke="#2563EB"
              strokeWidth="0.4"
            />
            <line
              x1="150"
              y1="500"
              x2="400"
              y2="600"
              stroke="#2563EB"
              strokeWidth="0.4"
            />
            <line
              x1="400"
              y1="600"
              x2="700"
              y2="700"
              stroke="#2563EB"
              strokeWidth="0.4"
            />
            <line
              x1="700"
              y1="700"
              x2="1000"
              y2="550"
              stroke="#2563EB"
              strokeWidth="0.4"
            />
          </svg>
        </div>

        {/* Navigation */}
        {/* <nav>
          <div className="nav-inner">
            <a href="#" className="nav-brand">
              <div className="brand-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z" />
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-name">Sadaiv Yuva Foundation</span>
                <span className="brand-sub">Cyber Awareness Centre</span>
              </div>
            </a>
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">Articles</a>
              <a href="#">Cyber Alerts</a>
              <a href="#">Categories</a>
              <a href="#">Research</a>
              <a href="#">About</a>
              <a href="#" className="nav-cta">
                Report Scam
              </a>
            </div>
          </div>
        </nav> */}

        {/* Alert Ticker */}
        <div className="alert-ticker" role="marquee" aria-label="Cyber Alerts">
          <div className="ticker-label">⚠ Cyber Alerts</div>
          <div className="ticker-track" id="ticker">
            <span className="ticker-item">
              <span className="dot"></span>New UPI Fraud Scam Targeting Bank Customers —
              Verify All Requests
            </span>
            <span className="ticker-item">
              <span className="dot"></span>Fake Aadhaar Verification Links Being Circulated on
              WhatsApp
            </span>
            <span className="ticker-item">
              <span className="dot"></span>QR Code Payment Scam Warning — Never Scan Unknown
              QR Codes
            </span>
            <span className="ticker-item">
              <span className="dot"></span>Investment Fraud Campaign via Telegram — Report
              Immediately
            </span>
            <span className="ticker-item">
              <span className="dot"></span>Banking SMS Phishing Alert — Don't Click Unverified
              OTP Links
            </span>
            <span className="ticker-item">
              <span className="dot"></span>Fake Electricity Bill Scam Reported Across MP &amp;
              UP Regions
            </span>
            {/* duplicate for seamless loop */}
            <span className="ticker-item">
              <span className="dot"></span>New UPI Fraud Scam Targeting Bank Customers —
              Verify All Requests
            </span>
            <span className="ticker-item">
              <span className="dot"></span>Fake Aadhaar Verification Links Being Circulated on
              WhatsApp
            </span>
            <span className="ticker-item">
              <span className="dot"></span>QR Code Payment Scam Warning — Never Scan Unknown
              QR Codes
            </span>
            <span className="ticker-item">
              <span className="dot"></span>Investment Fraud Campaign via Telegram — Report
              Immediately
            </span>
            <span className="ticker-item">
              <span className="dot"></span>Banking SMS Phishing Alert — Don't Click Unverified
              OTP Links
            </span>
            <span className="ticker-item">
              <span className="dot"></span>Fake Electricity Bill Scam Reported Across MP &amp;
              UP Regions
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-eyebrow pt-24 md:mt-32">
                <span></span>Sadaiv Yuva Foundation
              </div>
              <h1>
                Cyber Knowledge &amp; <em>Awareness</em> Center
              </h1>
              <p className="hero-sub">
                Trusted Cyber Security News, Scam Alerts, Digital Safety Guides,
                Research Articles, and Educational Resources.
              </p>
              <p className="hero-desc">
                Explore verified cyber awareness content published by Sadaiv Yuva
                Foundation and trusted contributors dedicated to building a safer
                digital society.
              </p>
              <div className="hero-actions">
                <a href="#articles" className="btn-primary">
                  Explore Articles
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
                <a href="#" className="btn-secondary">
                  Latest Cyber Alerts
                </a>
                <a href="#" className="btn-ghost">
                  Browse Categories →
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-chip">
                  <span className="num">2.4M+</span>
                  <span className="lbl">Citizens Reached</span>
                </div>
                <div className="stat-chip">
                  <span className="num">380+</span>
                  <span className="lbl">Articles Published</span>
                </div>
                <div className="stat-chip">
                  <span className="num">12K+</span>
                  <span className="lbl">Scams Reported</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-illo">
                {/* Genuine Hero Image */}
                <img
                  src={d2.src}
                  alt="Cyber Security Illustration"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Page Content */}
        <div className="page-content" id="articles">
          {/* Featured Article */}
          <div className="section-label">Featured Article</div>
          <div className="featured-card" role="article">
            <div className="featured-img">
              <div className="featured-badge">Featured</div>
              {/* Genuine Featured Image: QR Code Scam */}
              <img
                src={d9.src}
                alt="QR Code Scam"
              />
            </div>
            <div className="featured-body">
              <div className="featured-meta">
                <span className="tag alert">Scam Alert</span>
                <span className="meta-text">June 7, 2026</span>
                <span className="meta-sep">·</span>
                <span className="meta-text">7 min read</span>
              </div>
              <h2 className="featured-title">
                How Fake QR Code Scams Are Targeting Citizens Across India — And
                How to Stay Protected
              </h2>
              <p className="featured-excerpt">
                Fraudsters have devised a sophisticated new scheme involving
                tampered QR codes placed over legitimate payment stickers in
                shops, restaurants, and public spaces. Once scanned, victims
                unknowingly transfer money to criminal accounts. This guide
                explains the mechanics, real-world cases, and practical steps to
                protect yourself.
              </p>
              <a href="#article-preview" className="read-link">
                Read Full Article
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Main Content + Sidebar */}
          <div className="content-grid">
            <div className="content-main">
              {/* Latest Articles */}
              <div style={{ marginBottom: '32px' }}>
                <h2 className="section-heading">Latest Cyber Articles</h2>
                <p className="section-desc">
                  Verified guides, research, and awareness content curated by our
                  editorial team.
                </p>
              </div>

              <div className="articles-grid">
                {/* Card 1: Phishing */}
                <div className="article-card">
                  <div className="card-img">
                    <div className="card-img-inner">
                      <img
                        src={d6.src}
                        alt="Phishing Email"
                      />
                    </div>
                    <div className="card-tag-overlay">
                      <span className="card-tag">Phishing</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span>June 5, 2026</span>
                      <span>·</span>
                      <span>6 min read</span>
                    </div>
                    <h3 className="card-title">
                      Recognising Phishing Emails Before They Compromise Your
                      Data
                    </h3>
                    <p className="card-excerpt">
                      A practical breakdown of the tactics attackers use to craft
                      convincing fake emails — and the red flags every user
                      should know.
                    </p>
                    <div className="card-footer">
                      <span className="card-author">
                        Rajesh Kumar{' '}
                        <span className="membership-badge">(Sadaiv Member)</span>
                      </span>
                      <span className="card-read">
                        Read{' '}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 6h8M6 2l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>


                 {/* Card 6: Online Banking */}
                <div className="article-card">
                  <div className="card-img">
                    <div className="card-img-inner">
                      <img
                        src={d7.src}
                        alt="Online Banking"
                      />
                    </div>
                    <div className="card-tag-overlay">
                      <span className="card-tag">Online Banking</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span>May 22, 2026</span>
                      <span>·</span>
                      <span>10 min read</span>
                    </div>
                    <h3 className="card-title">
                      Online Banking Security: The Definitive Safety Guide for
                      2026
                    </h3>
                    <p className="card-excerpt">
                      Multi-factor authentication, secure browsing habits,
                      spotting fake banking websites, and responding if your
                      account is compromised.
                    </p>
                    <div className="card-footer">
                      <span className="card-author">
                        Vikram Patel{' '}
                        <span className="membership-badge">(Sadaiv Pro)</span>
                      </span>
                      <span className="card-read">
                        Read{' '}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 6h8M6 2l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 2: UPI Safety */}
                <div className="article-card">
                  <div className="card-img">
                    <div className="card-img-inner">
                      <img
                        src={d4.src}
                        alt="UPI Payment"
                      />
                    </div>
                    <div className="card-tag-overlay">
                      <span className="card-tag">UPI Safety</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span>June 3, 2026</span>
                      <span>·</span>
                      <span>9 min read</span>
                    </div>
                    <h3 className="card-title">
                      The Complete UPI Fraud Prevention Guide for 2026
                    </h3>
                    <p className="card-excerpt">
                      From collect requests to fake payment screenshots —
                      understand every UPI scam vector and the safeguards you
                      should activate today.
                    </p>
                    <div className="card-footer">
                      <span className="card-author">
                        Ananya Sharma{' '}
                        <span className="membership-badge">(Certified)</span>
                      </span>
                      <span className="card-read">
                        Read{' '}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 6h8M6 2l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Data Privacy */}
                <div className="article-card">
                  <div className="card-img">
                    <div className="card-img-inner">
                      <img
                        src={d3.src}
                        alt="Data Privacy"
                      />
                    </div>
                    <div className="card-tag-overlay">
                      <span className="card-tag">Data Privacy</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span>June 1, 2026</span>
                      <span>·</span>
                      <span>11 min read</span>
                    </div>
                    <h3 className="card-title">
                      Digital Privacy Essentials: Protecting Your Personal Data
                      Online
                    </h3>
                    <p className="card-excerpt">
                      What data apps actually collect, how to limit exposure,
                      and the settings that matter most for protecting your
                      privacy on popular platforms.
                    </p>
                    <div className="card-footer">
                      <span className="card-author">
                        Dr. S. Gupta{' '}
                        <span className="membership-badge">(Sadaiv Expert)</span>
                      </span>
                      <span className="card-read">
                        Read{' '}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 6h8M6 2l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 4: Social Engineering */}
                {/* <div className="article-card">
                  <div className="card-img">
                    <div className="card-img-inner">
                      <img
                        src={d5.src}
                        alt="Social Engineering"
                      />
                    </div>
                    <div className="card-tag-overlay">
                      <span className="card-tag">Cyber Fraud</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span>May 29, 2026</span>
                      <span>·</span>
                      <span>8 min read</span>
                    </div>
                    <h3 className="card-title">
                      Understanding Social Engineering Attacks on Everyday
                      Citizens
                    </h3>
                    <p className="card-excerpt">
                      How criminals exploit trust, urgency, and authority to
                      manipulate victims — and the mental models that help you
                      spot manipulation in real time.
                    </p>
                    <div className="card-footer">
                      <span className="card-author">
                        Priya Joshi{' '}
                        <span className="membership-badge">(Sadaiv Gold)</span>
                      </span>
                      <span className="card-read">
                        Read{' '}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 6h8M6 2l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div> */}

                {/* Card 5: Students */}
                {/* <div className="article-card">
                  <div className="card-img">
                    <div className="card-img-inner">
                      <img
                        src={d7.src}
                        alt="Students Cyber Safety"
                      />
                    </div>
                    <div className="card-tag-overlay">
                      <span className="card-tag">Students</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span>May 26, 2026</span>
                      <span>·</span>
                      <span>5 min read</span>
                    </div>
                    <h3 className="card-title">
                      Cyber Safety Handbook for Students: What Schools Don't
                      Teach
                    </h3>
                    <p className="card-excerpt">
                      From social media risks to online gaming scams — a
                      comprehensive guide to the digital threats students face
                      and how to navigate them safely.
                    </p>
                    <div className="card-footer">
                      <span className="card-author">
                        Sadaiv Youth Team{' '}
                        <span className="membership-badge">(Official)</span>
                      </span>
                      <span className="card-read">
                        Read{' '}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 6h8M6 2l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div> */}

               
              </div>

              {/* Article Full Preview */}
              <div id="article-preview"></div>
              <div className="section-label" style={{ marginTop: '40px' }}>
                Article Preview
              </div>
              <div className="article-full">
                <div className="article-header">
                  <span className="tag">Cyber Awareness</span>
                  <h2>
                    Understanding Social Engineering Attacks and How to Stay
                    Safe
                  </h2>
                  <div className="article-meta-row">
                    <div className="meta-pill">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z" />
                      </svg>
                      Published by Sadaiv Yuva Foundation
                    </div>
                    <div className="meta-pill">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      June 2026
                    </div>
                    <div className="meta-pill">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                      </svg>
                      8 Minute Read
                    </div>
                    <div className="meta-pill">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      Priya Joshi, <span className="membership-badge">(Sadaiv Gold Member)</span>
                    </div>
                  </div>
                </div>
                <div className="article-body drop-cap" style={{ maxWidth: '850px' }}>
                  <p>
                    Social engineering is the art of manipulating people into
                    giving up confidential information or performing actions
                    that compromise security. Unlike technical attacks that
                    exploit software vulnerabilities, social engineering exploits
                    human psychology — our natural tendency to trust, help, and
                    respond to authority.
                  </p>

                  <h3>Understanding the Threat</h3>
                  <p>
                    Criminals no longer need sophisticated hacking tools. A
                    well-crafted phone call, a convincing email, or a fake SMS is
                    often sufficient to gain access to bank accounts, personal
                    data, or corporate systems. According to the National Cyber
                    Crime Reporting Portal, over 68% of reported cyber frauds in
                    India begin with some form of social engineering.
                  </p>

                  <div className="stats-row">
                    <div className="stat-card">
                      <span className="big-num">1.3M+</span>
                      <span className="stat-desc">
                        Cyber crime complaints registered in India (2025)
                      </span>
                    </div>
                    <div className="stat-card">
                      <span className="big-num">68%</span>
                      <span className="stat-desc">
                        Frauds initiated through social engineering tactics
                      </span>
                    </div>
                    <div className="stat-card">
                      <span className="big-num">82%</span>
                      <span className="stat-desc">
                        Victims who clicked suspicious links without verification
                      </span>
                    </div>
                  </div>

                  <h3>How Criminals Operate</h3>
                  <p>
                    Attackers typically follow a predictable pattern: they
                    research their target, establish a pretext (a false identity
                    or scenario), build rapport, then exploit trust. Common
                    pretexts include posing as bank officials, government
                    representatives, technical support agents, or even relatives
                    in distress.
                  </p>

                  <div className="info-card tip">
                    <div className="info-icon">🔵</div>
                    <div>
                      <div className="info-card-label">Cyber Safety Tip</div>
                      <p>
                        Never share OTPs, PINs, passwords, or banking credentials
                        with anyone — including callers claiming to represent
                        your bank, UIDAI, or any government department. Legitimate
                        institutions never ask for these details over the phone.
                      </p>
                    </div>
                  </div>

                  <h3>Common Warning Signs</h3>
                  <p>
                    Recognising manipulation attempts is your primary defence. Be
                    alert when someone creates artificial urgency ('Your account
                    will be blocked in 2 hours'), appeals to fear ('Police will
                    arrive at your home'), offers unrealistic rewards, or requests
                    secrecy ('Do not tell your family about this call').
                  </p>

                  <div className="info-card danger">
                    <div className="info-icon">🔴</div>
                    <div>
                      <div className="info-card-label">Scam Alert</div>
                      <p>
                        Fraudsters deliberately create urgency to prevent you
                        from thinking clearly or consulting others. If a caller
                        pressures you to act immediately and discourages
                        verification, disconnect the call. No legitimate authority
                        operates this way.
                      </p>
                    </div>
                  </div>

                  <div className="info-card warning">
                    <div className="info-icon">🟡</div>
                    <div>
                      <div className="info-card-label">Important Warning</div>
                      <p>
                        Digital arrest scams — where callers impersonate CBI, ED,
                        or police officers and threaten victims with immediate
                        arrest — have surged 340% in 2025. These are always
                        fraudulent. Indian law enforcement does not conduct
                        arrests via video call.
                      </p>
                    </div>
                  </div>

                  <h3>Cyber Safety Checklist</h3>
                  <div className="checklist">
                    <h4>Your Personal Protection Protocol</h4>
                    <ul>
                      <li>
                        <div className="check-icon">
                          <svg viewBox="0 0 12 12">
                            <polyline points="2,6 5,9 10,3" />
                          </svg>
                        </div>
                        Verify caller identity independently — hang up and call
                        the institution's official number
                      </li>
                      <li>
                        <div className="check-icon">
                          <svg viewBox="0 0 12 12">
                            <polyline points="2,6 5,9 10,3" />
                          </svg>
                        </div>
                        Never share OTP, PIN, CVV, or passwords over phone, SMS,
                        or email
                      </li>
                      <li>
                        <div className="check-icon">
                          <svg viewBox="0 0 12 12">
                            <polyline points="2,6 5,9 10,3" />
                          </svg>
                        </div>
                        Enable transaction alerts and review bank statements
                        weekly
                      </li>
                      <li>
                        <div className="check-icon">
                          <svg viewBox="0 0 12 12">
                            <polyline points="2,6 5,9 10,3" />
                          </svg>
                        </div>
                        Use strong, unique passwords and enable two-factor
                        authentication
                      </li>
                      <li>
                        <div className="check-icon">
                          <svg viewBox="0 0 12 12">
                            <polyline points="2,6 5,9 10,3" />
                          </svg>
                        </div>
                        Report suspicious calls to the Cyber Crime helpline: 1930
                      </li>
                      <li>
                        <div className="check-icon">
                          <svg viewBox="0 0 12 12">
                            <polyline points="2,6 5,9 10,3" />
                          </svg>
                        </div>
                        Educate elderly family members — they are disproportionately
                        targeted
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="related-section">
                <h2 className="section-heading">Related Articles</h2>
                <p className="section-desc">
                  Continue building your cyber awareness knowledge.
                </p>
                <div className="related-grid">
                  <div className="article-card">
                    <div
                      className="card-img"
                      style={{ height: '140px' }}
                    >
                      <div className="card-img-inner">
                        <img src={d10.src} alt="UPI" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title" style={{ fontSize: '15px' }}>
                        Understanding UPI Collect Request Fraud
                      </h3>
                      <p className="card-excerpt" style={{ fontSize: '13px' }}>
                        Why accepting collect requests is dangerous and what to
                        check before approving.
                      </p>
                    </div>
                  </div>
                  <div className="article-card">
                    <div
                      className="card-img"
                      style={{ height: '140px' }}
                    >
                      <div className="card-img-inner">
                        <img src={d11.src} alt="QR" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title" style={{ fontSize: '15px' }}>
                        How QR Code Replacement Scams Work
                      </h3>
                      <p className="card-excerpt" style={{ fontSize: '13px' }}>
                        The mechanics behind tampered QR codes at shops and
                        public spaces.
                      </p>
                    </div>
                  </div>
                  <div className="article-card">
                    <div
                      className="card-img"
                      style={{ height: '140px' }}
                    >
                      <div className="card-img-inner">
                        <img src={d12.src} alt="Hygiene" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title" style={{ fontSize: '15px' }}>
                        Top 10 Digital Hygiene Practices for Everyone
                      </h3>
                      <p className="card-excerpt" style={{ fontSize: '13px' }}>
                        A concise, actionable list of habits that dramatically
                        reduce your cyber risk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="newsletter-full">
                <h2>Stay Updated with Cyber Security News</h2>
                <p>
                  Receive verified cyber alerts, awareness guides, scam prevention
                  updates, and digital safety insights directly from Sadaiv Yuva
                  Foundation — no spam, ever.
                </p>
                <div className="nl-row">
                  <input type="email" placeholder="Your email address" />
                  <button type="button">Subscribe</button>
                </div>
                <div className="nl-trust">
                  Your information is kept private. Unsubscribe any time.
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="content-sidebar">
              {/* Most Read */}
              <div className="sidebar-card">
                <div className="sidebar-card-header">
                  <h3>Most Read This Week</h3>
                </div>
                <div className="sidebar-card-body">
                  <div className="most-read-item">
                    <div className="mr-rank">1</div>
                    <div className="mr-info">
                      <div className="mr-title">
                        How To Identify Fake Police Calls and Digital Arrest
                        Scams
                      </div>
                      <div className="mr-meta">Cyber Fraud · 5 min</div>
                    </div>
                  </div>
                  <div className="most-read-item">
                    <div className="mr-rank">2</div>
                    <div className="mr-info">
                      <div className="mr-title">
                        UPI Fraud Prevention: Complete 2026 Guide
                      </div>
                      <div className="mr-meta">Online Banking · 9 min</div>
                    </div>
                  </div>
                  <div className="most-read-item">
                    <div className="mr-rank">3</div>
                    <div className="mr-info">
                      <div className="mr-title">QR Code Scam Awareness Guide</div>
                      <div className="mr-meta">Scam Alert · 6 min</div>
                    </div>
                  </div>
                  <div className="most-read-item">
                    <div className="mr-rank">4</div>
                    <div className="mr-info">
                      <div className="mr-title">
                        Cyber Safety Essentials for Students
                      </div>
                      <div className="mr-meta">Students · 7 min</div>
                    </div>
                  </div>
                  <div className="most-read-item">
                    <div className="mr-rank">5</div>
                    <div className="mr-info">
                      <div className="mr-title">
                        Protecting Senior Citizens from Online Fraud
                      </div>
                      <div className="mr-meta">Digital Literacy · 8 min</div>
                    </div>
                  </div>
                  <div className="most-read-item">
                    <div className="mr-rank">6</div>
                    <div className="mr-info">
                      <div className="mr-title">
                        Social Media Privacy Settings That Actually Matter
                      </div>
                      <div className="mr-meta">Social Media · 6 min</div>
                    </div>
                  </div>
                  <div className="most-read-item">
                    <div className="mr-rank">7</div>
                    <div className="mr-info">
                      <div className="mr-title">
                        Online Banking Security Guide
                      </div>
                      <div className="mr-meta">Online Banking · 10 min</div>
                    </div>
                  </div>
                  <div className="most-read-item">
                    <div className="mr-rank">8</div>
                    <div className="mr-info">
                      <div className="mr-title">
                        Fake Investment App Scams on Telegram
                      </div>
                      <div className="mr-meta">Cyber Fraud · 7 min</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-card">
                <div className="sidebar-card-header">
                  <h3>Categories</h3>
                </div>
                <div className="cat-cloud">
                  <a href="#" className="cat-chip">
                    Cyber Awareness
                  </a>
                  <a href="#" className="cat-chip">
                    Cyber Fraud
                  </a>
                  <a href="#" className="cat-chip">
                    Digital Privacy
                  </a>
                  <a href="#" className="cat-chip">
                    Phishing
                  </a>
                  <a href="#" className="cat-chip">
                    Online Banking
                  </a>
                  <a href="#" className="cat-chip">
                    Data Protection
                  </a>
                  <a href="#" className="cat-chip">
                    Students
                  </a>
                  <a href="#" className="cat-chip">
                    Senior Citizens
                  </a>
                  <a href="#" className="cat-chip">
                    Social Media
                  </a>
                  <a href="#" className="cat-chip">
                    Cyber Laws
                  </a>
                  <a href="#" className="cat-chip">
                    Digital Literacy
                  </a>
                  <a href="#" className="cat-chip">
                    Scam Prevention
                  </a>
                </div>
              </div>

              {/* Trending */}
              <div className="sidebar-card">
                <div className="sidebar-card-header">
                  <h3>Trending Topics</h3>
                </div>
                <div className="trend-cloud">
                  <a href="#" className="trend-tag">
                    #CyberAwareness
                  </a>
                  <a href="#" className="trend-tag">
                    #UPISecurity
                  </a>
                  <a href="#" className="trend-tag">
                    #PhishingScams
                  </a>
                  <a href="#" className="trend-tag">
                    #OnlineFraud
                  </a>
                  <a href="#" className="trend-tag">
                    #DigitalSafety
                  </a>
                  <a href="#" className="trend-tag">
                    #CyberShield
                  </a>
                  <a href="#" className="trend-tag">
                    #DataProtection
                  </a>
                  <a href="#" className="trend-tag">
                    #CyberEducation
                  </a>
                  <a href="#" className="trend-tag">
                    #CyberSecurity
                  </a>
                </div>
              </div>

              {/* Newsletter Sidebar */}
              <div className="newsletter-sidebar">
                <h3>Get Cyber Alerts in Your Inbox</h3>
                <p>
                  Weekly verified cyber alerts and digital safety guides from
                  Sadaiv Yuva Foundation.
                </p>
                <input
                  type="email"
                  className="nl-input"
                  placeholder="Your email address"
                />
                <button className="nl-btn">Subscribe Free</button>
              </div>

              {/* Author */}
              <div className="sidebar-card">
                <div style={{ padding: '22px 22px 24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'center',
                      marginBottom: '14px'
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg,var(--navy),var(--blue))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: '15px',
                          color: 'var(--navy)'
                        }}
                      >
                        Sadaiv Yuva Foundation
                      </div>
                      <div
                        style={{
                          fontSize: '11px',
                          color: 'var(--text-muted)',
                          fontWeight: 500,
                          marginTop: '2px'
                        }}
                      >
                        Cyber Research &amp; Awareness Team
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65
                    }}
                  >
                    Dedicated to promoting digital literacy, cyber awareness,
                    online safety, and responsible technology usage through
                    education, research, and community outreach.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* <footer>
          <div className="footer-inner">
            <div className="footer-top">
              <div className="footer-brand">
                <div className="brand-text">
                  <span className="brand-name">Sadaiv Yuva Foundation</span>
                  <span className="brand-sub">Cyber Awareness Centre</span>
                </div>
                <p>
                  Empowering citizens with knowledge to combat cyber threats
                  and build a secure digital future for India.
                </p>
              </div>
              <div className="footer-col">
                <h4>Quick Links</h4>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">Volunteer</a>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <a href="#">Articles</a>
                <a href="#">Research Papers</a>
                <a href="#">Scam Alerts</a>
                <a href="#">Safety Guides</a>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Disclaimer</a>
              </div>
            </div>
            <div className="footer-bottom">
              <div>© 2026 Sadaiv Yuva Foundation. All rights reserved.</div>
              <div>Designed for Cyber Safety.</div>
            </div>
          </div>
        </footer> */}
      </main>
    </>
  );
}