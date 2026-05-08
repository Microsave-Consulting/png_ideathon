export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div >
      <img
        src={`${basePath}/banner_png.svg`}  
        alt="PNG Ideathon"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  );
}