import Head from 'next/head'

import { Footer } from '@/components/Footer'

import { StandardNav } from '@/components/StandardNav'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { Stats } from '@/components/dashboard/Stats'
import { Developer } from '@/components/dashboard/Developer'
import { Performance } from '@/components/dashboard/Performance'
import { useEffect } from 'react'
import { Friends } from '@/components/dashboard/Friends'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SideNavContent } from '@/components/dashboard/SideNavContents'
import { QuickSettings } from '@/components/dashboard/QuickSetttings'
import { Suggest } from '@/components/dashboard/Suggest'

export default function Dashboard() {
  const [open, setOpen] = useState(true)
  const [badges, setbadges] = useState([])
  let username = 'laphatize'
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${localStorage.getItem('userBadgesUrl')}`)
      const data = await response.json()
      setbadges(data)
    }
    fetchData()
    setbadges([])
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard - CTFGuide</title>
        <meta
          name="description"
          content="Cybersecurity made easy for everyone"
        />
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Poppins&display=swap&apos;);
        </style>
      </Head>
      <StandardNav />
      <main>
        <DashboardHeader />

        <div className="mx-auto flex h-screen max-w-7xl ">
          {/* Sidebar */}
          <SideNavContent />

          {/* Main content area */}
          <div className="flex-1">
            <h1 className="mt-5 text-4xl text-white">Badges</h1>
            {/* Fetch badges from API */}
            <div className="mt-4 grid grid-cols-5 gap-x-4 gap-y-4">
              {badges.map((data) => (
                <div
                  style={{ backgroundColor: '#212121' }}
                  className="align-center mx-auto w-full rounded-lg px-4 py-4  text-center"
                >
                  <img
                    src={`../badges/level1/${data.badge.badgeName.toLowerCase()}.png`}
                    width="100"
                    className="mx-auto mt-2 px-1"
                  />

                  <h1 class="mx-auto mt-2  text-center text-xl text-white">
                    {data.badge.badgeName}
                  </h1>
                  <h1 class="text-lg text-white ">
                    {new Date(data.createdAt).toLocaleDateString('en-US', {
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric',
                    })}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
