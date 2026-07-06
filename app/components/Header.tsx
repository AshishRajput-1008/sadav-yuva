"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import logoImg from "../../Assests/images/logo.png";
import { useGoogleTranslate } from "@/utils/Usegoogletranslate";
import React from "react";


const IcoSparkle = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
  </svg>
);
/* ─── TYPES ─── */
interface DropdownItem { label: string; href: string; description?: string; }
interface NavLink { label: string; href: string; dropdown?: DropdownItem[]; }
interface SiteHeaderProps { activeHref?: string; navLinks?: NavLink[]; }

const IcoHome = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11.5L12 4l9 7.5"/>
    <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/>
  </svg>
);

/* ─── NAV DATA ─── */
const DEFAULT_NAV: NavLink[] = [
  { label: "CYBER ARTICLE", href: "/CyberArticle" },
  {
    label: "SPARKING STEP", href: "/SparkingStep",
    dropdown: [
      { label: "CURRENT SPARKING",  href: "/SparkingStep",  description: "Ongoing sparking initiatives" },
      { label: "SPARKING OVERVIEW", href: "/SparkingStep", description: "History & impact at a glance"  },
    ],
  },
  {
    label: "WORKSHOP", href: "/CyberWorkshop",
    dropdown: [
      { label: "CORPORATE",   href: "/CyberWorkshop",   description: "Tailored for organisations"     },
      { label: "SOCIAL",      href: "/CyberWorkshop/social",      description: "Community-driven sessions"      },
      { label: "INDIVIDUALS", href: "/CyberWorkshop/individuals", description: "Personal cyber-safety training" },
    ],
  },
  { label: "CYBER NEWS",     href: "/CyberNews"      },
  { label: "CYBER FRAUD",    href: "/CyberFraud"     },
  { label: "PODCASTS",      href: "/CyberPodcasts"       },
  { label: "SOCIAL WORK", href: "/SocialWork" },
];

const IcoYouth = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

/* ─── QUICK LINKS ─── */
const QUICK_LINKS = [
  { label: "INSPIRING JOURNEYS", href: "/InspringJourneys", icon: true },
  { label: "OUR PROFILE",        href: "/AboutUs"   },
  { label: "CYBER LAW",          href: "/CyberLaw"   },
  { label: "COLLABORATIONS",     href: "/Collaborator" },
];

const IcoWhatsapp = () => (
  <svg width="16" height="16" viewBox="0 0 32 32" fill="#25D366" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16.001 3C8.82 3 3 8.82 3 16.001c0 2.53.742 5.002 2.146 7.118L3 29l6.06-2.1A12.94 12.94 0 0 0 16.001 29C23.18 29 29 23.18 29 16.001 29 8.82 23.18 3 16.001 3zm0 23.667a10.87 10.87 0 0 1-5.54-1.51l-.397-.234-3.596 1.247 1.173-3.505-.258-.408a10.86 10.86 0 1 1 8.618 4.41zm5.96-8.14c-.326-.163-1.93-.953-2.228-1.062-.298-.109-.515-.163-.732.163-.217.326-.84 1.062-1.03 1.28-.19.217-.38.244-.706.082-.326-.163-1.376-.507-2.622-1.617-.97-.864-1.624-1.93-1.814-2.256-.19-.326-.02-.502.143-.665.147-.146.326-.38.489-.57.163-.19.217-.326.326-.543.109-.217.054-.408-.027-.57-.082-.163-.732-1.767-1.003-2.419-.264-.634-.532-.548-.732-.558l-.624-.01c-.217 0-.57.082-.868.408-.298.326-1.14 1.113-1.14 2.717 0 1.603 1.167 3.152 1.33 3.369.163.217 2.297 3.508 5.566 4.917.778.336 1.385.537 1.858.687.781.248 1.492.213 2.054.129.627-.094 1.93-.789 2.201-1.55.272-.76.272-1.413.19-1.55-.08-.136-.298-.217-.624-.38z" />
  </svg>
);

/* ─── 9 LANGUAGES (English default + 8 Indian) ─── */
const LANGUAGES = [
  { code: "en", label: "English"   },
  { code: "hi", label: "हिंदी"     },
  { code: "mr", label: "मराठी"     },
  { code: "gu", label: "ગુજરાતી"   },
  { code: "bn", label: "বাংলা"     },
  { code: "ta", label: "தமிழ்"     },
  { code: "te", label: "తెలుగు"    },
  { code: "kn", label: "ಕನ್ನಡ"     },
  { code: "pa", label: "ਪੰਜਾਬੀ"    },
];

/* ─── STYLES ─── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.syf-header *,
.syf-header *::before,
.syf-header *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

#google_translate_element { display: none !important; }
.goog-te-banner-frame.skiptranslate { display: none !important; }
.goog-te-gadget-icon { display: none !important; }
body { top: 0 !important; position: static !important; }
.goog-tooltip, .goog-tooltip:hover { display: none !important; }
.goog-text-highlight { background: none !important; box-shadow: none !important; }
.skiptranslate iframe { display: none !important; }

/* ── SHELL ── */
.syf-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
}

/* ── 1. TRICOLOR ── */
.syf-tricolor {
  height: 4px;
  width: 100%;
  flex-shrink: 0;
  background: linear-gradient(
    90deg,
    #FF6B00  0%,   #FF6B00  33.33%,
    #ffffff 33.33%, #ffffff 66.66%,
    #138808 66.66%, #138808 100%
  );
}

