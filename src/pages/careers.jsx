import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { Header } from '@/components/Header';
export default function Careers() {
  /*
        Code to check if onboarding has been complete
      */

  {
    /* Each person will be an object in an array team */
  }
  const team = [
    {
      personName: 'Pranav Ramesh',
      position: 'Founder, CEO',
      image: '../pranavCTF.jpeg',
      width: '200',
      height: '200',
    },
    {
      personName: 'Raymond Yan',
      position: 'Co-Founder, CTO',
      image: '../Raymond.jpeg',
      width: '200',
    },
    {
      personName: 'Srihari Raman',
      position: 'CFO',
      image: '../srihari.jpg',
      width: '200',
      height: '200',
    },
    {
      personName: 'Mish Adelanwa',
      position: 'Advisor',
      image: '../mish.jpg',
      width: '200',
      height: '200',
    },
    {
      personName: 'Jaiming Wang',
      position: 'Advisor',
      image: '../mish.jpg',
      width: '200',
      height: '200',
    },
    {
      personName: 'Ryan Zanoni',
      position: 'Advisor',
      image: '../mish.jpg',
      width: '200',
      height: '200',
    },
    {
      personName: 'Dax Patel',
      position: 'Advisor',
      image: '../mish.jpg',
      width: '200',
      height: '200',
    },
    {
      personName: 'Ashni Voleti',
      position: 'Advisor',
      image: '../mish.jpg',
      width: '200',
      height: '200',
    },
    {
      personName: 'Abhi Byreddy',
      position: 'Advisor',
      image: '../mish.jpg',
      width: '200',
      height: '200',
    },
    {
      personName: 'Almond Milk',
      position: 'Advisor',
      image: '../mish.jpg',
      width: '200',
      height: '200',
    },
  ];

  const listings = [
    {
      team: 'Web Team',
      position: 'Full-Time',
      roleName: 'UI/UX Team Lead',
      listingPosted: 'Feb 8th',
      type: 'Remote',
    },
    {
      team: 'Engineering Back-End',
      position: 'Full-Time',
      roleName: 'Data Analyst/Engineer',
      listingPosted: 'Feb 11th',
      type: 'Remote',
    },
  ];

  useEffect(() => {
    try {
      fetch('api.ctfguide.com/dashboard')
        .then((res) => res.json())

        .then((data) => {
          if (data.onboardingComplete == false) {
          }
        });
    } catch (error) {}
  });

  return (
    <>
      <Head>
        <title>Careers - CTFGuide</title>
        <meta
          name="description"
          content="Cybersecurity made easy for everyone"
        />
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Poppins&display=swap&apos;);
        </style>
      </Head>

      <Header />
      <main>
        <div className="mx-auto mt-20 mb-20 w-full max-w-6xl text-center">
          <p className="mt-2 text-4xl font-bold text-white sm:text-4xl">
            Meet the team behind{' '}
            <span className="mt-2 text-4xl font-bold tracking-tight text-blue-500 sm:text-4xl">
              CTFGuide
            </span>
          </p>
          <p className="mt-2 text-2xl font-bold  text-white ">
            We're dedicated to providing a space where students can learn,
            teachers can teach, and professionals can compete in the
            ever-emerging field of Cybersecurity
          </p>
        </div>

        {/*
         sm is for "smaller" devices
         */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 text-center md:grid-cols-3 lg:grid-cols-3">
          {team.map((person) => {
            return (
              <div className="py-8 text-white ">
                <img
                  className={' mx-auto rounded-full '}
                  width={person.width}
                  height={person.width}
                  src={person.image}
                ></img>
                <h1 className={'mt-4 text-xl text-xl font-bold text-blue-500'}>
                  {person.personName}
                </h1>
                <h2>{person.position}</h2>
              </div>
            );
          })}
        </div>

        <div
          className="overflow-hidden py-24 sm:py-32"
          style={{ backgroundColor: '#212121' }}
        >
          <div>
            <p className="text-center text-3xl font-bold text-white sm:text-4xl">
              Looking for a Job?
            </p>
          </div>

          <div id="listings" className="mx-auto mt-4 max-w-6xl">
            {listings.map((job) => {
              return (
                <div
                  className="card my-auto rounded-lg text-white "
                  style={{ backgroundColor: '#161716' }}
                >
                  <div className="my-auto mx-auto mt-6 grid px-6 py-5">
                    <div>
                      <h1 className=" text-xl">{job.team}</h1>
                      <h1 className="text-3xl font-semibold">{job.roleName}</h1>
                      <p>Remote - Full Time</p>
                    </div>

                    <div className="ml-auto">
                      <a
                        href="https://ctfguide.freshteam.com/jobs"
                        className=" text-md justify-center rounded-full border border-transparent bg-blue-700 py-1 px-4 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/*
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
            Email
          </label>
          <div className="mt-1">
            <input
              style={{ backgroundColor: "#161716", borderWidth: "0px" }}
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              required
              className="text-white block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>

        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
            First Name
          </label>
          <div className="mt-1">
            <input
              style={{ backgroundColor: "#161716", borderWidth: "0px" }}
              id="FirstName"
              name="FirstName"
              type="text"
              autoComplete="FirstName"
              required
              className="text-white block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
            Last Name
          </label>
          <div className="mt-1">
            <input
              style={{ backgroundColor: "#161716", borderWidth: "0px" }}
              id="LastName"
              name="LastName"
              type="text"
              autoComplete="LastName"
              required
              className="text-white block w-full appearance-none rounded-md border border-gray-300 px-3 py- placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

      </div>

      <div id="entity2">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl py-3">Tell us about yourself!</h1>
        <textarea className='w-full h-full rounded-md px-4 py-3 text-white' style={{ backgroundColor: "#161716", borderWidth: "0px" }}></textarea>

      </div>


    </div>
    */}
        </div>
      </main>

      <Footer />
    </>
  );
  {
    /* End of return */
  }
}
