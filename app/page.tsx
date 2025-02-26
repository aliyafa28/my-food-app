import BagianUtama from "./components/bagianUtama";
import Kategori from "./components/kategori";
import Trending from "./components/trending";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 z-0 h-screen"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url(/images/background.png)",
          opacity: 0.1,
        }}
      />
      <div className="relative z-10">
        <BagianUtama />
      </div>
      <Kategori />
      <Trending />
      <Footer />
    </div>
  );
}