/* ── 2. UTILITY BAR ── */
.syf-utility {
  background: linear-gradient(90deg, #0a1f33 0%, #0d2740 100%);
  border-bottom: 1px solid rgba(255,107,0,0.18);
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex-shrink: 0;
  gap: 12px;
}

.syf-trust {
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
}
.syf-trust-sep {
  color: rgba(255,107,0,0.40);
  margin: 0 18px;
  font-size: 15px;
  user-select: none;
}

/* CENTER QUICK LINKS */
.syf-util-center {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  justify-content: center;
  margin-left: 51px;
}
.syf-util-center-sep {
  width: 1px;
  height: 12px;
  background: rgba(255,255,255,0.12);
  flex-shrink: 0;
  margin: 0 2px;
}
.syf-quick-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: rgba(255,255,255,0.52);
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
  transition: color 0.18s, background 0.18s;
  position: relative;
}
.syf-quick-link:hover {
  color: #FF6B00;
  background: rgba(255,107,0,0.08);
}
.syf-quick-link.ql-active {
  color: #1fa55b;
  background: transparent;
}
  
// .syf-quick-link.ql-active::after {
//   content: '';
//   position: absolute;
//   bottom: 0; left: 8px; right: 8px;
//   height: 1.5px;
//   border-radius: 2px;
//   background: #1fa55b;
// }

.syf-contact-item {
  display: inline-flex;
  margin-left: 4px;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.82);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.18s;
}
.syf-contact-item:hover { color: #FF6B00; }
.syf-contact-item svg   { flex-shrink: 0; color: #ffffff; }

.syf-util-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

/* Donate button */
@keyframes donatePulse {
  0%, 100% {
    box-shadow: 0 0 0 1px rgba(255,107,0,0.55),
                0 4px 20px rgba(255,107,0,0.40);
  }
  50% {
    box-shadow: 0 0 0 2px rgba(255,140,0,0.85),
                0 6px 30px rgba(255,107,0,0.65),
                0 0 50px rgba(255,120,0,0.20);
  }
}
@keyframes donateShimmer {
  0%   { left: -75%; }
  100% { left: 130%; }
}

.syf-btn-donate-top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 0 18px;
  height: 30px;
  background: linear-gradient(135deg, #FF7A00 0%, #FF5500 60%, #e04400 100%);
  color: #fff;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s, filter 0.2s;
  box-shadow: 0 0 0 1px rgba(255,107,0,0.55),
              0 4px 20px rgba(255,107,0,0.40),
              inset 0 1px 0 rgba(255,255,255,0.22),
              inset 0 -1px 0 rgba(0,0,0,0.15);
}
.syf-btn-donate-top:hover {
  transform: translateY(-2px);
  filter: brightness(1.12) saturate(1.1);
  animation: none;
  box-shadow: 0 0 0 2px rgba(255,150,0,0.90),
              0 8px 32px rgba(255,100,0,0.65),
              0 0 60px rgba(255,120,0,0.25),
              inset 0 1px 0 rgba(255,255,255,0.25),
              inset 0 -1px 0 rgba(0,0,0,0.15);
  color: #fff;
}
/* Shimmer sweep */
.syf-btn-donate-top::before {
  content: '';
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(255,255,255,0.22) 50%,
    transparent 100%);
  transform: skewX(-15deg);
  pointer-events: none;
  transition: left 0s;
}
.syf-btn-donate-top:hover::before {
  animation: donateShimmer 0.55s ease forwards;
}
/* Bottom depth line */
.syf-btn-donate-top::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: rgba(0,0,0,0.20);
  pointer-events: none;
}

.syf-btn-donate-top svg {
  width: 13px; height: 13px;
  stroke: #fff;
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  flex-shrink: 0;
  filter: drop-shadow(0 0 3px rgba(255,255,255,0.4));
}
/* Language switcher */
.syf-lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 700;
  color: rgba(255,255,255,0.80);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 8px;
  padding: 5px 14px;
  cursor: pointer;
  transition: all 0.18s;
}
.syf-lang-btn:hover {
  background: rgba(255,255,255,0.11);
  color: #fff;
  border-color: rgba(255,107,0,0.32);
}
.syf-lang-btn:disabled { opacity: 0.55; cursor: wait; }

/* Language dropdown — scrollable for 9 languages */
.syf-lang-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: #0e1d31;
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 10px;
  overflow-y: auto;
  max-height: 320px;
  min-width: 150px;
  box-shadow: 0 12px 36px rgba(0,0,0,0.60);
  z-index: 10000;
}
.syf-lang-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.60);
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.14s, color 0.14s;
  text-align: left;
}
.syf-lang-option:hover { background: rgba(255,107,0,0.07); color: #fff; }
.syf-lang-option.selected { color: #FF6B00; font-weight: 600; }

.syf-btn-sadaiv {
  display: inline-flex;
  align-items: center;
  gap: 0;
  color: #0f3460;
  background: #ffffff;
  border: 1px solid rgba(15,52,96,0.25);
  border-radius: 8px;
  padding: 0;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(15,52,96,0.18);
  transition: box-shadow 0.22s, transform 0.22s;
  line-height: 1;
  overflow: hidden;
}
.syf-btn-sadaiv:hover {
  box-shadow: 0 5px 20px rgba(15,52,96,0.30);
  transform: translateY(-1.5px);
  color: #0f3460;
}
.syf-sadaiv-accent {
  width: 5px;
  align-self: stretch;
  background: linear-gradient(180deg,
    #FF6B00 0% 33.33%,
    #ffffff 33.33% 66.66%,
    #138808 66.66% 100%
  );
  flex-shrink: 0;
  border-right: 1px solid rgba(15,52,96,0.10);
}
.syf-sadaiv-inner {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px 10px 12px;
}
.syf-sadaiv-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: rgba(15,52,96,0.10);
  color: #0f3460;
}
.syf-sadaiv-title {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
  white-space: nowrap;
  color: #0f3460;
}

/* ── 3. MAIN BAR ── */
.syf-main {
  background: linear-gradient(180deg, #0e1c30 0%, #081422 100%);
  border-bottom: 1px solid rgba(255,107,0,0.20);
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}
.syf-main::after {
  content: '';
  position: absolute;
  bottom: -1px; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255,107,0,0.40) 30%, rgba(255,107,0,0.40) 70%, transparent 100%);
}

