export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
      <style>{`
        .footer-section {
          width: 100%;
          background-color: #303b6e;
          padding: 1.25rem 0;
        }

        .footer-inner {
          width: 100%;
          padding: 0 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          gap: 1rem;
        }

        /* ── Left: copyright + logo ── */
        .footer-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .footer-copy {
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #ffffff;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .footer-msc-logo {
          height: 2rem;
          width: auto;
          display: block;
          flex-shrink: 0;
        }

        /* ── Right: follow us + icons ── */
        .footer-right {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .footer-follow {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #ffffff;
          font-size: 0.875rem;
          white-space: nowrap;
        }

        .footer-social {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }
        .footer-social-link:hover {
          opacity: 0.75;
        }

        .footer-icon {
          width: 1.5rem;
          height: 1.5rem;
          display: block;
          filter: brightness(0) invert(1);
        }

        /* ── Responsive ── */
        @media (max-width: 48rem) {
          .footer-inner {
            flex-wrap: wrap;
            gap: 0.75rem;
          }
          .footer-left {
            flex: 1 1 100%;
          }
          .footer-right {
            flex: 1 1 100%;
          }
        }

        @media (max-width: 37.5rem) {
          .footer-section { padding: 1rem 0; }
          .footer-copy { font-size: 0.8125rem; }
          .footer-follow { font-size: 0.8125rem; }
        }
      `}</style>

      <div className="footer-section">
        <div className="footer-inner">
          {/* Left: copyright + MSC logo */}
          <div className="footer-left">
            <span className="footer-copy">
              © {new Date().getFullYear()} Microsave Consulting Pvt Ltd.
            </span>
            <img
              src={`${basePath}/img/rectangle.svg`}
              className="footer-msc-logo"
              alt="MSC Logo"
            />
          </div>

          {/* Right: Follow us + social icons */}
          <div className="footer-right">
            <span className="footer-follow">Follow us</span>
            <div className="footer-social">
              <a
                href="https://x.com/MicroSave"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Twitter"
              >
                <img
                  src={`${basePath}/img/msc-twitter.svg`}
                  className="footer-icon"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/microsave/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <img
                  src={`${basePath}/img/msc-linkedin.svg`}
                  className="footer-icon"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
