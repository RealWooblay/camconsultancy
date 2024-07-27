"use client"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/component/ContactForm"
import { useState } from "react"
import HighlightedOffering from "./highligted-offering"
import Image from "next/image"
import { Link as ScrollLink, Element } from "react-scroll"


export function ThePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main className="">
      <header className="w-full bg-red-900 text-customWhite">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 font-sans">
          <ScrollLink className="text-lg font-bold cursor-pointer" smooth={true} duration={500} to="#">
            Redbridge
          </ScrollLink>
          <nav className="hidden space-x-4 md:flex">
            <ScrollLink className="hover:underline cursor-pointer" to="home" smooth={true} duration={500} >
              Home
            </ScrollLink>
            <ScrollLink className="hover:underline cursor-pointer" to="team" smooth={true} duration={500}>
              Team
            </ScrollLink>
            <ScrollLink className="hover:underline cursor-pointer" to="approach" smooth={true} duration={500}>
              Approach
            </ScrollLink>
            <ScrollLink className="hover:underline cursor-pointer" to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </nav>
          <Button
            className="md:hidden"
            size="sm"
            variant="outline"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
        {isNavOpen && (
          <nav className="md:hidden text-customWhite font-sans">
            <ScrollLink className="block py-2 px-4 hover:bg-gray-800" to="#home" smooth={true} duration={500}>
              Home
            </ScrollLink>
            <ScrollLink className="block py-2 px-4 hover:bg-gray-800" to="#team" smooth={true} duration={500}>
              Team
            </ScrollLink>
            <ScrollLink className="block py-2 px-4 hover:bg-gray-800" to="#approach" smooth={true} duration={500}>
              Approach
            </ScrollLink>
            <ScrollLink className="block py-2 px-4 hover:bg-gray-800" to="#contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </nav>
        )}
      </header>
      <main>
        <Element className="relative h-[500px] w-full overflow-hidden" id="home">
          <Image
            alt=""
            className="object-cover"
            fill
            src="/heroIMG.jpg" />
          <div
            className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
            <h1 className="text-4xl font-bold  md:text-6xl font-roboto">Transforming Businesses</h1>
          </div>
        </Element>
        <Element className="py-8 md:py-16 text-customWhite bg-customGray" id="team">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <Image
                  alt="Team Member"
                  className="rounded-lg"
                  height={450}
                  src="/team.jpg"
                  style={{
                    aspectRatio: "300/400",
                    objectFit: "contain",
                  }}
                  width={450} />
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <h2 className="text-3xl font-roboto">Experienced and Dedicated Team</h2>
                  <p className="mt-4 font-sans">
                    Our team consists of experienced professionals who are passionate about helping startups succeed. With a deep understanding of the SaaS and web3 industries, we bring valuable insights and expertise to every project. We work closely with our clients to ensure their vision is translated into a successful product.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <HighlightedOffering />
        </Element>
        <Element className="py-12 md:py-24 bg-customGray text-customWhite" name="approach">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-roboto">Our Approach</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-red-900 p-6 shadow-lg transform hover:scale-105 transition-transform">
                <LightbulbIcon className="h-8 w-8  " />
                <h3 className="mt-4 text-lg font-roboto">Innovative Solutions</h3>
                <p className="mt-2 font-sans">
                  We leverage cutting-edge technologies and industry best practices to deliver tailored solutions that drive success for your startup. Our team excels at turning complex challenges into straightforward, effective strategies that propel your business forward.
                </p>
              </div>
              <div className="rounded-lg bg-red-900 p-6 shadow-lg transform hover:scale-105 transition-transform">
                <BarChartIcon className="h-8 w-8  " />
                <h3 className="mt-4 text-lg font-roboto">Data-Driven Insights</h3>
                <p className="mt-2 font-sans">
                  Using advanced analytics and data science, we provide actionable insights that inform your strategic decisions. Our data-driven approach ensures that every move you make is backed by solid evidence and predictive intelligence, maximizing your chances of success.
                </p>
              </div>
              <div className="rounded-lg bg-red-900 p-6 shadow-lg transform hover:scale-105 transition-transform">
                <UsersIcon className="h-8 w-8  " />
                <h3 className="mt-4 text-lg font-roboto">Collaborative Approach</h3>
                <p className="mt-2 font-sans">
                  We believe in working closely with your team to understand your unique needs and goals. Our collaborative methodology ensures that we are aligned with your vision, fostering a partnership that drives innovation and growth together.
                </p>
              </div>
            </div>
          </div>
        </Element>
        <Element className="py-12 md:py-24 text-customGray bg-customWhite" name="contact">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <ContactForm />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Contact"
                  className="rounded-lg"
                  height={400}
                  src="/contact-image.png"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400} />
              </div>
            </div>
          </div>
        </Element>
      </main>
      <footer className="bg-customGray text-customWhite">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-roboto">About Us</h3>
              <p className="mt-4 font-sans">
                Unlock the full potential of your SaaS, web3, or early stage startup with Redbridge Solutions. Our team of experts will guide you through every step of the product development process, from ideation to launch. With our proven strategies and industry insights, we&apos;ll help you build a successful and scalable product that meets the needs of your target audience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-roboto">Quick Links</h3>
              <nav className="mt-4 space-y-2 font-sans">
                <ScrollLink className="hover:text-gray-300 cursor-pointer" to="home">
                  Home
                </ScrollLink>
                <ScrollLink className="hover:text-gray-300 pl-2 cursor-pointer" to="team">
                  Team
                </ScrollLink>
                <ScrollLink className="hover:text-gray-300 pl-2 cursor-pointer" to="approach">
                  Approach
                </ScrollLink>
                <ScrollLink className="hover:text-gray-300 pl-2 cursor-pointer" to="contact">
                  Contact
                </ScrollLink>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-roboto">Contact Us</h3>
              <p className="mt-4 font-sans">
                PO Box 195
                Crows Nest NSW 1585
                <br />
                Email: Info@redbridge.com.au
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 font-sans">
            © 2024 Redbridge Solutions Pty Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

function BarChartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>)
  );
}


function LightbulbIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
