"use client";

import GeneralFooter from "@/components/footers/generalFooter";
import MainFooter from "@/components/footers/mainFooter";
import { PiCertificateThin, PiGraduationCapThin } from "react-icons/pi";
import { FaRegFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 py-12"
      >
        {/* Imagem de destaque */}
        <div
          className="w-full h-72 bg-green-200 bg-fixed bg-center bg-cover flex items-center justify-center mb-12"
          style={{
            backgroundImage: "url('/images/about-banner.jpg')",
          }}
        >
          <span className="text-gray-500">My image goes here</span>
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-green-800 mb-4">About me</h2>

        {/* Texto principal */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Hi, I'm Jardel Campos, a passionate user interface (UI) designer and
            web developer.
          </p>
          <p>
            My affinity with technology goes back to childhood, when I was just
            a curious kid who loved taking apart my cars to explore their
            electronic parts. However, at the time, I had no idea that I could
            turn this passion into my career.
          </p>
          <p>
            My journey into the world of technology began to take shape in
            mid-2016, when I decided that I wanted to work online and make a
            difference to people's lives. However, I still hadn't found my true
            passion.
          </p>
          <p>
            It was only last year (2022) that I made the decision to make a
            career transition. Initially, I ventured into full-stack
            development, but it was on the front-end that I discovered UI
            design. This combination of passions made my eyes light up and
            showed me exactly what I was looking for. Since then, I've been
            working to unite these two passions, allowing me to create engaging
            and functional digital experiences while transforming people's
            lives.
          </p>
          <p>
            My relentless pursuit of excellence in the field of design and
            development leads me to constantly explore the latest. I'm immersed
            in books, biographies, articles and often films that explore brand
            representation and digital content, keeping me up to date.
          </p>
          <p>
            I'm a dedicated professional, eager to take on new challenges in the
            job market. At the same time, I'm committed to improving my skills
            through freelance projects, which allow me to continually learn and
            grow.
          </p>
          <p>
            I believe that design is a powerful tool for improving people's
            lives. I am determined to create attractive, accessible and
            functional solutions. When I'm not working on projects, you can find
            me in the park, in a library or coffee shop, soaking up knowledge in
            inspiring books, at the gym or playing sports. These activities keep
            my creativity going.
          </p>
          <p>
            I'm always on the lookout for new and exciting opportunities in the
            field of design and development. If you're interested in
            collaborating on inspiring projects or want to exchange ideas, don't
            hesitate to get in touch. Let's create something amazing together!
          </p>
        </div>

        {/* Cursos e Faculdades */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Courses and Colleges
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-green-700 mb-2">Courses</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <div className="flex gap-4 items-center">
                  <PiCertificateThin className="w-6 h-6 text-green-700" />
                  <p>
                    Start Graphic Course | Graphic Design for Beginners - aug
                    2023 - nov 2023
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <PiCertificateThin className="w-6 h-6 text-green-700" />
                  <p>UX/UI Designer - Imagine School - jun 2023 - mar 2024</p>
                </div>
                <div className="flex gap-4 items-center">
                  <PiCertificateThin className="w-6 h-6 text-green-700" />
                  <p>
                    FullStack Developer - Kenzie Academy Brasil - nov 2022 - nov
                    2023
                  </p>
                </div>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-green-700 mb-2">Colleges</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <div className="flex gap-4 items-center">
                  <PiGraduationCapThin className="w-6 h-6 text-green-700" />
                  <p>
                    {" "}
                    Software Engineering - UniFatecie - dec 2023 - dec 2028{" "}
                  </p>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* Workplaces */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Workplaces
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I'm a dedicated recent graduate, eager to explore new opportunities
            in the job market. As I search for my next professional challenge,
            I'm committed to honing my skills through freelance projects.
          </p>
        </div>

        {/* Download do CV */}
        <div className="my-11 text-center">
          <p className="text-sm text-gray-700 italic">
            Would you like to see my CV?
          </p>
          <a
            href="/files/CV_JardelCampos.pdf"
            target="_blank"
            className="text-green-600 underline text-sm mt-1 inline-block"
            download
          >
            <div className="flex items-center gap-2">
              <p> Download here </p>
              <FaRegFilePdf />
            </div>
          </a>
        </div>
      </motion.div>
      <MainFooter />
      <GeneralFooter />
    </div>
  );
}
