import Image from "next/image";

export default function BagianUtama() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Overlay Background */}
      {/* <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: 'url(/images/background.png)', // Background Image
                    opacity: 0.1, // Opacity untuk membuat background lebih transparan
                }}
            ></div> */}

      {/* Konten Utama */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen">
        {/* Bagian Teks */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-primary">
            Good Food Us Good Mood
          </h1>
          <div className="mt-10 md:mt-0 flex sm:hidden justify-center items-center">
            <Image
              src="/images/salad.png"
              alt="Salad"
              width={400} // Set appropriate width
              height={400} // Set appropriate height
              className="h-72 object-contain"
            />
          </div>
          <p className="text-2xl text-gray-600 mb-8">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/daftar"
              className="bg-primary text-white px-8 py-4 text-xl rounded-full hover:bg-primary"
            >
              Daftar Sekarang
            </a>
            <a
              href="/about"
              className="bg-gray-200 text-gray-800 px-8 py-4 text-xl rounded-full hover:bg-gray-300"
            >
              Tentang Kami
            </a>
          </div>
        </div>

        {/* Bagian Gambar */}
        <div className="md:w-1/2 mt-10 md:mt-0 sm:flex justify-center hidden items-center">
          <Image
            src="/images/salad.png"
            alt="Salad"
            width={400} // Set appropriate width
            height={400} // Set appropriate height
            className="h-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
