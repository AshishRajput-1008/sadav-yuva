"use client";

import Image from "next/image";
import s1 from "@/public/images/Animal2.png"
import s2 from "@/public/images/camp.png"
import s3 from "@/public/images/family2.png"
import s4 from "@/public/images/plant2.png"
import s5 from "@/public/images/serving2.png"
import s6 from "@/public/images/pactice.png"


import logo1 from "../../Assests/images/collab/sadavsatyalogo101.png";
import logo2 from "../../Assests/images/collab/sadavsatyalogo101.png";
import logo3 from "../../Assests/images/collab/sadavsatyalogo101.png";


import i1 from "@/Assests/images/collab/int-1.png"
import i2 from "@/Assests/images/collab/int-2.png"


import { useState, useEffect, useRef, useCallback } from "react";



import heroImg1 from "../../Assests/images/Hero2/hero1111.png";
import heroImg2 from "../../Assests/images/Hero2/heroWorkshop.png";
import heroImg3 from "../../Assests/images/Hero2/HeroCertificate5.png";
import heroImg4 from "../../Assests/images/Hero2/preventfrauds2.png";



import StoriesSection from '@/app/components/Storiessection'
import PartnersSection from '@/app/components/Partnerssection'
import SiteFooter from '@/app/components/Sitefooter'

import heroImg from "../../Assests/images/suf1212.png";
import logoImg from "../../Assests/images/logo.png";
import aboutImg1 from "../../Assests/images/aboutimg1.jpg";
import aboutImg2 from "../../Assests/images/about2.jpg";
import aboutImg3 from "../../Assests/images/about3.jpg";
import aboutImg4 from "../../Assests/images/about4.jpg";
import involvedImg from "../../Assests/images/getinvolvedimg.png"; // ← adjust filename to match yours

/* ─────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --color-0: #66b40b;
    --color-1: #5b9f0c;
    --color-primary: #66b40b;
    --font: 'DM Sans', sans-serif;
    --header-h: 80px;
  }

  body { font-family: var(--font); font-size: 16px; line-height: 1.6; }
  a { text-decoration: none; color: inherit; }

  /* ══ HEADER ══ */
  .site-header {
    position: absolute;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding-top: 14px;
  }

  .header-inner {
    height: var(--header-h);
    display: flex;
    align-items: center;
    padding: 0 40px;
  }

  .logo-link { display: flex; align-items: center; flex-shrink: 0; }
  .logo-link img { width: 89px !important; height: 106px !important; object-fit: contain; }

  /* ══ HERO CAROUSEL ══ */
