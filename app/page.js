"use client";
import { IoPersonCircle } from "react-icons/io5";
import { AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import { BsFillMoonStarsFill} from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Head from "next/head";
import './globals.css'
import Image from "next/image";
import deved from '/public/dev-ed-wave.png'
import avatar from '/public/avatar.jpg'
import design from '/public/design.png'
import code from '/public/code.png'
import data from '/public/data.png'
import wa1 from "../public/wa1.jpg";
import wa2 from "../public/wa2.jpg";
import wa3 from "../public/wa3.jpg";
import wa4 from "../public/wa4.jpg";
import wapp1 from "../public/wapp1.png";
import wapp2 from "../public/wapp2.png";
import figma1 from "../public/figma1.png";
import figma2 from "../public/figma2.png";
import p1 from "../public/Picture1.png";
import p2 from "../public/Picture2.png";
import p3 from "../public/Picture3.png";
import p4 from "../public/Picture4.png";
import p5 from "../public/Picture5.png";
import p6 from "../public/Picture6.png";
import p7 from "../public/Picture7.png";
import p8 from "../public/Picture8.png";
import p9 from "../public/Picture9.png";

import {useState } from 'react';
import {MdEmail} from "react-icons/md";




export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
  return (
      <div className={darkMode ? 'dark' : ''}>
          <main className='bg-cyan-50 px-10 md:px-20 lg:px-52 dark:bg-gray-800'>
              <section className='min-h-screen '>
                  <nav className='py-10 mb-12 flex justify-between'>
                      <h1 className='justify-center items-center flex underline decoration-double text-xl font-burtons dark:text-cyan-300'>
                          MY PORTFOLIO</h1>
                      <ul className='flex items-center'>
                          <li><BsFillMoonStarsFill
                              onClick={()=>setDarkMode(!darkMode)}
                              className='text-blue-800 hover:text-blue-900 cursor-pointer text-2xl dark:text-cyan-100 dark:hover:text-cyan-50'/>
                          </li>
                          <li className='bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-300 hover:to-blue-700 text-white px-4 py-2 rounded-md ml-8 dark:bg-gradient-to-r from-cyan-700 to-blue-500 hover:from-cyan-900 hover:to-blue-700'><a href="https://github.com/VladoJakovleski?tab=projects" target="_blank" rel="noopener noreferrer">Projects</a>
                          </li>
                      </ul>
                  </nav>
                  <div className='text-center p-10'>
                      <h2 className='hover:underline decoration-cyan-200 text-5xl py-2 text-cyan-500 md:text-6xl lg:text-7xl dark:hover:underline dark:decoration-blue-950'>Vlado Jakovleski</h2>
                      <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer & Designer</h3>
                      <p className='text-sm py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-cyan-200'>
                          A student enrolled at the University of St. Paul the Apostle in Ohrid, pursuing studies within the Faculty of Information and Communication Sciences in Business and Management.
                      </p>
                  </div>
                  <div className='mx-auto mb-10 mt-6 items-center justify-center relative bg-gradient-to-b from-blue-400 rounded-full w-80 h-80 overflow-hidden'>
                      <Image src={avatar} layout='fill' objectFit='cover'/>
                  </div>
                  <div className='text-5xl mb-16 flex justify-center gap-16 py-3 text-blue-950 dark:text-cyan-100'>
                      <a href="https://www.linkedin.com/in/vlado-jakovleski-963a37174/" target="_blank" rel="noopener noreferrer">
                          <AiFillLinkedin/>
                      </a>
                      <a href="mailto:vlado.jakovleski@ita.uist.edu.mk" target="_blank" rel="noopener noreferrer">
                          <MdEmail />
                      </a>
                      <a href="https://github.com/VladoJakovleski" target="_blank" rel="noopener noreferrer">
                          <FaGithub />
                      </a>
                      <a href="https://www.instagram.com/vlatko_00" target="_blank" rel="noopener noreferrer">
                          <AiFillInstagram />
                      </a>
                  </div>
              </section>
              <section>
                  <div>
                      <h3 className='text-3xl py-1 dark:text-cyan-500'>
                          Technical and creative skills
                      </h3>
                      <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                          I have a broad range of skills that include a high level of proficiency in English language,
                          along with expertise in various programming languages such as
                          <span className="text-cyan-500"> C, C++, Python, React JS, React Native, Next JS, HTML, CSS, SQL, NoSQL</span> and etc.
                      </p>
                      <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                          My creative capabilities extend to graphic design using
                          <span className="text-cyan-500"> Figma</span>, photo editing with
                          <span className="text-cyan-500"> Adobe Photoshop</span> and
                          <span className="text-cyan-500"> Lightroom</span>, and video editing using
                          <span className="text-cyan-500"> Adobe Premiere Pro.</span>
                      </p>
                      <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                          Additionally, I have hands-on experience in utilizing
                          <span className="text-cyan-500">  Microsoft Power BI </span>  and
                          <span className="text-cyan-500"> Microsoft Office </span> tools for data analysis and reporting.
                          Apart from my technical skills, I have experience in
                          <span className="text-cyan-500"> business statistics</span>, helping me analyze data effectively.
                          I also have knowledge in
                          <span className="text-cyan-500"> e-commerce</span>, showing my understanding of both tech and business stuff.
                      </p>
                      <div className="lg:flex gap-10">
                          <div className='lg:w-1/3 bg-gradient-to-br from-cyan-200 to-blue-500 text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gradient-to-br from-cyan-100 to-blue-400'>
                              <div className='flex justify-center items-center'>
                                  <Image src={design} width={100} height={100}/>
                              </div>
                              <h3 className="text-lg font-medium pt-8 pb-2  ">
                                  Design process
                              </h3>
                              <p className="py-2">
                                  Junior web designer with a focus on UX/UI principles. Committed to staying current with industry trends.
                              </p>
                              <h4 className="py-4 text-teal-100">Design Tools I Use</h4>
                              <p className="text-gray-800 py-1">Photoshop</p>
                              <p className="text-gray-800 py-1">Illustrator</p>
                              <p className="text-gray-800 py-1">Figma</p>
                              </div>
                          <div className='lg:w-1/3 bg-gradient-to-br from-cyan-200 to-blue-500 text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gradient-to-br from-cyan-100 to-blue-400'>
                              <div className='flex justify-center items-center'>
                                  <Image src={code} width={100} height={100}/>
                              </div>
                              <h3 className="text-lg font-medium pt-8 pb-2  ">
                                  Coding
                              </h3>
                              <p className="py-2">
                                  Junior frontend developer with a focus on  designing and implementing visually simple and interesting elements that users interact with.
                              </p>
                              <h4 className="py-4 text-teal-100">Languages and Tools I use</h4>
                              <p className="text-gray-800 py-1">JavaScript</p>
                              <p className="text-gray-800 py-1">React Native and ReactJS</p>
                              <p className="text-gray-800 py-1">Next.js</p>
                              <p className="text-gray-800 py-1">Tailwind</p>
                          </div>
                          <div className='lg:w-1/3 bg-gradient-to-br from-cyan-200 to-blue-500 text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gradient-to-br from-cyan-100 to-blue-400'>
                              <div className='flex justify-center items-center'>
                                  <Image src={data} width={100} height={100}/>
                              </div>
                              <h3 className="text-lg font-medium pt-8 pb-2  ">
                                  Data Analysis
                              </h3>
                              <p className="py-2">
                                  Data analyst with expertise in extracting actionable insights from complex datasets.
                                  Proficient in tools like Excel and Power BI for creating impactful reports and dashboards.
                              </p>
                              <h4 className="py-4 text-teal-100">Analysis and Report Tools I Use</h4>
                              <p className="text-gray-800 py-1">Microsoft Power BI</p>
                              <p className="text-gray-800 py-1">Microsoft Office</p>
                          </div>
                      </div>
                  </div>
              </section>
              <section class='projects'>
                  <div className='mt-8'>
                      <h3 className='text-3xl py-1 dark:text-cyan-500'>
                          Projects
                      </h3>
                      <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                          Here are some of my
                          <span className="text-cyan-500"> projects</span>,
                          each representing a distinctive blend of
                          <span className="text-cyan-500"> expertise</span> and
                          <span className="text-cyan-500"> innovation </span>
                          in their respective domains. From implementing robust
                          <span className="text-cyan-500"> data analysis </span>
                          solutions that drive informed decision-making to crafting visually compelling
                          <span className="text-cyan-500"> website designs </span>
                          that enhance user experiences, my portfolio reflects a commitment to excellence and a passion for delivering tangible
                          <span className="text-cyan-500"> results</span>.
                      </p>
                      <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                          Each project
                          <span className="text-cyan-500"> showcases </span>
                          my dedication to combining technical proficiency with a strategic mindset, ensuring
                          <span className="text-cyan-500"> successful outcomes </span>
                          that meet or exceed project objectives.
                      </p>
                  </div>
                  <section className='mt-16'>
                      <div>
                          <div>
                              <h3 className='text-2xl py-1 dark:text-cyan-200'>
                                  Mobile applications
                              </h3>
                          </div>
                          <div className='flex flex-col gap-5 py-10 lg:flex-row lg:flex-auto'>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={wa1}
                                      className='rounded-lg object-cover'
                                      width={'50%'}
                                      height={'50%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={wa3}
                                      className='rounded-lg object-cover'
                                      width={'50%'}
                                      height={'50%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={wa4}
                                      className='rounded-lg object-cover'
                                      width={'50%'}
                                      height={'50%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={wa2}
                                      className='rounded-lg object-cover'
                                      width={'50%'}
                                      height={'50%'}
                                      layout='responsive'/>
                              </div>
                          </div>
                      </div>
                      <div className='mt-16'>
                          <div>
                              <h3 className='text-2xl py-1 dark:text-cyan-200'>
                                      Web applications
                              </h3>
                          </div>
                          <div className='flex flex-col gap-5 py-10 lg:flex-row lg:flex-auto'>
                              <div className='basis-1/4 flex-1'>
                                  <Image
                                      src={wapp1}
                                      className='rounded-lg object-cover'
                                      width={'50%'}
                                      height={'50%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/4 flex-1'>
                                  <Image
                                      src={wapp2}
                                      className='rounded-lg object-cover'
                                      width={'50%'}
                                      height={'50%'}
                                      layout='responsive'/>
                              </div>
                          </div>
                      </div>
                      <div className='mt-16'>
                          <div>
                              <h3 className='text-2xl py-1 dark:text-cyan-200'>
                                  Figma projects
                              </h3>
                          </div>
                          <div className='flex flex-col gap-5 py-10 lg:flex-row lg:flex-auto'>
                              <div className='basis-1/4 flex-1'>
                                  <Image
                                      src={figma1}
                                      className='rounded-lg object-cover'
                                      width={'50%'}
                                      height={'50%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={figma2}
                                      className='rounded-lg object-cover'
                                      width={'50%'}
                                      height={'50%'}
                                      layout='responsive'/>
                              </div>
                          </div>
                      </div>
                      <div className='mt-16'>
                          <div>
                              <h3 className='text-2xl py-1 dark:text-cyan-200'>
                                  Data Analysis and Report Projects
                              </h3>
                          </div>
                          <div className='flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap'>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={p1}
                                      className='rounded-lg object-cover'
                                      width={'100%'}
                                      height={'100%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={p2}
                                      className='rounded-lg object-cover'
                                      width={'100%'}
                                      height={'100%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={p3}
                                      className='rounded-lg object-cover'
                                      width={'100%'}
                                      height={'100%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={p4}
                                      className='rounded-lg object-cover'
                                      width={'100%'}
                                      height={'100%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={p5}
                                      className='rounded-lg object-cover'
                                      width={'100%'}
                                      height={'100%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={p6}
                                      className='rounded-lg object-cover'
                                      width={'100%'}
                                      height={'100%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={p7}
                                      className='rounded-lg object-cover'
                                      width={'100%'}
                                      height={'100%'}
                                      layout='responsive'/>
                              </div>
                              <div className='basis-1/3 flex-1'>
                                  <Image
                                      src={p8}
                                      className='rounded-lg object-cover'
                                      width={'100%'}
                                      height={'100%'}
                                      layout='responsive'/>
                              </div>
                          </div>
                      </div>
                  </section>
              </section>
          </main>

      </div>
  )
}
