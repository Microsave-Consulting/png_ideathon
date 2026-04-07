export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
      <style>{`
        .hero-section {
          width: 100%;
          background-color: #303b6e;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 5rem 5% 3.5rem;
          box-sizing: border-box;
        }

        .hero-overlap {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          width: 100%;
        }

        .hero-graphic {
          flex: 1 1 50%;
          max-width: 50%;
          display: block;
          width: 100%;
          height: auto;
        }

        .hero-map {
          flex: 1 1 50%;
          max-width: 50%;
          display: block;
          width: 100%;
          height: auto;
        }

        .hero-p {
          margin: 0;
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #ffffff;
          font-size: 1.5rem;
          line-height: 1.4;
          white-space: normal;
          max-width: 40rem;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          border-radius: 0.75rem;
          box-shadow: 0px 0px 6.2px #8c8c8c52;
          background: #ffffff;
          cursor: pointer;
          text-decoration: none;
        }

        .hero-btn-text {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #303b6e;
          font-size: 1.25rem;
          line-height: 1.3;
          white-space: nowrap;
        }

        .hero-btn-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 64rem) {
          .hero-section { padding: 4rem 5% 3rem; gap: 1.25rem; }
          .hero-overlap { gap: 1.5rem; }
        }

        @media (max-width: 48rem) {
          .hero-section { padding: 3rem 5% 2.5rem; }
          .hero-overlap { gap: 1rem; }
          .hero-p { font-size: 1.125rem; }
          .hero-btn-text { font-size: 1rem; }
        }

        @media (max-width: 37.5rem) {
          .hero-section { padding: 2.5rem 5% 2rem; gap: 1rem; }
          .hero-overlap {
            flex-direction: column;
            gap: 1rem;
          }
          .hero-graphic,
          .hero-map {
            max-width: 100%;
            flex: none;
          }
          .hero-p { font-size: 1rem; }
        }
      `}</style>

      <div className="hero-section">
        <div className="hero-overlap">
          <img
            className="hero-graphic"
            src={`${basePath}/img/group-119.svg`}
            alt="ideathon graphic"
          />
          <img className="hero-map" src={`${basePath}/img/png-map.svg`} alt="PNG map" />
        </div>
        <p className="hero-p">Driving Digital Inclusion Through SevisPass</p>
        <a href="#ideathon-journey" className="hero-btn">
          <span className="hero-btn-text">More Details</span>
          <img
            className="hero-btn-icon"
            src={`${basePath}/img/arrow-right-alt.svg`}
            alt="arrow"
          />
        </a>
      </div>
    </>
  );
}
