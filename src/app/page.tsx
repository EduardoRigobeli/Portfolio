import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-full h-full object-cover -z-10">
          <source src="/video/FundoTerra.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10">
        <Header />
      </div>
    </div>
  );
}
