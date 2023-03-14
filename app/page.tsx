export default function Home() {
  return (
    <main className="">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-xl sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Profile Portrait"
                src="banner.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Welcome!
              </h2>

              <p className="mt-4 text-gray-600 text-justify">
                As an aspiring young web developer graduating this spring with a
                BBA in Management Information Systems, I am excited to showcase
                my skills and accomplishments. With a passion for creating
                innovative and user-friendly web designs, I have developed a
                diverse range of projects that demonstrate my technical
                expertise and creative abilities. From designing responsive and
                visually appealing websites to developing custom web
                applications, my portfolio showcases my proficiency in HTML,
                CSS, JavaScript, and other web technologies. I take pride in
                crafting intuitive and engaging user experiences that bring
                brands to life and drive engagement. With a strong foundation in
                project management and a keen eye for detail, I am committed to
                delivering high-quality work on time and within budget. Whether
                you are looking to revamp your website, build a custom web
                application, or launch a new digital project, I am ready to
                bring my skills and expertise to the table. Please take a moment
                to browse my portfolio and see some of the projects I have
                worked on. If you have any questions or would like to discuss a
                potential project, don't hesitate to get in touch. Thank you for
                visiting my portfolio. I look forward to hearing from you soon!
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section></section>
    </main>
  );
}
