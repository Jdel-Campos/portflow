import {
  LiaLinkedinIn,
  LiaWhatsapp,
  LiaGithub,
  LiaDribbble,
  LiaBehance,
  LiaEnvelope,
} from "react-icons/lia";

export default function MainFooter() {
  return (
    <div className="bg-gray-200 border-b-2 border-gray-300 pb-12">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-700">Want to collaborate?</p>
          <h3 className="text-3xl font-bold text-green-800 italic">
            Contact me!
          </h3>
        </div>
        <footer className="mt-16 flex  items-center gap-4 text-center text-gray-600 text-sm">
          <div className="flex flex-col items-center">
            {/* Imagem sua */}
            <img
              src="/images/jardel-photo.png"
              alt="Jardel Campos"
              className="w-24 h-24 rounded-2xl border object-cover mb-2"
            />
            <p className="font-semibold">Jardel 'Delkzo' Campos</p>
            <p>Full Stack Developer</p>
          </div>
          <div>
            <div className="text-start pb-6 font-bold">
              <h3>
                Thank you for visiting my portfolio and I hope you enjoyed it!{" "}
              </h3>
            </div>
            {/* Citações */}
            <div className="text-green-700 italic space-y-2 text-start border-l-3">
              <p className="pl-2">
                "It was never luck, it was always God who guided me at the right
                times!"
              </p>
              <p className="pl-2">
                "Everything is a matter of priority. Is your priority today your
                future tomorrow?"
              </p>
            </div>

            {/* Redes Sociais */}
            <div className="flex gap-4 justify-center mt-4">
              <a
                href="https://github.com/"
                target="_blank"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 transform hover:scale-110"
              >
                <LiaLinkedinIn className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 transform hover:scale-110"
              >
                <LiaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 transform hover:scale-110"
              >
                <LiaBehance className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 transform hover:scale-110"
              >
                <LiaDribbble className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 transform hover:scale-110"
              >
                <LiaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 transform hover:scale-110"
              >
                <LiaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
