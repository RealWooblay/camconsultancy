"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import PortfolioTrain from "./portfolio.train"

export function ThePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header className="w-full bg-gray-900 text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="text-lg font-bold" href="#">
            Acme Consultancy
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link className="hover:underline" href="#home">
              Home
            </Link>
            <Link className="hover:underline" href="#services">
              Services
            </Link>
            <Link className="hover:underline" href="#team">
              Team
            </Link>
            <Link className="hover:underline" href="#approach">
              Approach
            </Link>
            <Link className="hover:underline" href="#contact">
              Contact
            </Link>
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
          <nav className="md:hidden">
            <Link className="block py-2 px-4 hover:bg-gray-800" href="#home">
              Home
            </Link>
            <Link className="block py-2 px-4 hover:bg-gray-800" href="#services">
              Services
            </Link>
            <Link className="block py-2 px-4 hover:bg-gray-800" href="#team">
              Team
            </Link>
            <Link className="block py-2 px-4 hover:bg-gray-800" href="#approach">
              Approach
            </Link>
            <Link className="block py-2 px-4 hover:bg-gray-800" href="#contact">
              Contact
            </Link>
          </nav>
        )}
      </header>
      <main>
        <section className="relative h-[500px] w-full overflow-hidden" id="home">
          <img
            alt=""
            className="object-cover"
            fill
            src="/techhex.png" />
          <div
            className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl">Transforming Businesses</h1>
          </div>
        </section>
        <section className="py-12 md:py-24" id="services">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <BriefcaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="mt-4 text-lg font-bold">Strategy Consulting</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We help businesses develop and implement effective strategies to achieve their goals.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <BarChartIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="mt-4 text-lg font-bold">Data Analytics</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We leverage data to provide insights and drive informed decision-making.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <CogIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="mt-4 text-lg font-bold">Process Optimization</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We help businesses streamline their operations and improve efficiency.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <LightbulbIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="mt-4 text-lg font-bold">Innovation Consulting</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We assist businesses in developing and implementing innovative solutions.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <UsersIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="mt-4 text-lg font-bold">Change Management</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We help businesses navigate and adapt to organizational changes.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <RocketIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="mt-4 text-lg font-bold">Growth Acceleration</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We assist businesses in achieving sustainable growth and expansion.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24" id="team">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <img
                  alt="Team Member"
                  className="rounded-lg"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/400",
                    objectFit: "cover",
                  }}
                  width={300} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Meet Our Team</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Our team of experienced consultants is dedicated to helping businesses achieve their goals. Get to
                  know our lead consultant, Jane Doe.
                </p>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold">Jane Doe</h3>
                    <div className="mt-2 flex space-x-4">
                      <Link
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="#">
                        <LinkedinIcon className="h-6 w-6" />
                      </Link>
                      <Link
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="#">
                        <TwitterIcon className="h-6 w-6" />
                      </Link>
                      <Link
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="#">
                        <GithubIcon className="h-6 w-6" />
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Jane is our lead consultant with over 10 years of experience in the industry. She has a proven track
                  record of helping businesses achieve their goals through strategic planning, data-driven
                  decision-making, and effective change management.
                </p>
              </div>
            </div>
          </div>
          <PortfolioTrain />
        </section>
        <section className="py-12 md:py-24 bg-gray-100 dark:bg-gray-800" id="approach">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold">Our Approach</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                <LightbulbIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="mt-4 text-lg font-bold">Innovative Solutions</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We develop creative and innovative solutions to help our clients achieve their goals.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                <BarChartIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="mt-4 text-lg font-bold">Data-Driven Insights</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We leverage data and analytics to provide our clients with actionable insights.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                <UsersIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="mt-4 text-lg font-bold">Collaborative Approach</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We work closely with our clients to ensure a seamless and successful engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24" id="contact">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <p className="text-gray-500 dark:text-gray-400">
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
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Contact"
                  className="rounded-lg"
                  height={400}
                  src="/contact-image.jpg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold">About Us</h3>
              <p className="mt-4 text-gray-400">
                Acme Consultancy is a leading provider of strategic consulting services. We help businesses achieve
                their goals through innovative solutions and data-driven insights.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Quick Links</h3>
              <nav className="mt-4 space-y-2">
                <Link className="text-gray-400 hover:text-white" href="#">
                  Home
                </Link>
                <Link className="text-gray-400 hover:text-white" href="#">
                  Services
                </Link>
                <Link className="text-gray-400 hover:text-white" href="#">
                  Team
                </Link>
                <Link className="text-gray-400 hover:text-white" href="#">
                  Approach
                </Link>
                <Link className="text-gray-400 hover:text-white" href="#">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-bold">Contact Us</h3>
              <p className="mt-4 text-gray-400">
                123 Main Street, Anytown USA
                <br />
                Phone: (123) 456-7890
                <br />
                Email: info@acmeconsultancy.com
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
            © 2024 Cam Consultancy. All rights reserved.
          </div>
        </div>
      </footer>
    </>);
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


function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
  );
}


function CogIcon(props) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
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


function LinkedinIcon(props) {
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
