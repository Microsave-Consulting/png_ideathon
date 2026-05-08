"use client";

import { useState, useEffect, useRef } from "react";
import ContactModal from "@/components/ContactModal";
import hackathons from "../../public/data/hackathons.json";
import "./Navbar.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [hackOpen, setHackOpen] = useState(false);
  const dropRef = useRef(null);
  const hackRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
      if (hackRef.current && !hackRef.current.contains(e.target)) {
        setHackOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header className="hdr-header">
        <div className="hdr-inner">
          <nav className="hdr-nav" aria-label="Primary">

            {/* Logo */}
            <a
              href="https://www.digitalidinnovations.com/"
              aria-label="MSC Home"
              className="hdr-logo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${basePath}/img/msc-logo.svg`}
                alt="MSC"
                className="hdr-logo-img"
              />
            </a>

            {/* Desktop nav links */}
            <div className="hdr-nav-links">
              <a href="https://www.digitalidinnovations.com/" className="hdr-link" target="_blank" rel="noopener noreferrer">
                Home
              </a>

              <div
                className="hdr-drop-group"
                ref={hackRef}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={hackOpen}
                  className="hdr-drop-btn"
                  onClick={() => setHackOpen((s) => !s)}
                >
                  Hackathons
                  <svg
                    width="0.75em"
                    height="0.463em"
                    viewBox="0 0 12 7.41"
                    fill="none"
                    style={{ color: "#334155", flexShrink: 0 }}
                  >
                    <path
                      d="M1 1l5 5.41L11 1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className={`hdr-dropdown${hackOpen ? " open" : ""}`}>
                  {hackathons.map((h) => (
                    <a key={h.ID} href={h.URL} target="_blank" rel="noopener noreferrer" onClick={() => setHackOpen(false)}>
                      {h.Title}
                    </a>
                  ))}
                </div>
              </div>

              <a href="https://www.digitalidinnovations.com/library" className="hdr-link" target="_blank" rel="noopener noreferrer">
                Use Case Library
              </a>
            </div>

            {/* Right: hamburger (mobile) + Contact Us (desktop) */}
            <div className="hdr-right" ref={dropRef}>
              <div style={{ position: "relative" }}>
                <button
                  type="button"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen((s) => !s)}
                  className={`hdr-ham${mobileOpen ? " open" : ""}`}
                >
                  <span className="bars" aria-hidden="true">
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                  </span>
                </button>

                {mobileOpen && (
                  <div className="mob-drop" role="menu">
                    <p className="mob-drop-label">Navigation</p>

                    <a
                      href="https://www.digitalidinnovations.com/"
                      role="menuitem"
                      className="mob-drop-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="mob-dot" />
                      Home
                    </a>

                    <a
                      href="https://www.digitalidinnovations.com/library/"
                      role="menuitem"
                      className="mob-drop-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="mob-dot" />
                      Use Case Library
                    </a>

                    <div className="mob-drop-divider" />
                    <p className="mob-drop-label">Hackathons</p>

                    {hackathons.map((h) => (
                      <a
                        key={h.ID}
                        href={h.URL}
                        role="menuitem"
                        className="mob-drop-item"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="mob-dot" />
                        {h.Title}
                      </a>
                    ))}

                    <div className="mob-drop-divider" />
                    <button
                      type="button"
                      role="menuitem"
                      className="mob-drop-item"
                      style={{ background: "#1F3A6D", color: "#ffffff", fontWeight: 600 }}
                      onClick={() => {
                        setMobileOpen(false);
                        setContactOpen(true);
                      }}
                    >
                      <span className="mob-dot" style={{ background: "#ffffff" }} />
                      Contact Us
                    </button>
                  </div>
                )}
              </div>

              {/* Contact Us — desktop only */}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setContactOpen(true);
                }}
                className="hdr-cta"
              >
                Contact Us
              </button>
            </div>

          </nav>
        </div>
      </header>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
