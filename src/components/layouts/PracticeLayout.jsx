import Head from 'next/head'
import { StandardNav } from '@/components/StandardNav'
import { Footer } from '@/components/Footer'
import { PracticeNav } from '@/components/practice/PracticeNav'

export const PracticeLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Practice - CTFGuide</title>
        <meta name="description" content="Practice Problems" />
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Poppins&display=swap&apos;);
        </style>
      </Head>
      <StandardNav />
      <main>
        <div className=" w-full " style={{ backgroundColor: '#212121' }}>
          <div className="mx-auto my-auto flex h-28 text-center">
            <h1 className="mx-auto my-auto text-4xl font-semibold text-white">
              Practice
            </h1>
          </div>
        </div>
        <div className="flex">
          <div className="mx-auto flex h-screen max-w-7xl ">
            <PracticeNav />
          </div>
          <div className="w-3/4">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}
