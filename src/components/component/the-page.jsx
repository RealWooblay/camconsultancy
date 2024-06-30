"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import HighlightedOffering from "./highligted-offering"
import Image from "next/image"
import { Link as ScrollLink, Element } from "react-scroll"

export function ThePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <main className="">
      <header className="w-full bg-red-900 text-customWhite">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
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
          <nav className="md:hidden text-customWhite">
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
            src="/techhex.png" />
          <div
            className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
            <h1 className="text-4xl font-bold  md:text-6xl">Transforming Businesses</h1>
          </div>
        </Element>
        <Element className="py-8 md:py-16 text-customWhite bg-customGray" id="team">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <Image
                  alt="Team Member"
                  className="rounded-lg"
                  height={400}
                  src="/team.png"
                  style={{
                    aspectRatio: "300/400",
                    objectFit: "contain",
                  }}
                  width={400} />
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <h2 className="text-3xl font-bold">Experienced and Dedicated Team</h2>
                  <p className="mt-4  ">
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
            <h2 className="text-3xl font-bold">Our Approach</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-red-900 p-6 shadow-md ">
                <LightbulbIcon className="h-8 w-8  " />
                <h3 className="mt-4 text-lg font-bold">Innovative Solutions</h3>
                <p className="mt-2  ">
                  We leverage cutting-edge technologies and industry best practices to deliver tailored solutions that drive success for your startup. Our team excels at turning complex challenges into straightforward, effective strategies that propel your business forward.
                </p>
              </div>
              <div className="rounded-lg bg-red-900 p-6 shadow-md ">
                <BarChartIcon className="h-8 w-8  " />
                <h3 className="mt-4 text-lg font-bold">Data-Driven Insights</h3>
                <p className="mt-2  ">
                  Using advanced analytics and data science, we provide actionable insights that inform your strategic decisions. Our data-driven approach ensures that every move you make is backed by solid evidence and predictive intelligence, maximizing your chances of success.
                </p>
              </div>
              <div className="rounded-lg bg-red-900 p-6 shadow-md ">
                <UsersIcon className="h-8 w-8  " />
                <h3 className="mt-4 text-lg font-bold">Collaborative Approach</h3>
                <p className="mt-2  ">
                  We believe in working closely with your team to understand your unique needs and goals. Our collaborative methodology ensures that we are aligned with your vision, fostering a partnership that drives innovation and growth together.
                </p>
              </div>
            </div>
          </div>
        </Element>
        <Element className="py-12 md:py-24 text-customGray bg-customWhite" name="contact">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <p className=" ">
                  Have a project in mind or want to learn more about our services? Fill out the form below and one of
                  our consultants will be in touch with you shortly.
                </p>
                <form className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" required type="text" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="john@example.com" required type="email" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" required rows={5} />
                  </div>
                  <Button className="w-1/4" variant="destructive">
                    Submit
                  </Button>
                </form>
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
              <h3 className="text-lg font-bold">About Us</h3>
              <p className="mt-4">
                Unlock the full potential of your SaaS, web3, or early stage startup with Redbridge Solutions. Our team of experts will guide you through every step of the product development process, from ideation to launch. With our proven strategies and industry insights, we&apos;ll help you build a successful and scalable product that meets the needs of your target audience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Quick ScrollLinks</h3>
              <nav className="mt-4 space-y-2">
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
              <h3 className="text-lg font-bold">Contact Us</h3>
              <p className="mt-4">
                PO Box 195
                Crows Nest NSW 1585
                <br />
                Email: info@acmeconsultancy.com
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
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


function GithubIcon(props) {
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
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
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


function ScrollLinkedinIcon(props) {
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
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
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


function RocketIcon(props) {
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
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path
        d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>)
  );
}


function TwitterIcon(props) {
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
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