/* Logo */
.syf-logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  margin-right: 10px;
}
.syf-logo-img {
  width: 138px;
  height: 170px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 4px 16px rgba(255,107,0,0.45));
  transition: filter 0.22s;
}
.syf-logo:hover .syf-logo-img {
  filter: drop-shadow(0 6px 22px rgba(255,107,0,0.60));
}


/* ── MEMBERSHIP BUTTON — OPTION A: Gold Crown ── */
.syf-btn-sadaiv-a {
  display: inline-flex;
  align-items: center;
  gap: 0;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(135deg, #2a1f08 0%, #1a1407 100%);
  box-shadow: 0 1px 0 rgba(255,255,255,0.06) inset, 0 2px 16px rgba(0,0,0,0.5), 0 0 0 1px rgba(180,140,60,0.45);
  transition: box-shadow 0.22s, transform 0.22s;
  white-space: nowrap;
}
.syf-btn-sadaiv-a:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(210,170,80,0.6), 0 0 20px rgba(180,140,40,0.15);
}
.syf-a-accent {
  width: 4px;
  align-self: stretch;
  flex-shrink: 0;
  background: linear-gradient(180deg, #c8a84b 0%, #f0d080 40%, #a07830 100%);
}
.syf-a-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 18px 11px 14px;
}
.syf-a-crown {
  font-size: 14px;
  flex-shrink: 0;
  color: #c8a84b;
}
.syf-a-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.syf-a-eyebrow {
  font-size: 7.5px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(200,168,75,0.65);
  line-height: 1;
}
.syf-a-main {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #c8a84b, #f0d080, #c8a84b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}
.syf-a-badge {
  background: linear-gradient(135deg, #c8a84b, #f0d060);
  color: #1a1000;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.8px;
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
}

/* ── MEMBERSHIP BUTTON — OPTION B: Midnight Sapphire ── */
.syf-btn-sadaiv-b {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 6px 7px;
  background: linear-gradient(135deg, #0a1628 0%, #0d1e36 50%, #0a1628 100%);
  box-shadow: 0 0 0 1px rgba(100,160,255,0.22), 0 2px 20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(100,160,255,0.08);
  transition: all 0.22s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}
.syf-btn-sadaiv-b::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(100,180,255,0.4) 50%, transparent 100%);
}
.syf-btn-sadaiv-b:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 0 1px rgba(100,180,255,0.40), 0 6px 28px rgba(0,0,0,0.6), inset 0 1px 0 rgba(100,180,255,0.12), 0 0 20px rgba(30,100,200,0.12);
}
.syf-b-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(100,160,255,0.10);
  border: 1px solid rgba(100,160,255,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.syf-b-icon svg {
  width: 12px;
  height: 12px;
  stroke: #6aaeff;
  stroke-width: 1.8;
  fill: none;
  stroke-linecap: round;
}
.syf-b-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.syf-b-eyebrow {
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(100,160,255,0.55);
  line-height: 1;
}
.syf-b-main {
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.92);
  line-height: 1;
}
.syf-b-arrow {
  color: rgba(100,160,255,0.5);
  font-size: 18px;
  line-height: 1;
  margin-left: 2px;
  transition: transform 0.22s, color 0.22s;
  flex-shrink: 0;
}
.syf-btn-sadaiv-b:hover .syf-b-arrow {
  transform: translateX(2px);
  color: rgba(100,160,255,0.85);
}

/* ── MEMBERSHIP BUTTON — OPTION C: India Prestige ── */
.syf-btn-sadaiv-c {
  display: inline-flex;
  align-items: center;
  gap: 0;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  background: #0a1525;
  box-shadow: 0 0 0 1px rgba(255,107,0,0.30), 0 2px 20px rgba(0,0,0,0.55);
  transition: all 0.22s;
  position: relative;
  white-space: nowrap;
}
.syf-btn-sadaiv-c::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(255,107,0,0.04) 0%, transparent 60%);
  pointer-events: none;
}
.syf-btn-sadaiv-c:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 0 1px rgba(255,107,0,0.55), 0 6px 28px rgba(0,0,0,0.65), 0 0 22px rgba(255,107,0,0.08);
}
.syf-c-bar {
  width: 5px;
  align-self: stretch;
  flex-shrink: 0;
  background: linear-gradient(180deg, #FF6B00 0% 33.33%, #ffffff 33.33% 66.66%, #138808 66.66% 100%);
}
.syf-c-inner {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 5px 1px 4px 8px;
}
.syf-c-emblem {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(255,107,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,107,0,0.06);
  flex-shrink: 0;
}
.syf-c-emblem svg {
  width: 14px;
  height: 14px;
  stroke: #FF6B00;
  stroke-width: 1.8;
  fill: none;
  stroke-linecap: round;
}
.syf-c-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.syf-c-eyebrow {
  font-size: 7.5px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,107,0,0.55);
  line-height: 1;
}
.syf-c-main {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.92);
  line-height: 1;
}
.syf-c-tag {
  background: rgba(255,107,0,0.12);
  border: 1px solid rgba(255,107,0,0.22);
  color: #FF8C40;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
}
.syf-c-chevron-wrap {
  display: flex;
  align-items: center;
  padding: 0 12px 0 6px;
}
.syf-c-chevron {
  color: rgba(255,107,0,0.35);
  font-size: 18px;
  line-height: 1;
  transition: transform 0.22s, color 0.22s;
}
.syf-btn-sadaiv-c:hover .syf-c-chevron {
  transform: translateX(2px);
  color: rgba(255,107,0,0.70);
}


/* ── MEMBERSHIP BUTTON — ELITE CYBER MEMBER ── */
@keyframes shimmerSlide {
  0%   { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(300%) skewX(-15deg); }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 0 1px rgba(255,107,0,0.40), 0 4px 20px rgba(255,107,0,0.22), 0 0 32px rgba(255,107,0,0.06); }
  50%       { box-shadow: 0 0 0 1px rgba(255,150,50,0.65), 0 4px 28px rgba(255,107,0,0.42), 0 0 48px rgba(255,107,0,0.12); }
}

