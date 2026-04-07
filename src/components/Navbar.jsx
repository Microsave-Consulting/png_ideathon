export default function Navbar() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
      <style>{`
        .nav-bar {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          padding: 16px 85px;
          background-color: #303b6e;
          box-shadow: 0px 4px 4px #d0d0d040;
          box-sizing: border-box;
        }
        .nav-bar .rectangle {
          width: 60px;
          height: 36px;
        }
        .nav-bar .frame {
          display: inline-flex;
          align-items: center;
          justify-content: flex-end;
          gap: 16px;
          transform: rotate(180deg);
        }
        .nav-bar .language {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background-color: #2d488d;
          border-radius: 8px;
          transform: rotate(180deg);
        }
        .nav-bar .lang-inner {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .nav-bar .img {
          width: 20px;
          height: 20px;
        }
        .nav-bar .text-wrapper {
          font-family: "Roboto-Regular", Helvetica;
          font-weight: 400;
          color: #ffffff;
          font-size: 16px;
          white-space: nowrap;
        }
        .nav-bar .theme {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          background-color: #2d488d;
          border-radius: 8px;
          transform: rotate(180deg);
        }
        .nav-bar .wb-sunny {
          width: 24px;
          height: 24px;
          transform: rotate(-180deg);
        }
        @media (max-width: 1024px) {
          .nav-bar { padding: 16px 24px; }
        }
        @media (max-width: 768px) {
          .nav-bar { padding: 12px 16px; }
        }
      `}</style>

      <div className="nav-bar">
        <img className="rectangle" src={`${basePath}/img/rectangle.svg`} alt="logo" />
        <div className="frame">
          
        </div>
      </div>
    </>
  );
}
