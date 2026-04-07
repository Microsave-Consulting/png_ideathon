export default function IdeathonJourney() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const stages = [
    {
      icon: `${basePath}/img/stage1.svg`,
      stage: "Stage - 1",
      duration: "3 weeks",
      title: "Stage 1: Ideathon launch & submission of ideas",
      date: "3rd November 2025 to 21st November 2025",
      content: (
        <>
          <p className="ij-text">
            This informative online session will inform you about the objectives
            of the Ideathon and guide you through the application process.
          </p>
          <p className="ij-text">
            Digital ID upskilling webinars: We will offer a few comprehensive
            free digital ID upskilling webinars to equip you with the knowledge
            and skills necessary for success. The webinars will be on:
          </p>
          <ul className="ij-list">
            <li>Introduction to the Ideathon, identity, and digital ID;</li>
            <li>
              Role of digital ID in facilitating service delivery in various
              sectors
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: `${basePath}/img/stage2.svg`,
      stage: "Stage - 2",
      duration: "3 days",
      title: "Stage 2: Application Review & Shortlisting",
      date: "21st November 2025 to 22nd November 2025",
      content: (
        <ul className="ij-list">
          <li>
            Once the application window closes, our team of experts will review
            all submitted ideas.
          </li>
          <li>
            Based on their potential impact, innovation, and feasibility, we
            will select five to six high-potential use cases to move forward for
            the next stage.
          </li>
          <li>Shortlisted teams will be notified by 22nd November 2025.</li>
        </ul>
      ),
    },
    {
      icon: `${basePath}/img/vector-8.svg`,
      stage: "Stage - 3",
      duration: "2 days",
      title: "Stage 3: In-Person Development & Mentorship",
      date: "25th November 2025 to 26th November 2025 at Stanley Hotel, Port Moresby",
      content: (
        <ul className="ij-list">
          <li>
            Get ready to dive deep into development and refinement! Selected
            teams will participate in the intensive two-day in-person Ideathon.
          </li>
          <li>
            You won't be alone on this journey. Our team of industry experts
            will offer invaluable mentorship and support.
          </li>
          <li>
            Teams will have access to technical resources, SevisPass
            documentation, and a dedicated workspace at the venue.
          </li>
          <li>Daily check-ins with mentors and progress presentations.</li>
        </ul>
      ),
    },
    {
      icon: `${basePath}/img/stage4.svg`,
      stage: "Stage - 4",
      duration: "Final Day",
      title: "Stage 4: Final Presentations & Awards",
      date: "27th November 2025",
      content: (
        <ul className="ij-list">
          <li>
            The event will conclude with final presentations at the Digital
            Transformation Summit (DTS25).
          </li>
          <li>
            The top teams will have the opportunity to showcase their innovative
            solutions for the SevisPass in front of a live audience of
            government officials, private sector leaders, and international
            experts.
          </li>
          <li>
            The DICT and MSC will recognize and celebrate the most innovative
            solutions that can potentially transform digital service delivery
            through digital ID in Papua New Guinea at the final award ceremony.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .ij-section {
          width: 100%;
          background-color: #ffffff;
          padding: 3rem 0 3.5rem;
        }

        /* Same 5% padding as all other sections */
        .ij-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        /* Left-aligned heading — matches screenshot */
        .ij-heading {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          text-align: center;
          margin: 0 0 2rem;
        }

        /* ── Timeline container ──
           Icon diameter  : 3.25rem  (~52px at 16px base)
           Icon centre    : 1.625rem from left of .ij-timeline
           Card left gap  : 1.25rem after icon
           So cards start : 3.25rem + 1.25rem = 4.5rem from left
        */
        .ij-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-left: 4.5rem;
        }

        /* Vertical line through icon centres */
        .ij-timeline::before {
          content: "";
          position: absolute;
          left: 1.625rem;          /* icon centre */
          top: 1.625rem;           /* start at first icon centre */
          bottom: 1.625rem;        /* end at last icon centre */
          width: 1.5px;
          background-color: #e0d5c4;
          transform: translateX(-50%);
        }

        /* ── Each row: icon is absolute, card fills remaining width ── */
        .ij-row {
          position: relative;
          display: flex;
          align-items: flex-start;
        }

        /* Amber icon circle */
        .ij-icon {
          position: absolute;
          left: -4.5rem;           /* pull back to timeline left */
          top: 1rem;               /* align with badge row */
          width: 3.25rem;
          height: 3.25rem;
          background-color: #eab05c;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 1;
          box-sizing: border-box;
        }

        .ij-icon img {
          width: 1.625rem;
          height: 1.625rem;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        /* ── Stage card ── */
        .ij-card {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 1rem;
          border: 1px solid #f4f4f4;
          box-shadow: 0 0.0625rem 0.5rem rgba(0, 0, 0, 0.04);
          box-sizing: border-box;
        }

        /* ── Badges ── */
        .ij-badges {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          flex-wrap: wrap;
        }

        .ij-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.375rem 0.875rem;
          background-color: #ffeacd;
          border-radius: 2rem;
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #000000;
          font-size: 0.875rem;
          white-space: nowrap;
        }

        /* ── Card content ── */
        .ij-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .ij-card-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1rem;
          line-height: 1.4;
          margin: 0;
        }

        .ij-card-date {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 0.9375rem;
          line-height: 1.5;
          margin: 0;
        }

        .ij-text {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #555555;
          font-size: 0.9375rem;
          line-height: 1.65;
          margin: 0;
        }

        .ij-list {
          list-style-type: disc;
          list-style-position: outside;
          margin: 0.25rem 0 0 1.25rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .ij-list li {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 0.9375rem;
          line-height: 1.65;
        }

        /* ── Responsive ── */
        @media (max-width: 48rem) {
          .ij-heading { font-size: 1.375rem; }
          .ij-timeline {
            padding-left: 3.75rem;
          }
          .ij-timeline::before { left: 1.25rem; }
          .ij-icon {
            left: -3.75rem;
            width: 2.75rem;
            height: 2.75rem;
          }
          .ij-icon img { width: 1.375rem; height: 1.375rem; }
        }

        @media (max-width: 37.5rem) {
          .ij-section  { padding: 2rem 0 2.5rem; }
          .ij-heading  { font-size: 1.25rem; margin-bottom: 1.5rem; }
          .ij-timeline { padding-left: 3.25rem; gap: 1.125rem; }
          .ij-timeline::before { left: 1rem; }
          .ij-icon {
            left: -3.25rem;
            width: 2.25rem;
            height: 2.25rem;
            top: 0.875rem;
          }
          .ij-icon img { width: 1.125rem; height: 1.125rem; }
          .ij-card { padding: 1rem; }
          .ij-card-title { font-size: 0.9375rem; }
        }
      `}</style>

      <div className="ij-section" id="ideathon-journey">
        <div className="ij-inner">
          <p className="ij-heading">The Ideathon Journey</p>

          <div className="ij-timeline">
            {stages.map((s, i) => (
              <div className="ij-row" key={i}>
                <div className="ij-icon">
                  <img src={s.icon} alt={`Stage ${i + 1}`} />
                </div>
                <div className="ij-card">
                  <div className="ij-badges">
                    <span className="ij-badge">{s.stage}</span>
                    <span className="ij-badge">{s.duration}</span>
                  </div>
                  <div className="ij-card-body">
                    <p className="ij-card-title">{s.title}</p>
                    <p className="ij-card-date">{s.date}</p>
                    {s.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
