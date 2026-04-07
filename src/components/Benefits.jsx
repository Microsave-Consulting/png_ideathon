export default function Benefits() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
      <style>{`
        .rectangle-3 {
          width: 100%;
          background-color: #f7f9fb;
          padding: 3rem 0;
        }

        .benefits-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        /* ── Heading ── */
        .ben-frame-23 {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .ben-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          margin: 0;
        }

        .ben-subtitle {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        /*
         * ── All 5 cards in one grid ──
         * Desktop 3-col:  row1 = 1,2,3  |  row2 = 4,5 (cols 1–2, col 3 empty)
         * Mid     2-col:  row1 = 1,2  |  row2 = 3,4  |  row3 = 5 full-width
         * Mobile  1-col:  stacked
         */
        .ben-grid-all {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        /* Pin cards 4 & 5 to columns 1–2 so col 3 stays empty on desktop */
        .ben-card-4 { grid-column: 1; }
        .ben-card-5 { grid-column: 2; }

        /* ── Benefit card ── */
        .ben-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
        }

        .ben-card-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .ben-card-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1rem;
          margin: 0;
        }

        .ben-card-desc {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
        }

        /* ── Icon circle ── */
        .ben-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.25rem;
          height: 3.25rem;
          padding: 0.75rem;
          background-color: #eab05c;
          border-radius: 100px;
          overflow: hidden;
          flex-shrink: 0;
          box-sizing: border-box;
        }

        .ben-icon img {
          width: 1.75rem;
          height: 1.75rem;
          object-fit: contain;
        }

        /* ── Recognition banner ── */
        .ben-banner {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #fff6e9;
          border-radius: 0.75rem;
          border: 1px solid #eab05c;
          box-sizing: border-box;
        }

        .ben-banner-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .ben-banner-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.125rem;
          margin: 0;
        }

        .ben-banner-row {
          display: inline-flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .ben-dot {
          width: 0.5rem;
          height: 0.5rem;
          min-width: 0.5rem;
          background-color: #eab05c;
          border-radius: 50%;
          margin-top: 0.4rem;
          flex-shrink: 0;
        }

        .ben-banner-text {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 1rem;
          line-height: 1.5;
          white-space: normal;
          margin: 0;
        }

        /* ── Responsive ── */

        /* Mid breakpoint: switch to 2-col, reset explicit placement,
           cards flow 1,2 / 3,4 / 5 — card 5 spans full width (no orphan gap) */
        @media (max-width: 64rem) {
          .ben-grid-all { grid-template-columns: repeat(2, 1fr); }
          .ben-card-4 { grid-column: auto; }
          .ben-card-5 { grid-column: auto; }
          /* Card 5 lands alone on row 3 — make it full width instead of half */
          .ben-grid-all > .ben-card:last-child:nth-child(odd) {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 48rem) {
          .ben-grid-all { grid-template-columns: 1fr; }
          /* Reset full-width span — single col so every card is already full width */
          .ben-grid-all > .ben-card:last-child:nth-child(odd) { grid-column: auto; }
          .ben-title { font-size: 1.375rem; }
        }

        @media (max-width: 37.5rem) {
          .rectangle-3 { padding: 2rem 0; }
          .ben-title { font-size: 1.25rem; }
          .ben-card { padding: 1.25rem; }
          .ben-banner { padding: 1.25rem; }
        }
      `}</style>

      <div className="rectangle-3">
        <div className="benefits-inner">
          {/* Heading */}
          <div className="ben-frame-23">
            <p className="ben-title">Discover the benefits of this Ideathon</p>
            <p className="ben-subtitle">
              Contribution to Papua New Guinea's digital transformation will
              help you gain
            </p>
          </div>

          {/* All 5 benefit cards — single unified grid */}
          <div className="ben-grid-all">
            <div className="ben-card">
              <div className="ben-icon">
                <img
                  src={`${basePath}/img/valuable-experience.svg`}
                  alt="Valuable Experience"
                />
              </div>
              <div className="ben-card-text">
                <p className="ben-card-title">Valuable Experience</p>
                <p className="ben-card-desc">
                  Develop skills in digital ID technology and application
                  development
                </p>
              </div>
            </div>

            <div className="ben-card">
              <div className="ben-icon">
                <img src={`${basePath}/img/mentor2.svg`} alt="Expert Mentorship" />
              </div>
              <div className="ben-card-text">
                <p className="ben-card-title">Expert Mentorship</p>
                <p className="ben-card-desc">
                  Receive guidance from DICT officials, MSC consultants, and
                  industry leaders
                </p>
              </div>
            </div>

            <div className="ben-card">
              <div className="ben-icon">
                <img src={`${basePath}/img/vector-19.svg`} alt="Networking" />
              </div>
              <div className="ben-card-text">
                <p className="ben-card-title">Networking</p>
                <p className="ben-card-desc">
                  Connect with the country's digital ecosystem and potential
                  future employers or partners
                </p>
              </div>
            </div>

            <div className="ben-card ben-card-4">
              <div className="ben-icon">
                <img src={`${basePath}/img/recognition.svg`} alt="Recognition" />
              </div>
              <div className="ben-card-text">
                <p className="ben-card-title">Recognition</p>
                <p className="ben-card-desc">
                  National visibility during DTS25 and potential government
                  pilot opportunities
                </p>
              </div>
            </div>

            <div className="ben-card ben-card-5">
              <div className="ben-icon">
                <img src={`${basePath}/img/vector-17.svg`} alt="Skills Development" />
              </div>
              <div className="ben-card-text">
                <p className="ben-card-title">Skills Development</p>
                <p className="ben-card-desc">
                  Technical training in digital identity systems and public
                  service innovation
                </p>
              </div>
            </div>
          </div>

          {/* Recognition banner */}
          <div className="ben-banner">
            <div className="ben-banner-header">
              <div className="ben-icon">
                <img src={`${basePath}/img/recognition-2.svg`} alt="Recognition" />
              </div>
              <p className="ben-banner-title">Recognition</p>
            </div>
            <div className="ben-banner-row">
              <div className="ben-dot"></div>
              <p className="ben-banner-text">
                All the participants who reach the final stage will receive
                certificates of participation and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
