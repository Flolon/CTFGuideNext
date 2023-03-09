import { PracticeLayout } from '@/components/layouts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import clsx from 'clsx'

const mockPractices = [
  {
    title: 'Checkout this ascii animation',
    difficulty: 'easy',
    category: 'cryptography',
  },
  {
    title: 'Given an id, find the full url',
    difficulty: 'easy',
    category: 'forenscis',
  },
  {
    title: 'Bit Glitter!',
    difficulty: 'medium',
    category: 'cryptography',
  },
  {
    title: 'Releasing Excited Electrons!',
    difficulty: 'hard',
    category: 'forensics',
  },
]

function ChallengeCard(props) {
  const { title, difficulty, category } = props
  return (
    <>
      <div className="flex w-full cursor-pointer flex-col gap-1 rounded-md bg-grey-500 py-4 px-6">
        <div className="text-xl text-white">{title}</div>
        <div className="flex flex-row gap-1">
          <div
            className={clsx(
              { 'text-green-500': difficulty === 'easy' },
              { 'text-yellow-500': difficulty === 'medium' },
              { 'text-red-500': difficulty === 'hard' }
            )}
          >
            {difficulty}
          </div>
          <b className="text-white">∙</b>
          <span className="rounded-lg bg-black px-2  lowercase text-white">
            {category}
          </span>
        </div>
      </div>
    </>
  )
}
export default function PracticePage() {
  // function loadChallenges() {
  //   fetch('https://api.ctfguide.com/challenges/type/all')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       for (var i = 0; i < data.length; i++) {
  //         var difficultyColor = 'border-green-500'

  //         if (data[i].difficulty == 'easy') {
  //           difficultyColor = 'border-green-500'
  //         } else if (data[i].difficulty == 'medium') {
  //           difficultyColor = 'border-yellow-500'
  //         } else if (data[i].difficulty == 'hard') {
  //           difficultyColor = 'border-red-500'
  //         }

  //         document.getElementById('starter').insertAdjacentHTML(
  //           'afterend',
  //           `<div class='card rounded-lg px-4 py-2 w-full border-l-4 ${difficultyColor}' style='background-color: #212121'>
  //               <h1 class='text-white text-2xl'>${data[i].title}</h1>
  //               <p class='text-white truncate'>${data[i].problem.substring(
  //                 0,
  //                 40
  //               )}</p>
  //               <div class='flex mt-2'>

  //                   <p class='text-white px-2  rounded-lg bg-blue-900 text-sm'>${
  //                     data[i].category
  //                   }</p>
  //               </div>
  //           </div>`
  //         )
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
  // loadChallenges()

  return (
    <div className="gap-3 p-8">
      <div className="py-8">
        <h1 className="flex items-center text-2xl text-gray-400">
          Your current score is{' '}
          <span className="ml-2 text-3xl text-white">0</span>
        </h1>
      </div>

      <hr className="divide-x" />

      <div className="py-8">
        <h1 className="text-2xl text-gray-400">Recommend Challenges </h1>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          modules={[Pagination]}
        >
          {mockPractices.map((practice) => (
            <SwiperSlide>
              <ChallengeCard {...practice} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

PracticePage.getLayout = function getLayout(page) {
  return <PracticeLayout>{page}</PracticeLayout>
}