.syf-btn-elite {
  display: inline-flex;
  align-items: stretch;
  gap: 0;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 11px;
  overflow: hidden;
  background: linear-gradient(135deg, #0c1a2e 0%, #101f35 50%, #0c1828 100%);
  animation: pulseGlow 3s ease-in-out infinite;
  transition: transform 0.22s, filter 0.22s;
  position: relative;
  white-space: nowrap;
  flex-shrink: 0;
}
.syf-btn-elite:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
  animation: none;
  box-shadow: 0 0 0 1px rgba(255,160,60,0.75), 0 8px 36px rgba(255,107,0,0.45), 0 0 60px rgba(255,107,0,0.15);
}

/* Shimmer sweep on hover */
.syf-btn-elite::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
  transform: translateX(-100%) skewX(-15deg);
  pointer-events: none;
}
.syf-btn-elite:hover::after {
  animation: shimmerSlide 0.65s ease forwards;
}

/* Left tricolor accent bar */
.syf-elite-bar {
  width: 4px;
  align-self: stretch;
  flex-shrink: 0;
  background: linear-gradient(180deg, #FF6B00 0% 33.33%, #ffffff 33.33% 66.66%, #138808 66.66% 100%);
}

/* Shield icon area */
.syf-elite-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px 0 12px;
  background: rgba(255,107,0,0.07);
  border-right: 1px solid rgba(255,107,0,0.12);
  flex-shrink: 0;
  position: relative;
}
.syf-elite-icon-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(255,107,0,0.14) 0%, transparent 70%);
  pointer-events: none;
}
.syf-elite-icon svg {
  width: 18px; height: 18px;
  stroke: #FF8C40;
  stroke-width: 1.8;
  fill: rgba(255,107,0,0.10);
  stroke-linecap: round;
  filter: drop-shadow(0 0 5px rgba(255,107,0,0.55));
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

/* Text content */
.syf-elite-body {
  align-items: center;
  justify-content: center;
  padding: 5px 14px 6px 12px;
  margin-top: -2px;
}
.syf-elite-eyebrow {
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  color: rgba(255,107,0,0.60);
  line-height: 1;
}
.syf-elite-title {
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.95);
  line-height: 1;
  background: linear-gradient(90deg, #ffffff 0%, #ffd0a0 60%, #FF8C40 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Right arrow/badge area */
.syf-elite-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 13px 0 2px;
  gap: 0;
  flex-shrink: 0;
}
.syf-elite-badge {
  background: linear-gradient(135deg, #FF6B00 0%, #e05500 100%);
  color: #fff;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 9px;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(255,107,0,0.45);
  transition: box-shadow 0.22s;
}
.syf-btn-elite:hover .syf-elite-badge {
  box-shadow: 0 3px 14px rgba(255,107,0,0.70);
}



/* ── BRAND WORDMARK ── */
.syf-brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  flex-shrink: 0;
  white-space: nowrap;
  text-decoration: none;
  margin-right: 12px;
  margin-left: 2px;
  width: 270px;
}
.syf-brand-name {
  font-size: 16.5px;
  font-weight: 800;
  letter-spacing: 1.8px;
  color: #ffffff;
  line-height: 1.1;
  display: block;
  width: 100%;
  text-align: justify;
  text-align-last: justify;
  -moz-text-align-last: justify;
}
.syf-brand-tagline {
  display: block;
  width: 100%;
  line-height: 1;
}
.syf-brand-tagline-text {
  display: block;
  width: 100%;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.55px;
  color: rgba(255,255,255,0.75);
  text-transform: uppercase;
  text-align: justify;
  text-align-last: justify;
  -moz-text-align-last: justify;
}

/* Divider */
.syf-vdiv {
  width: 1px;
  height: 30px;
  background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent 100%);
  flex-shrink: 0;
  margin: 0 8px 0 7px;
}

/* ── DESKTOP NAV ── */
.syf-nav {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0;
  overflow: visible;
  min-width: 0;
}

.syf-nav-item {
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

/* Vertical divider between nav items */
.syf-nav-item + .syf-nav-item::before {
  content: '';
  display: block;
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  margin-right:5px
}

.syf-nav-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13.5px;
  font-weight: 700;
  color: rgba(255,255,255,0.88);
  padding: 8px 10px;
  border-radius: 6px;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  transition: color 0.18s, background 0.18s;
  position: relative;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 4px rgba(0,0,0,0.4);
}
.syf-nav-link:hover {
  color: #fff;
  background: rgba(255,255,255,0.09);
}
.syf-nav-link.active {
  color: #FF6B00;
  background: rgba(255,107,0,0.12);
  font-weight: 800;
}
.syf-nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 6px; right: 6px;
  height: 2px;
  border-radius: 2px 2px 0 0;
  background: #FF6B00;
}
.syf-chev {
  width: 10px; height: 10px;
  opacity: 0.45;
  transition: transform 0.2s;
  flex-shrink: 0;
}
.syf-nav-item:hover .syf-chev { transform: rotate(180deg); opacity: 0.8; }

