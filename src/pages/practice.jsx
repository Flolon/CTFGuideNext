import { PracticeLayout } from '@/components/layouts'

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

  return <div>Practice Page here</div>
}

PracticePage.getLayout = function getLayout(page) {
  return <PracticeLayout>{page}</PracticeLayout>
}
