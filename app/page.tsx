import { TiSocialLinkedinCircular,TiSocialGithubCircular,TiSocialInstagramCircular} from "react-icons/ti";
export default function Home() {
  return (
    <main className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-700">
      <div class="mx-auto max-w-3xl px-4 py-5 sm:py-12 sm:px-10 lg:py-16 lg:px-8 ">
      <div><img src="profile.webp" alt="Profile Portrait" /></div>
        <div class="flex flex-col bg-white rounded-2xl p-10">
        
          <div class="relative rounded-lg text-center">
            <h1 className="text-5xl font-bold pb-5">Thomas Baptiste III</h1>
            <h2 className="text-3xl font-light">Full Stack Developer</h2>
          </div>
          <div>
            <ul className="flex justify-center gap-6 text-5xl py-10 text-gray-700">
              <li>
               <a href="" className="hover:text-emerald-600 ease-in duration-700"> <TiSocialInstagramCircular/></a>
              </li>
              <li>
               <a href="" className="hover:text-emerald-600 ease-in duration-700"><TiSocialGithubCircular /></a> 
              </li>
              <li>
               <a href="" className="hover:text-emerald-600 ease-in duration-700"><TiSocialLinkedinCircular /></a> 
              </li>
            </ul>
          </div>

          <div className="mt-4 text-gray-600">
            <p>
              Welcome to my portfolio! My name is Thomas Baptiste, and I am a
              young developer with a passion for technology and a drive to
              become a full-stack developer. I will graduate in May and am
              excited to take the next step in my career.
            </p>
            <p>
              <br />
              Throughout my academic journey, I have gained a strong foundation
              in computer science, web development, and programming languages
              like Python, JavaScript, and SQL. I have also completed various
              projects, individually and as part of a team, which have given me
              practical experience in developing web applications and mobile
              apps.
            </p>
            <br />
            <p>
              As a full-stack developer, I aim to utilize my skills to create
              innovative and user-friendly web applications that solve
              real-world problems. I believe in a user-centered approach to
              development, where the end-user is always at the forefront of the
              design process. With a keen eye for detail and a passion for
              creating clean, efficient code, I am confident in delivering
              high-quality products.{" "}
            </p>
            <br />
            <p>
              Thank you for taking the time to visit my portfolio. I am excited
              about the opportunities and look forward to connecting with you
              soon!
            </p>
          </div>


        </div>
      </div>
    </main>
  );
}