/* Dropdown */
.syf-dropdown {
  display: none;
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: #0d1c30;
  border: 1px solid rgba(255,107,0,0.18);
  border-radius: 14px;
  overflow: hidden;
  min-width: 220px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.65);
  z-index: 10000;
  padding-top: 4px;
}
.syf-nav-item:hover .syf-dropdown { display: block; animation: ddFade 0.16s ease; }
@keyframes ddFade {
  from { opacity:0; transform: translateX(-50%) translateY(-6px); }
  to   { opacity:1; transform: translateX(-50%) translateY(0); }
}
.syf-dd-header {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: rgba(255,107,0,0.55);
  padding: 8px 16px 4px;
}
.syf-dd-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 16px;
  border-top: 1px solid rgba(255,255,255,0.04);
  text-decoration: none;
  transition: background 0.14s;
}
.syf-dd-item:hover { background: rgba(255,107,0,0.06); }
.syf-dd-label {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  transition: color 0.14s;
}
.syf-dd-item:hover .syf-dd-label { color: #FF6B00; }
.syf-dd-desc {
  font-size: 11px;
  color: rgba(255,255,255,0.35);
  line-height: 1.4;
}

/* ── HAMBURGER ── */
.syf-hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  border-radius: 9px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.78);
  cursor: pointer;
  transition: all 0.18s;
  flex-shrink: 0;
}
.syf-hamburger:hover {
  background: rgba(255,107,0,0.12);
  border-color: rgba(255,107,0,0.28);
  color: #FF6B00;
}

/* ── MOBILE UTILITY BAR ── */
.syf-mobile-utility {
  display: none;
  background: #060d18;
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,107,0,0.22);
  flex-direction: column;
  flex-shrink: 0;
}

.syf-mob-actions-row {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 14px;
}

/* Elite premium membership chip — mobile (text-only, no icon, no accent bar) */
.syf-mob-btn-elite {
  flex: 1.15;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 9px;
  overflow: hidden;
  padding: 10px 0;
  background: linear-gradient(135deg, #0c1a2e 0%, #101f35 50%, #0c1828 100%);
  box-shadow: 0 0 0 1px rgba(255,107,0,0.45),
              0 3px 14px rgba(255,107,0,0.28),
              inset 0 1px 0 rgba(255,255,255,0.05);
  transition: transform 0.16s, box-shadow 0.16s;
  position: relative;
  white-space: nowrap;
}
.syf-mob-btn-elite:active { transform: scale(0.97); }
.syf-mob-elite-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  flex: 1;
  min-width: 0;
}
.syf-mob-elite-title {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: linear-gradient(90deg, #ffffff 0%, #ffd0a0 60%, #FF8C40 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.syf-mob-btn-donate {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, #FF7A00 0%, #FF5500 60%, #e04400 100%);
  border: none;
  border-radius: 9px;
  padding: 10px 8px;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 0 0 1px rgba(255,107,0,0.5), 0 3px 14px rgba(255,85,0,0.45);
  transition: box-shadow 0.18s, transform 0.16s;
  letter-spacing: 0.3px;
}
.syf-mob-btn-donate:active { transform: scale(0.97); }
.syf-mob-btn-donate:hover {
  box-shadow: 0 0 0 1px rgba(255,107,0,0.8), 0 5px 20px rgba(255,85,0,0.65);
  color: #fff;
}

/* Mobile language button — globe + code, sized to match its siblings */
.syf-mob-lang-btn {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #ffffff;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.20);
  border-radius: 9px;
  padding: 10px 14px;
  min-width: 72px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.18s;
}
.syf-mob-lang-btn svg { width: 15px; height: 15px; flex-shrink: 0; }
.syf-mob-lang-btn:active { transform: scale(0.97); }
.syf-mob-lang-btn:hover {
  background: rgba(255,255,255,0.14);
  border-color: rgba(255,140,60,0.45);
}

/* ── MOBILE MAIN BAR ── */
.syf-mobile-main {
  display: none;
  background: linear-gradient(180deg, #0e1c30 0%, #0a1525 100%);
  border-bottom: 1px solid rgba(255,107,0,0.15);
  height: 92px;
  align-items: center;
  padding: 0 14px;
  flex-shrink: 0;
  position: relative;
  gap: 12px;
  overflow: visible;
}
.syf-mobile-main::after {
  content: '';
  position: absolute;
  bottom: -1px; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255,107,0,0.35) 30%, rgba(255,107,0,0.35) 70%, transparent 100%);
}
.syf-mob-logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
}
.syf-mob-logo-img {
  width: 80px;
  height: 96px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 4px 14px rgba(255,107,0,0.45));
}
.syf-mob-brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
  text-decoration: none;
}
.syf-mob-brand-name {
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.3px;
  color: #ffffff;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.syf-mob-brand-sub {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: rgba(255,255,255,0.45);
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.syf-mob-hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px; height: 42px;
  border-radius: 10px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.78);
  cursor: pointer;
  transition: all 0.18s;
  flex-shrink: 0;
}
.syf-mob-hamburger:hover {
  background: rgba(255,107,0,0.12);
  border-color: rgba(255,107,0,0.28);
  color: #FF6B00;
}

