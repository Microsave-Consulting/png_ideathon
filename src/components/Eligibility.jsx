export default function Eligibility() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
      <style>{`
        .eligibility-section {
          width: 100%;
          background-color: #ffffff;
          padding: 3rem 0;
        }

        .eligibility-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        /* ── Heading block ── */
        .el-frame-24 {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .el-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          margin: 0;
        }

        .el-subtitle {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Two eligibility cards ── */
        .el-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
         
        }

        .el-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
        }

        .el-card-header {
          display: inline-flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .el-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .el-card-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.25rem;
          line-height: 1.3;
        }

        .el-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .el-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
        }

        .el-check {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .el-item-text {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 1rem;
          line-height: 1.5;
          white-space: normal;
          word-break: break-word;
          flex: 1;
          min-width: 0;
          margin: 0;
        }

        /* ── The Details heading ── */
        .el-details-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          margin: 0 0 1.5rem;
        }

        /* ── Deadline cards ── */
        .el-deadlines {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .el-deadlines-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .el-deadline-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #f8fafc;
          border-radius: 0.75rem;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
        }

        .el-deadline-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          background-color: #eab05c;
          border-radius: 100px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .el-deadline-icon img {
          width: 1.5rem;
          height: 1.5rem;
        }

        .el-deadline-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
          min-width: 0;
        }

        .el-deadline-label {
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #5f5f5f;
          font-size: 1.125rem;
          white-space: normal;
          overflow-wrap: break-word;
          margin: 0;
        }

        .el-deadline-date {
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #484f53;
          font-size: 1.125rem;
          line-height: 1.4;
          white-space: normal;
          word-break: break-word;
          overflow-wrap: anywhere;
          margin: 0;
        }

        .el-underline {
          text-decoration: underline;
          color: #484f53;
        }

        /* ── Responsive ── */
        @media (max-width: 64rem) {
          .el-deadlines-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 48rem) {
          .el-cards-grid { grid-template-columns: 1fr; }
          .el-title,
          .el-details-title { font-size: 1.375rem; }
        }

        @media (max-width: 37.5rem) {
          .eligibility-section { padding: 2rem 0; }
          .el-title,
          .el-details-title { font-size: 1.25rem; }
          .el-card { padding: 1.25rem; }
          .el-deadline-card { padding: 1.25rem; }
        }
      `}</style>

      <div className="eligibility-section">
        <div className="eligibility-inner">
          {/* ── Eligibility Heading ── */}
          <div className="el-frame-24">
            <p className="el-title">Eligibility Criteria</p>
            <p className="el-subtitle">
              University students, startups, and private sector innovators who
              live in Papua New Guinea are invited to participate in the
              national digital ID
            </p>
          </div>

          {/* ── Two Cards ── */}
          <div className="el-cards-grid">
            {/* Team Composition */}
            <div className="el-card">
              <div className="el-card-header">
                <img className="el-icon" src={`${basePath}/img/vector-9.svg`} alt="" />
                <div className="el-card-title">Team Composition</div>
              </div>
              <div className="el-items">
                <div className="el-item">
                  <img
                    className="el-check"
                    src={`${basePath}/img/check-circle.svg`}
                    alt="check"
                  />
                  <p className="el-item-text">
                    Teams must consist of 3–4 members.
                  </p>
                </div>
                <div className="el-item">
                  <img
                    className="el-check"
                    src={`${basePath}/img/check-circle.svg`}
                    alt="check"
                  />
                  <p className="el-item-text">
                    Participation of female team members is encouraged.
                  </p>
                </div>
              </div>
            </div>

            {/* Eligible Participants */}
            <div className="el-card">
              <div className="el-card-header">
                <img className="el-icon" src={`${basePath}/img/eligible-part.svg`} alt="" />
                <div className="el-card-title">Eligible Participants</div>
              </div>
              <div className="el-items">
                <div className="el-item">
                  <img
                    className="el-check"
                    src={`${basePath}/img/check-circle.svg`}
                    alt="check"
                  />
                  <p className="el-item-text">Startups</p>
                </div>
                <div className="el-item">
                  <img
                    className="el-check"
                    src={`${basePath}/img/check-circle.svg`}
                    alt="check"
                  />
                  <p className="el-item-text">University students</p>
                </div>
                <div className="el-item">
                  <img
                    className="el-check"
                    src={`${basePath}/img/check-circle.svg`}
                    alt="check"
                  />
                  <p className="el-item-text">
                    Private sector innovators residing in PNG
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          </div>
        </div>
      
    </>
  );
}