.hero-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  isolation: isolate;
}
.carousel-track {
  display: flex;
  width: 100%;
  transition: transform 0.65s cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform;
  align-items: flex-start;
}
.carousel-slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
}
.carousel-slide img {
  display: block;
  width: 100%;
  height: auto;      /* ← key change: no forced height, no object-fit needed */
}
  /* ── Arrows ── */
  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.35);
    background: rgba(10,20,35,0.45);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 5;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
  }
  .carousel-arrow:hover {
    background: rgba(240,165,0,0.85);
    border-color: rgba(240,165,0,0.85);
    transform: translateY(-50%) scale(1.06);
  }
  .carousel-arrow svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  .carousel-arrow-prev { left: 24px; }
  .carousel-arrow-next { right: 24px; }

  /* ── Dot indicators ── */
  .carousel-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .carousel-dot {
    width: 8px;
    height: 8px;
    border-radius: 100px;
    background: rgba(255,255,255,0.45);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 0.3s, width 0.3s;
  }
  .carousel-dot.active {
    background: var(--color-primary);
    width: 28px;
  }

  /* ── Progress bar ── */
  .carousel-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: var(--color-primary);
    z-index: 10;
    width: 0%;
  }

  /* ══ RESPONSIVE ══ */
  @media (max-width: 1100px) {
    .main-nav, .header-right { display: none; }
    .hamburger { display: block; }
    .header-divider { display: none; }
  }

  @media (max-width: 921px) {
    .header-topbar { padding: 0 28px; }
    .carousel-slide { }
    .carousel-arrow { width: 44px; height: 44px; }
    .carousel-arrow-prev { left: 14px; }
    .carousel-arrow-next { right: 14px; }
    .cards-wrapper { grid-template-columns: 1fr; margin: 0 20px; }
    .card-item { border-right: none; border-bottom: 1px solid #e8e8e8; }
    .card-item:last-child { border-bottom: none; }
    .about-section { padding: 72px 28px; }
    .about-inner { grid-template-columns: 1fr; gap: 48px; }
    .about-h2 { font-size: 34px; }
    .impact-section { padding: 72px 28px; }
    .impact-top { grid-template-columns: 1fr; gap: 24px; }
    .impact-h2 { font-size: 32px; }
    .impact-stats { grid-template-columns: repeat(2, 1fr); }
    .stat-item:nth-child(2) { border-right: none; }
    .stat-item:nth-child(3) { border-right: 1px solid #d8dfc8; border-top: 1px solid #d8dfc8; }
    .stat-item:nth-child(4) { border-right: none; border-top: 1px solid #d8dfc8; }
    .impact-cta-banner { flex-direction: column; text-align: center; padding: 28px 24px; }
    .involved-section { padding: 0 28px 72px; }
    .involved-inner { grid-template-columns: 1fr; gap: 48px; }
    .involved-h2 { font-size: 34px; }
  }

  @media (max-width: 544px) {
    :root { --header-h: 100px; }
    .header-topbar { padding: 0 18px; }
    .logo-link { margin-right: 0; }
    .carousel-slide {width: 100%;}
    .carousel-arrow { display: none; }
    .carousel-dots { bottom: 14px; }
    .cards-wrapper { margin: 0 16px; }
    .card-item { padding: 28px 24px; }
    .about-section { padding: 56px 20px; }
    .about-inner { gap: 36px; }
    .about-h2 { font-size: 28px; }
    .impact-section { padding: 56px 20px; }
    .impact-h2 { font-size: 26px; }
    .impact-stats { grid-template-columns: repeat(2, 1fr); }
    .stat-number { font-size: 30px; }
    .involved-section { padding: 0 20px 56px; }
    .involved-h2 { font-size: 28px; }
  }

.main-nav ul { list-style: none; display: flex; gap: 24px; margin-left: 36px; }
.main-nav a {
  font-size: 15px;
  font-weight: 600;
  color: rgba(255,255,255,0.92);
  transition: color 0.2s;
  white-space: nowrap;
  letter-spacing: 0.2px;
  text-shadow: 0 1px 6px rgba(0,0,0,0.45);
}
@media (max-width: 1100px) {
  .main-nav, .btn-donate { display: none; }
  .hamburger { display: block; }
}
  .main-nav a:hover { color: #fff; }
  .main-nav a.active {
    color: #e03900;
    text-shadow: 0 1px 8px rgba(240,165,0,0.4);
  }

  .btn-donate {
  font-family: var(--font);
  font-weight: 700;
  font-size: 16px;
  color: #000000;
    background: #ffffff;
  border: black solid 1px;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.3s ease;
  margin-left: 165px;
  box-shadow: none;
}

.btn-donate:hover {
  background: #fff;
  color: #111;
  border-color: transparent;
}

  /* ══ HERO ══ */
  .hero-section {
    position: relative;
    height: 100vh;
   height: auto;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-section::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 140px;
    background: linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, transparent 100%);
    z-index: 1;
  }

  .hero-bg-img {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
  object-fit: contain !important;
  object-position: center center !important;
    z-index: 0;
  }

  .hero-inner {
    position: relative;
    z-index: 2;
    width: 820px;
    max-width: calc(100vw - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 22px;
    margin-top: var(--header-h);
  }

  .hero-h1 {
    font-family: var(--font);
    font-size: 68px;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.5px;
    color: #fff;
    width: 100%;
    text-shadow: 0 2px 20px rgba(0,0,0,0.5);
  }

  .hero-sub {
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255,255,255,0.90);
    margin: 0;
    text-shadow: 0 1px 8px rgba(0,0,0,0.4);
    max-width: 580px;
  }

  .btn-donate-now {
    font-family: var(--font);
    font-weight: 700;
    font-size: 17px;
    color: #fff;
    background: #f0a500;
    border: none;
    border-radius: 8px;
    padding: 15px 36px;
    cursor: pointer;
    display: inline-block;
    transition: background 0.2s, transform 0.15s;
    box-shadow: 0 4px 18px rgba(240,165,0,0.40);
    margin-top: 4px;
  }
  .btn-donate-now:hover { background: #d4920a; transform: translateY(-1px); }

  /* ══ HAMBURGER ══ */
  .hamburger {
    display: none; background: transparent;
    border: 1px solid rgba(255,255,255,0.7); border-radius: 8px;
    padding: 8px 10px; cursor: pointer; color: #fff; flex-shrink: 0;
  }

  /* ══ MOBILE DRAWER ══ */
  .mobile-drawer { display: none; flex-direction: column; background: #fff; padding: 16px 28px; }
  .mobile-drawer.open { display: flex; }
  .mobile-drawer a {
    font-weight: 700; font-size: 16px; color: #111;
    padding: 12px 0; border-bottom: 1px solid #eaeaea;
  }

  /* ══ CARDS SECTION ══ */
  .cards-section {
    background: #fdf3ea;
    padding: 50px 0 20px 0px;
    position: relative;
    z-index: 3;
  }

  .cards-wrapper {
    background: #fff;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 40px;
    box-shadow: 0 4px 32px rgba(0,0,0,0.07);
    overflow: hidden;
  }

  .card-item {
    padding: 40px 40px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-right: 1px solid #e8e8e8;
  }
  .card-item:last-child { border-right: none; }

  .card-num {
    font-family: var(--font);
    font-size: 42px;
    font-weight: 700;
    color: #e8d5c8;
    line-height: 1;
    margin-bottom: 4px;
  }

  .card-title {
    font-family: var(--font);
    font-size: 22px;
    font-weight: 700;
    color: #111;
    margin: 0;
  }

  .card-desc {
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin: 0;
    flex: 1;
  }

  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 15px;
    color: #111;
    margin-top: 8px;
    transition: gap 0.2s;
  }
  .card-link:hover { gap: 14px; }
  .card-link svg { width: 18px; height: 18px; flex-shrink: 0; }

  /* ══ ABOUT SECTION ══ */
  .about-section {
    background: #fbf2e9;
    padding: 100px 60px;
  }

  .about-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
  }

  .about-left {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .about-label {
    font-family: var(--font);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #46512a;
  }

  .about-h2 {
    font-family: var(--font);
    font-size: 44px;
    font-weight: 700;
    line-height: 1.12;
    color: #2c3a04;
    margin: 0;
  }

  .about-desc {
    font-size: 15px;
    line-height: 1.75;
    color: #46512a;
    margin: 0;
  }

  .about-sub {
    font-size: 14px;
    line-height: 1.6;
    color: #46512a;
    opacity: 0.72;
    margin: 0;
  }

  .btn-read-more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 32px;
    border: 1.5px solid #2c3a04;
    border-radius: 8px;
    font-family: var(--font);
    font-size: 15px;
    font-weight: 700;
    color: #2c3a04;
    background: transparent;
    cursor: pointer;
    width: fit-content;
    transition: background 0.2s, color 0.2s;
    text-decoration: none;
  }
  .btn-read-more:hover { background: #2c3a04; color: #fff; }

  .about-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    align-items: start;
  }

  .about-img-col {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .about-img-slot {
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .about-img-slot img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .about-img-col:first-child .about-img-slot:first-child { aspect-ratio: 4/5; }
  .about-img-col:first-child .about-img-slot:last-child  { aspect-ratio: 5/4; }
  .about-img-col:last-child  .about-img-slot:first-child { aspect-ratio: 5/4; }
  .about-img-col:last-child  .about-img-slot:last-child  { aspect-ratio: 4/5; }

  /* ══ OUR IMPACT SECTION ══ */
  .impact-section { background: #f7f9f1; padding: 90px 60px; }
  .impact-inner { max-width: 1280px; margin: 0 auto; }
  .impact-top {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 60px; align-items: start; margin-bottom: 56px;
  }
  .impact-label {
    font-family: var(--font); font-size: 12px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; color: #46512a; margin-bottom: 54px;
  }
  .impact-h2 {
    font-family: var(--font); font-size: 42px; font-weight: 700;
    line-height: 1.12; color: #2c3a04; margin: 0;
  }
  .impact-right-text {
    font-size: 15px; line-height: 1.75; color: #46512a; padding-top: 72px;
  }
  .impact-stats {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 0; border-top: 1px solid #d8dfc8; border-bottom: 1px solid #d8dfc8;
    margin-bottom: 40px;
  }
  .stat-item {
    padding: 36px 24px; text-align: center;
    border-right: 1px solid #d8dfc8;
  }
  .stat-item:last-child { border-right: none; }
  .stat-number {
    font-family: var(--font); font-size: 40px; font-weight: 700;
    color: #2c3a04; line-height: 1; margin-bottom: 10px;
    display: block;
  }
  .stat-label { font-size: 14px; color: #46512a; line-height: 1.4; }

  .impact-cta-banner {
    background: #66b40b; border-radius: 12px;
    padding: 32px 40px; display: flex;
    align-items: center; justify-content: space-between; gap: 24px;
  }
  .impact-cta-left { display: flex; flex-direction: column; gap: 6px; }
  .impact-cta-title {
    font-family: var(--font); font-size: 24px; font-weight: 700;
    color: #fff; margin: 0;
  }
  .impact-cta-sub { font-size: 14px; color: rgba(255,255,255,0.88); margin: 0; }
  .btn-donate-impact {
    font-family: var(--font); font-weight: 700; font-size: 15px;
    color: #2c3a04; background: #fff; border: none; border-radius: 8px;
    padding: 14px 28px; cursor: pointer; white-space: nowrap;
    transition: background 0.2s, color 0.2s; flex-shrink: 0;
    text-decoration: none; display: inline-block;
  }
  .btn-donate-impact:hover { background: #f0a500; color: #fff; }

  /* ══ GET INVOLVED SECTION ══ */
  .involved-section { background: #f7f9f1; padding: 0 60px 40px; }
  .involved-inner {
    max-width: 1280px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: center;
  }
  .involved-img-wrap {
    border-radius: 18px; overflow: hidden;
    position: relative; width: 100%; aspect-ratio: 1/1;
  }
  .involved-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .involved-right { display: flex; flex-direction: column; gap: 20px; }
  .involved-label {
    font-family: var(--font); font-size: 12px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; color: #46512a;
  }
  .involved-h2 {
    font-family: var(--font); font-size: 44px; font-weight: 700;
    line-height: 1.12; color: #2c3a04; margin: 0;
  }
  .involved-desc { font-size: 15px; line-height: 1.75; color: #46512a; margin: 0; }
  .involved-sub { font-size: 14px; line-height: 1.6; color: #46512a; opacity: 0.72; margin: 0; }
  .btn-register {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 14px 32px; border: 1.5px solid #2c3a04; border-radius: 8px;
    font-family: var(--font); font-size: 15px; font-weight: 700; color: #2c3a04;
    background: transparent; cursor: pointer; width: fit-content;
    transition: background 0.2s, color 0.2s; text-decoration: none;
  }
  .btn-register:hover { background: #2c3a04; color: #fff; }

  /* ══ RESPONSIVE ══ */
  @media (max-width: 921px) {
    .main-nav, .btn-donate { display: none; }
    .hamburger { display: block; }
    .header-inner { padding: 0 28px; }
    .hero-inner { width: 100%; max-width: 100%; padding: 0 32px; }
    .hero-h1 { font-size: 44px; }
    .hero-sub { font-size: 16px; }
    .btn-donate-now { padding: 16px 40px; font-size: 16px; }
    .cards-wrapper { grid-template-columns: 1fr; margin: 0 20px; }
    .card-item { border-right: none; border-bottom: 1px solid #e8e8e8; }
    .card-item:last-child { border-bottom: none; }
    .about-section { padding: 72px 28px; }
    .about-inner { grid-template-columns: 1fr; gap: 48px; }
    .about-h2 { font-size: 34px; }
    .impact-section { padding: 72px 28px; }
    .impact-top { grid-template-columns: 1fr; gap: 24px; }
    .impact-h2 { font-size: 32px; }
    .impact-stats { grid-template-columns: repeat(2, 1fr); }
    .stat-item:nth-child(2) { border-right: none; }
    .stat-item:nth-child(3) { border-right: 1px solid #d8dfc8; border-top: 1px solid #d8dfc8; }
    .stat-item:nth-child(4) { border-right: none; border-top: 1px solid #d8dfc8; }
    .impact-cta-banner { flex-direction: column; text-align: center; padding: 28px 24px; }
    .involved-section { padding: 0 28px 72px; }
    .involved-inner { grid-template-columns: 1fr; gap: 48px; }
    .involved-h2 { font-size: 34px; }
  }

  @media (max-width: 544px) {
    :root { --header-h: 68px; }
    .header-inner { padding: 0 20px; }
    .logo-link img { width: 89px !important; height: 106px !important; }
    .hero-inner { padding: 0 20px; }
    .hero-h1 { font-size: 32px; }
    .btn-donate-now { padding: 14px 32px; font-size: 15px; }
    .cards-wrapper { margin: 0 16px; }
    .card-item { padding: 28px 24px; }
    .about-section { padding: 56px 20px; }
    .about-inner { gap: 36px; }
    .about-h2 { font-size: 28px; }
    .about-images { gap: 10px; }
    .about-img-slot { border-radius: 12px; }
    .impact-section { padding: 56px 20px; }
    .impact-h2 { font-size: 26px; }
    .impact-stats { grid-template-columns: repeat(2, 1fr); }
    .stat-number { font-size: 30px; }
    .impact-cta-title { font-size: 20px; }
    .involved-section { padding: 0 20px 56px; }
    .involved-h2 { font-size: 28px; }
  }
`;

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Cyber Article",      href: "/cyber-article"                    },
  { label: "Sparking Step",      href: "/sparking-step"                    },
  { label: "Corporate Workshop", href: "/corporate-workshop"               },
  { label: "Cyber News",         href: "/cyber-news"                       },
  { label: "Cyber Fraud",       href: "/cyber-frauds"                     },
  { label: "Cyber Laws",               href: "/laws"                             },
  // { label: "Collaborations",               href: "/laws"                             },
  { label: "Media",               href: "/laws"                             },
];


const INTERVIEW = {
  tags: ["FEATURED", "TRENDING"],
  author: "Dr. Priya Singh",
  date: "January 10, 2025",
  title: "Cyber Warriors: Training India's Next Generation of Digital Defenders",
  desc: "Our intensive cybersecurity program has trained over 5,000 youth in ethical hacking, digital forensics, and online safety protocols. Discover how we're building a secure digital future.",
};

const ABOUT_IMAGES = [
  { src: aboutImg1, alt: "Hands holding a flower" },
  { src: aboutImg2, alt: "Volunteers with donation boxes" },
  { src: aboutImg3, alt: "Clothing donation drive" },
  { src: aboutImg4, alt: "People exchanging goods" },
];




const SLIDES = [
 
   { img: heroImg3, alt: "Hero slide 3" },
    { img: heroImg1, alt: "Hero slide 1" },
     { img: heroImg2, alt: "Hero slide 2" },
  { img: heroImg4, alt: "Hero slide 4" },
  
];

/* ─────────────────────────────────────────
   ICON COMPONENTS
───────────────────────────────────────── */
const ArrowIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"/>
  </svg>
);

const MenuIcon = () => (
  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 24 28">
    <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"/>
  </svg>
);

const CloseIcon = () => (
  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
    <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"/>
  </svg>
);


const CARDS = [
  { num: "01.", title: "Causes",       desc: "We support education, healthcare, and poverty reduction.", link: "See Proof",       href: "#" },
  { num: "02.", title: "Get involved", desc: "Volunteer or donate your skills to make a difference.",   link: "View Financials", href: "#" },
  { num: "03.", title: "Donation",     desc: "Contribute today and help us change lives and build a better future.", link: "Learn More", href: "#" },
];

const STATS = [
  { value: 20,     suffix: "M+", label: "People served worldwide" },
  { value: 142790, suffix: "",   label: "Projects funded"          },
  { value: 1.8,    suffix: "M",  label: "People to take action"    },
  { value: 5246,   suffix: "",   label: "Partner organizations"    },
];

const AUTOPLAY_DURATION = 5000;

/* ─────────────────────────────────────────
   ICON COMPONENTS
───────────────────────────────────────── */


const ChevLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const ChevRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);




/* ─────────────────────────────────────────
   COUNTER HOOK
───────────────────────────────────────── */
function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime!) / duration, 1);
      setCount(progress * target);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

/* ─────────────────────────────────────────
   STAT ITEM
───────────────────────────────────────── */
function StatItem({
  value,
  suffix,
  label,
  started,
}: {
  value: number;
  suffix?: string;
  label: string;
  started?: boolean;
}) {
  const count = useCountUp(value, 2000, started);
  const display =
    value >= 1000
      ? Math.floor(count).toLocaleString()
      : count < 10
      ? count.toFixed(1)
      : Math.floor(count).toString();

  return (
    <div className="stat-item">
      <span className="stat-number">
        {display}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}



function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const total = SLIDES.length;

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      void progressRef.current.offsetWidth; // force reflow
      progressRef.current.style.transition = `width ${AUTOPLAY_DURATION}ms linear`;
      progressRef.current.style.width = "100%";
    }
  }, []);

  const goNext = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

  // Autoplay
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(goNext, AUTOPLAY_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, goNext]);

  // Kick off progress bar on first mount
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      void progressRef.current.offsetWidth;
      progressRef.current.style.transition = `width ${AUTOPLAY_DURATION}ms linear`;
      progressRef.current.style.width = "100%";
    }
  }, []);

  // Swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd   = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
  };

  return (
    <div
      className="hero-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Hero image carousel"
    >
      {/* Track */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`carousel-slide${i === current ? " active" : ""}`}
            aria-hidden={i !== current}
          >
            <img src={slide.img.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="carousel-arrow carousel-arrow-prev" onClick={goPrev} aria-label="Previous slide">
        <ChevLeftIcon />
      </button>
      <button className="carousel-arrow carousel-arrow-next" onClick={goNext} aria-label="Next slide">
        <ChevRightIcon />
      </button>

      {/* Dots */}
      <div className="carousel-dots" role="tablist">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div ref={progressRef} className="carousel-progress" aria-hidden="true" />
    </div>
  );
}



/* ─────────────────────────────────────────
   OUR IMPACT SECTION
───────────────────────────────────────── */
function OurImpact() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact-section" ref={ref}>
      <div className="impact-inner">

        {/* Top: heading left + description right */}
        <div className="impact-top">
          <div>
            <p className="impact-label">Our Impact</p>
            <h2 className="impact-h2">The impact we have made in our community</h2>
          </div>
          <p className="impact-right-text">
            We have made a significant impact in our community through our
            non-profit organization. By providing services and support to those
            in need, we have created a positive change. Our efforts have helped
            to improve the lives of many and we are committed to continuing to
            make a difference.
          </p>
        </div>

        {/* Stats row */}
        <div className="impact-stats">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} started={started} />
          ))}
        </div>

        {/* CTA banner */}
        <div className="impact-cta-banner">
          <div className="impact-cta-left">
            <h3 className="impact-cta-title">We can create a better tomorrow</h3>
            <p className="impact-cta-sub">
              Every dollar counts and helps us bring hope and essential resources to those in need.
            </p>
          </div>
          <a href="#donate" className="btn-donate-impact">
            Donate Now
          </a>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   GET INVOLVED SECTION
───────────────────────────────────────── */
function GetInvolved() {
  return (
    <section className="involved-section">
      <div className="involved-inner">

        {/* Left image */}
        <div className="involved-img-wrap">
          <Image
            src={i2.src}
            alt={INTERVIEW.title}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 921px) 90vw, 44vw"
          />
        </div>

        {/* Right text */}
        <div className="involved-right">
          <span className="involved-label">Interviews</span>
          <div style={{ display: "flex", gap: 8 }}>
            {INTERVIEW.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: "#fff",
                  background: "#66b40b",
                  borderRadius: 4,
                  padding: "4px 10px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="involved-h2">{INTERVIEW.title}</h2>
          <p className="involved-desc">{INTERVIEW.desc}</p>
          <p className="involved-sub">
            {INTERVIEW.author} · {INTERVIEW.date}
          </p>
          <a href="#interviews" className="btn-register">
            Read Interview
          </a>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE COMPONENT
───────────────────────────────────────── */
export default function NonProfitHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

     <div id="page" className="mt-[144px] md:mt-[128px]" 
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh", paddingTop: "9rem" }}
      >


     

        {/* ══ HERO ══ */}
     

 <HeroCarousel />


        {/* ══ CARDS SECTION ══ */}
        <div className="cards-section">
          <div className="cards-wrapper">
            {CARDS.map(({ num, title, desc, link, href }) => (
              <div className="card-item" key={num}>
                <div className="card-num">{num}</div>
                <h5 className="card-title">{title}</h5>
                <p className="card-desc">{desc}</p>
                <a href={href} className="card-link">
                  {link}
                  <ArrowIcon />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ══ ABOUT SECTION ══ */}
        <section className="about-section">
          <div className="about-inner">

            {/* Left — text */}
            <div className="about-left">
              <span className="about-label">About Us</span>
              <h2 className="about-h2">Our journey of compassion and hope</h2>
              <p className="about-desc">
                Join us on a journey towards compassion and hope. Through our
                non-profit organisation, we strive to make a positive impact on
                the world. Give back to your community and be a part of something
                greater than yourself.
              </p>
              <p className="about-sub">
                A transformational journey towards bringing hope and compassion
                to the world.
              </p>
              <a href="/about-us" className="btn-read-more">
                Read More
              </a>
            </div>

            {/* Right — staggered 2×2 image grid */}
            <div className="about-images">
              {/* Column 1: tall → short */}
              <div className="about-img-col">
                <div className="about-img-slot">
                  <Image
                    src={s1.src}
                    alt={ABOUT_IMAGES[0].alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 921px) 45vw, 22vw"
                  />
                </div>
                <div className="about-img-slot">
                  <Image
                    src={s2.src}
                    alt={ABOUT_IMAGES[1].alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 921px) 45vw, 22vw"
                  />
                </div>
              </div>

              {/* Column 2: short → tall */}
              <div className="about-img-col">
                <div className="about-img-slot">
                  <Image
                    src={s3.src}
                    alt={ABOUT_IMAGES[2].alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 921px) 45vw, 22vw"
                  />
                </div>
                <div className="about-img-slot">
                  <Image
                    src={s4.src}
                    alt={ABOUT_IMAGES[3].alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 921px) 45vw, 22vw"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══ OUR IMPACT SECTION ══ */}
        <OurImpact />

        {/* ══ GET INVOLVED SECTION ══ */}
        <GetInvolved />

        <StoriesSection />
{/* <PartnersSection /> */}
<SiteFooter />

      </div>
    </>
  );
}