.syf-mob-contact-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(37,211,102,0.05);
  border-bottom: 1px solid rgba(37,211,102,0.10);
}
.syf-mob-wa-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  color: #25D366;
  text-decoration: none;
  transition: opacity 0.18s;
}
.syf-mob-wa-link:hover { opacity: 0.80; }
.syf-mob-wa-sep { width: 1px; height: 12px; background: rgba(255,255,255,0.12); }
.syf-mob-mail-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11.5px;
  font-weight: 600;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  transition: color 0.18s;
}
.syf-mob-mail-link:hover { color: #FF6B00; }

/* Mobile drawer */
.syf-drawer {
  display: none;
  flex-direction: column;
  background: #091523;
  border-top: 1px solid rgba(255,255,255,0.06);
  max-height: calc(100dvh - 200px);
  overflow-y: auto;
}
.syf-drawer.open { display: flex; animation: slideDown 0.22s ease; }
@keyframes slideDown {
  from { opacity:0; transform: translateY(-6px); }
  to   { opacity:1; transform: translateY(0); }
}
.syf-drawer-trust {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  padding: 12px 20px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.syf-drawer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255,255,255,0.75);
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: color 0.15s;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
}
.syf-drawer-link:hover,
.syf-drawer-link.mobile-active { color: #FF6B00; }
.syf-drawer-link .arrow { color: rgba(255,255,255,0.22); font-size: 18px; line-height: 1; transition: transform 0.2s, color 0.2s; }
.syf-drawer-link.dd-open .arrow { transform: rotate(90deg); color: #FF6B00; }
.syf-mobile-sub {
  display: none;
  flex-direction: column;
  background: rgba(255,107,0,0.04);
  border-left: 2px solid rgba(255,107,0,0.28);
  margin: 0 20px 10px 20px;
  border-radius: 0 0 8px 8px;
}
.syf-mobile-sub.open { display: flex; }
.syf-mobile-sub-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 16px;
  font-size: 13.5px;
  font-weight: 500;
  color: rgba(255,255,255,0.58);
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: color 0.15s, background 0.15s;
}
.syf-mobile-sub-link:last-child { border-bottom: none; }
.syf-mobile-sub-link:hover { color: #FF6B00; background: rgba(255,107,0,0.06); }
.syf-mobile-sub-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: rgba(255,107,0,0.45);
  flex-shrink: 0;
}
.syf-drawer-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 20px 20px;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin-top: auto;
}
.syf-drawer-footer-row { display: flex; gap: 10px; }
.syf-drawer-lang {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.60);
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 10px;
  padding: 13px;
  cursor: pointer;
  transition: all 0.18s;
}
.syf-drawer-lang:hover { background: rgba(255,255,255,0.09); color: #fff; }
.syf-drawer-donate {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #FF6B00 0%, #d95500 100%);
  border: none;
  border-radius: 10px;
  padding: 13px;
  text-decoration: none;
  box-shadow: 0 3px 14px rgba(255,107,0,0.28);
  cursor: pointer;
  transition: box-shadow 0.22s;
}
.syf-drawer-donate:hover { box-shadow: 0 6px 24px rgba(255,107,0,0.48); color: #fff; }

/* Drawer membership — elite style to match main mobile bar */
.syf-drawer-membership {
  display: flex;
  align-items: stretch;
  gap: 0;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(135deg, #0c1a2e 0%, #101f35 50%, #0c1828 100%);
  box-shadow: 0 0 0 1px rgba(255,107,0,0.45), 0 3px 16px rgba(255,107,0,0.28);
  transition: box-shadow 0.22s, transform 0.22s;
}
.syf-drawer-membership:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 0 1px rgba(255,160,60,0.75), 0 6px 24px rgba(255,107,0,0.42);
}
.syf-drawer-membership-bar {
  width: 4px;
  align-self: stretch;
  flex-shrink: 0;
  background: linear-gradient(180deg, #FF6B00 0% 33.33%, #ffffff 33.33% 66.66%, #138808 66.66% 100%);
}
.syf-drawer-membership-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px 14px 14px;
}
.syf-drawer-membership-inner svg {
  width: 16px; height: 16px;
  stroke: #FF8C40;
  stroke-width: 1.8;
  fill: rgba(255,107,0,0.12);
  filter: drop-shadow(0 0 4px rgba(255,107,0,0.55));
  flex-shrink: 0;
}
.syf-drawer-membership-text {
  font-size: 13.5px;
  font-weight: 800;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ffffff 0%, #ffd0a0 60%, #FF8C40 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Lang dropdown for mobile utility — scrollable */
.syf-mob-lang-wrap { position: relative; }
.syf-mob-lang-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: #0e1d31;
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 10px;
  overflow-y: auto;
  max-height: 300px;
  min-width: 140px;
  box-shadow: 0 12px 36px rgba(0,0,0,0.60);
  z-index: 10001;
}
.syf-mob-lang-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.60);
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.14s, color 0.14s;
  text-align: left;
}
.syf-mob-lang-option:hover { background: rgba(255,107,0,0.07); color: #fff; }
.syf-mob-lang-option.selected { color: #FF6B00; font-weight: 600; }

/* ── RESPONSIVE ── */
@media (max-width: 1450px) {
  .syf-nav-link { font-size: 12.5px; padding: 8px 8px; }
}
@media (max-width: 1300px) {
  .syf-nav-link { font-size: 11.5px; padding: 7px 6px; }
}
@media (max-width: 1200px) {
  .syf-nav-link { font-size: 11px; padding: 6px 5px; }
  .syf-brand { width: 220px; }
  .syf-util-center { display: none !important; }
}
@media (max-width: 1100px) {
  .syf-utility        { display: none !important; }
  .syf-main           { display: none !important; }
  .syf-mobile-utility { display: flex !important; }
  .syf-mobile-main    { display: flex !important; }
}
@media (max-width: 400px) {
  .syf-mob-brand-name { font-size: 13px; }
  .syf-mob-actions-row { padding: 9px 32px; gap: 6px; }
  .syf-mob-elite-title { font-size: 10.5px; }
  .syf-mob-elite-inner { padding: 0 5px; }
  .syf-mob-btn-donate { font-size: 11px; padding: 7px 6px; }
  .syf-mob-lang-btn { font-size: 12px; padding: 7px 16px; min-width: 58px; }
.syf-mob-logo-img { width: 68px; height: 82px; 
  .syf-mobile-main { height: 82px; }
}
@media (prefers-reduced-motion: reduce) {
  .syf-drawer { animation: none; }
  .syf-mob-btn-donate:hover,
  .syf-mob-btn-elite:hover { transform: none; }
}
`;

/* ─── SVG ICONS ─── */
const IcoHeart = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7" />
    <rect x="2" y="7" width="20" height="5" rx="1" />
    <path d="M12 7v13" />
    <path d="M12 7c-1.5-3-5-3-5-1s2 1.5 5 1z" />
    <path d="M12 7c1.5-3 5-3 5-1s-2 1.5-5 1z" />
  </svg>
);
const IcoShield = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IcoGlobe = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IcoChev = ({ cls = "" }: { cls?: string }) => (
  <svg className={`syf-chev ${cls}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const IcoMenu = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IcoX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IcoCheck = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IcoMail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IcoShieldSolid = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

/* ─── COMPONENT ─── */
export default function SiteHeader({
  activeHref = "/",
  navLinks = DEFAULT_NAV,
}: SiteHeaderProps) {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [langOpen,    setLangOpen]    = useState(false);
  const [mobLangOpen, setMobLangOpen] = useState(false);
  const [activeLang,  setActiveLang]  = useState("en");
  const [mobileDD,    setMobileDD]    = useState<string | null>(null);

  const langRef    = useRef<HTMLDivElement>(null);
  const mobLangRef = useRef<HTMLDivElement>(null);

  const { isReady, changeLanguage } = useGoogleTranslate("en");

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/[^/]*\/([a-zA-Z-]+)/);
    if (match?.[1]) setActiveLang(match[1]);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (mobLangRef.current && !mobLangRef.current.contains(e.target as Node)) setMobLangOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleDD = useCallback((label: string) =>
    setMobileDD((p) => (p === label ? null : label)), []);

  const handleSelectLanguage = useCallback((code: string) => {
    setActiveLang(code);
    setLangOpen(false);
    setMobLangOpen(false);
    changeLanguage(code);
  }, [changeLanguage]);

  const currentLang = LANGUAGES.find((l) => l.code === activeLang);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <header className="syf-header" role="banner">

        <div className="syf-tricolor" aria-hidden="true" />

        {/* ══ DESKTOP: UTILITY BAR ══ */}
        <div className="syf-utility">
          <nav className="syf-util-center" aria-label="Quick navigation">
   {QUICK_LINKS.map((ql, i) => (
  <React.Fragment key={ql.href}>
    {i > 0 && <span className="syf-util-center-sep" aria-hidden="true" />}
    <a
      href={ql.href}
      className={`syf-quick-link${activeHref === ql.href ? " ql-active" : ""}`}
      aria-current={activeHref === ql.href ? "page" : undefined}
    >
      {ql.icon && <IcoYouth />}
      {ql.label}
    </a>
  </React.Fragment>
))}
            <i style={{ marginLeft: "4px" }} className="syf-util-center-sep" aria-hidden="true" />
            {/* <div className="syf-trust">
              <a href="https://wa.me/919243837546" className="syf-contact-item">
                <IcoWhatsapp />
                +91 92438 37546
              </a>
            </div> */}
          </nav>

          <div className="syf-util-right">

{/* membership button  */}




{/* 
  <a href="#membership" className="syf-btn-sadaiv-a">
  <span className="syf-a-accent" aria-hidden="true" />
  <span className="syf-a-inner">
    <span className="syf-a-crown" aria-hidden="true">♛</span>
    <span className="syf-a-text">
      <span className="syf-a-eyebrow">Premium</span>
      <span className="syf-a-main">Sadaiv Cyber Membership</span>
    </span>
    <span className="syf-a-badge">JOIN NOW</span>
  </span>
</a> */}

{/* ── OPTION B: Midnight Sapphire ── */}
{/* <a href="#membership" className="syf-btn-sadaiv-b">
  <span className="syf-b-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  </span>
  <span className="syf-b-text">
    <span className="syf-b-eyebrow">Exclusive</span>
    <span className="syf-b-main">Sadaiv Cyber Membership</span>
  </span>
  <span className="syf-b-arrow" aria-hidden="true">›</span>
</a> */}

{/* ── OPTION C: India Prestige ── */}
{/* <a href="#membership" className="syf-btn-sadaiv-c">
  <span className="syf-c-bar" aria-hidden="true" />
  <span className="syf-c-inner">
    <span className="syf-c-emblem" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    </span>
    <span className="syf-c-text">
      <span className="syf-c-eyebrow">Official Programme</span>
      <span className="syf-c-main">Sadaiv Cyber Membership</span>
    </span>
  </span>
  <span className="syf-c-chevron-wrap">
    <span className="syf-c-chevron" aria-hidden="true">›</span>
  </span>
</a> */}

{/* ── ELITE CYBER MEMBERSHIP BUTTON ── */}
<a href="#membership" className="syf-btn-elite">
  {/* <span className="syf-elite-bar" aria-hidden="true" /> */}
  {/* <span className="syf-elite-icon" aria-hidden="true">
    <span className="syf-elite-icon-glow" />
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  </span> */}
  <span className="syf-elite-body">
    <span className="syf-elite-title">Sadaiv Cyber Membership</span>
  </span>
  
</a>

<a href="#donate" className="syf-btn-donate-top">
  {/* <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7"/>
    <rect x="2" y="7" width="20" height="5" rx="1"/>
    <path d="M12 7v13"/>
    <path d="M12 7c-1.5-3-5-3-5-1s2 1.5 5 1z"/>
    <path d="M12 7c1.5-3 5-3 5-1s-2 1.5-5 1z"/>
  </svg> */}
  DONATE
</a>




            <div ref={langRef} style={{ position: "relative" }}>
              <button
                className="syf-lang-btn"
                onClick={() => setLangOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label={`Language: ${currentLang?.label ?? "English"}. ${isReady ? "" : "Loading translator. "}Tap to switch.`}
              >
                <IcoGlobe />
                {currentLang?.label ?? "English"}
                <IcoChev cls={langOpen ? "syf-chev" : ""} />
              </button>
              {langOpen && (
                <div className="syf-lang-dropdown" role="listbox">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      role="option"
                      aria-selected={activeLang === lang.code}
                      className={`syf-lang-option${activeLang === lang.code ? " selected" : ""}`}
                      onClick={() => handleSelectLanguage(lang.code)}
                    >
                      {lang.label}
                      {activeLang === lang.code && <IcoCheck />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ══ DESKTOP: MAIN BAR ══ */}
        <div className="syf-main">
          <a href="/" className="syf-logo" aria-label="Sadaiv Yuva Foundation — Home">
            <Image
              src={logoImg}
              alt="Sadaiv Yuva Foundation"
              width={113}
              height={124}
              className="syf-logo-img"
              priority
              style={{ width: 138, height: 170, objectFit: "contain" }}
            />
          </a>
          <a href="/" className="syf-brand" aria-label="Sadaiv Yuva Foundation — Home">
            <span className="syf-brand-name">SADAIV YUVA FOUNDATION</span>
            <span className="syf-brand-tagline">
              <span className="syf-brand-tagline-text">
                12A / 80G / CSR FUND APPROVED FOUNDATION
              </span>
            </span>
          </a>
          <div className="syf-vdiv" aria-hidden="true" />
          <nav className="syf-nav" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const hasDD  = link.dropdown && link.dropdown.length > 0;
              const isActive = link.href === activeHref;
              return (
                <div key={link.label} className="syf-nav-item">
                  <a
                    href={link.href}
                    className={`syf-nav-link${isActive ? " active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={hasDD ? (e) => e.preventDefault() : undefined}
                  >
                    {link.label}
                    {hasDD && <IcoChev />}
                  </a>
                  {hasDD && (
                    <div className="syf-dropdown" role="menu" aria-label={`${link.label} submenu`}>
                      <div className="syf-dd-header">{link.label}</div>
                      {link.dropdown!.map((item) => (
                        <a key={item.label} href={item.href} className="syf-dd-item" role="menuitem">
                          <span className="syf-dd-label">{item.label}</span>
                          {item.description && <span className="syf-dd-desc">{item.description}</span>}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* ══ MOBILE: MAIN BAR ══ */}
        <div className="syf-mobile-main">
          <a href="/" className="syf-mob-logo" aria-label="Sadaiv Yuva Foundation — Home">
            <Image
              src={logoImg}
              alt="Sadaiv Yuva Foundation"
              width={80}
              height={96}
              className="syf-mob-logo-img"
              priority
            />
          </a>
          <a href="/" className="syf-mob-brand" aria-label="Sadaiv Yuva Foundation — Home">
            <span className="syf-mob-brand-name">SADAIV YUVA FOUNDATION</span>
            <span className="syf-mob-brand-sub">12A / 80G / CSR FUND APPROVED FOUNDATION</span>
          </a>
          <button
            className="syf-mob-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="syf-drawer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IcoX /> : <IcoMenu />}
          </button>
        </div>

        {/* ══ MOBILE: UTILITY BAR ══ */}
        <div className="syf-mobile-utility">
          <div className="syf-mob-actions-row">
            <div ref={mobLangRef} className="syf-mob-lang-wrap">
              <button
                className="syf-mob-lang-btn"
                onClick={() => setMobLangOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={mobLangOpen}
                aria-label={`Language: ${currentLang?.label ?? "English"}. Tap to switch.`}
              >
                <IcoGlobe />
                {(activeLang || "en").toUpperCase()}
              </button>
              {mobLangOpen && (
                <div className="syf-mob-lang-dropdown" role="listbox">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      role="option"
                      aria-selected={activeLang === lang.code}
                      className={`syf-mob-lang-option${activeLang === lang.code ? " selected" : ""}`}
                      onClick={() => handleSelectLanguage(lang.code)}
                    >
                      {lang.label}
                      {activeLang === lang.code && <IcoCheck />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a href="#donate" className="syf-mob-btn-donate">
              <IcoHeart /> DONATE
            </a>
            <a href="#membership" className="syf-mob-btn-elite">
              <span className="syf-mob-elite-inner">
                <span className="syf-mob-elite-title">Membership</span>
              </span>
            </a>
          </div>
        </div>

        {/* ══ MOBILE: DRAWER ══ */}
        <nav
          id="syf-drawer"
          className={`syf-drawer${menuOpen ? " open" : ""}`}
          aria-hidden={!menuOpen}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const hasDD  = link.dropdown && link.dropdown.length > 0;
            const isOpen = mobileDD === link.label;
            const isActive = link.href === activeHref;
            return (
              <div key={link.label}>
                {hasDD ? (
                  <>
                    <button
                      className={`syf-drawer-link${isActive ? " mobile-active" : ""}${isOpen ? " dd-open" : ""}`}
                      onClick={() => toggleDD(link.label)}
                      aria-expanded={isOpen}
                    >
                      {link.label}
                      <span className="arrow" aria-hidden="true">›</span>
                    </button>
                    <div className={`syf-mobile-sub${isOpen ? " open" : ""}`}>
                      {link.dropdown!.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="syf-mobile-sub-link"
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="syf-mobile-sub-dot" aria-hidden="true" />
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className={`syf-drawer-link${isActive ? " mobile-active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span className="arrow" aria-hidden="true">›</span>
                  </a>
                )}
              </div>
            );
          })}

          <div className="syf-drawer-footer">
            <a href="#membership" className="syf-drawer-membership" onClick={() => setMenuOpen(false)}>
              <span className="syf-drawer-membership-bar" aria-hidden="true" />
              <span className="syf-drawer-membership-inner">
                <IcoShieldSolid />
                <span className="syf-drawer-membership-text">Sadaiv Cyber Membership</span>
              </span>
            </a>
            <div className="syf-drawer-footer-row">
              <button
                className="syf-drawer-lang"
                onClick={() => {
                  const idx = LANGUAGES.findIndex((l) => l.code === activeLang);
                  const next = LANGUAGES[(idx + 1) % LANGUAGES.length].code;
                  handleSelectLanguage(next);
                }}
                aria-label={`Language: ${currentLang?.label}. Tap to switch.`}
              >
                <IcoGlobe /> {currentLang?.label ?? "English"}
              </button>
              <a href="#donate" className="syf-drawer-donate" onClick={() => setMenuOpen(false)}>
                <IcoHeart /> Donate Now
              </a>
            </div>
          </div>
        </nav>

      </header>
    </>
  );
}