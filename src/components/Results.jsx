"use client";

import { useState } from "react";

const JUDGES = [
  {
    name: "Dominic Meoli",
    role: "First Secretary, Australian High Commission",
    linkedin: "https://www.linkedin.com/in/dominic-meoli-6111b429a/",
  },
  {
    name: "Russel Harada",
    role: "Director ICTS, PNG University of Technology",
    linkedin: "https://www.linkedin.com/in/russell-harada-3a087a3a/",
  },
  {
    name: "Josuah Honnes",
    role: "Digital Transformation & Web Solution Developer, Department of ICT",
    linkedin: "https://www.linkedin.com/in/joshua-honnes-a9668ba2/",
  },
];

export default function Results() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <style>{`
        .results-section {
          width: 100%;
          background-color: #f7f9fb;
          padding: 3rem 0;
        }

        .results-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        /* ── Heading ── */
        .results-heading {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .results-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          margin: 0;
        }

        .results-subtitle {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Judges card ── */
        .results-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
          margin-bottom: 1.5rem;
        }

        .results-judge-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .results-judge-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .results-judge-number {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.5;
          flex-shrink: 0;
          min-width: 1.25rem;
        }

        .results-judge-text {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
        }

        .results-judge-link {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #2d488d;
          text-decoration: underline;
          text-underline-offset: 2px;
          cursor: pointer;
          transition: color 0.2s;
        }
        .results-judge-link:hover {
          color: #eab05c;
        }

        /* ── See Result button ── */
        .results-btn-wrap {
          display: flex;
        }

        .results-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background-color: #2d488d;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .results-btn:hover {
          background-color: #1e3266;
        }

        .results-btn-text {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #ffffff;
          font-size: 1rem;
          white-space: nowrap;
        }

        .results-btn-arrow {
          width: 1.125rem;
          height: 1.125rem;
          stroke: #ffffff;
          stroke-width: 2.4;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          flex-shrink: 0;
        }

        /* ── Modal overlay ── */
        .results-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1.25rem;
          box-sizing: border-box;
        }

        /* Modal — never wider than viewport, never taller than viewport */
        .results-modal {
          position: relative;
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          width: 100%;
          max-width: min(56rem, calc(100vw - 2.5rem));
          max-height: calc(100vh - 2.5rem);
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        /* Scrollable image wrapper so tall images don't overflow on small screens */
        .results-modal-img-wrap {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          flex: 1;
          min-height: 0;
        }

        .results-modal-img-wrap img {
          width: 100%;
          height: auto;
          display: block;
        }

        .results-modal-close {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          flex-shrink: 0;
          z-index: 10;
        }
        .results-modal-close:hover {
          background: rgba(0, 0, 0, 0.75);
        }
        .results-modal-close svg {
          width: 1rem;
          height: 1rem;
          stroke: #ffffff;
          stroke-width: 2.5;
          fill: none;
          stroke-linecap: round;
        }

        /* ── Responsive ── */
        @media (max-width: 48rem) {
          .results-title { font-size: 1.375rem; }
        }
        @media (max-width: 37.5rem) {
          .results-section { padding: 2rem 0; }
          .results-title { font-size: 1.25rem; }
          .results-card { padding: 1.25rem; }
          .results-overlay { padding: 0.75rem; }
          .results-modal {
            max-width: calc(100vw - 1.5rem);
            max-height: calc(100vh - 1.5rem);
            border-radius: 0.75rem;
          }
        }
      `}</style>

      <div className="results-section">
        <div className="results-inner">
          {/* Heading */}
          <div className="results-heading">
            <p className="results-title">Final Results</p>
          </div>

          {/* Judges card */}
          <div className="results-card">
            <p className="results-subtitle">
              Eight shortlisted teams from phase 1 presented their final ideas
              to an esteemed panel on the sidelines of the fourth PNG Digital
              Transformation Summit, 2025, in Port Moresby. The judging panel
              includes:
            </p>
            <div className="results-judge-list">
              {JUDGES.map((judge, i) => (
                <div className="results-judge-item" key={i}>
                  <span className="results-judge-number">{i + 1}.</span>
                  <p className="results-judge-text">
                    <a
                      className="results-judge-link"
                      href={judge.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {judge.name}
                    </a>
                    {", "}
                    {judge.role}
                  </p>
                </div>
              ))}
            </div>

            <p className="results-subtitle">
              From the top teams, the judges selected the two winners
              based on the innovation, creativity, practicality, and scalability
              of their ideas.
            </p>

            {/* See Result button */}
            <div className="results-btn-wrap">
              <button
                className="results-btn"
                onClick={() => setModalOpen(true)}
              >
                <span className="results-btn-text">See Result</span>
                <svg className="results-btn-arrow" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="results-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="results-modal">
            <button
              className="results-modal-close"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="results-modal-img-wrap">
              <img
                src={`${basePath}/img/winner.jpg`}
                alt="PNG National Digital ID Ideathon Winners"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
