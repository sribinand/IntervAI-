import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ClipboardList, Video } from 'lucide-react'
import React from 'react'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:justify-between lg:px-24">
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
          <h2 className="text-4xl font-extrabold leading-snug text-white md:text-5xl">
            Get Interview-Ready with AI-Powered Practice & Feedback
          </h2>

          <p className="text-lg text-gray-300 md:text-xl">
            Practice on real interview questions & get instant Feedback.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              asChild
              className="px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
            >
              <Link href="/interview">🎙️ Start an Interview</Link>
            </Button>
          </div>
        </div>

        <Image
          src="/robot.png"
          alt="AI Robot"
          width={480}
          height={480}
          className="drop-shadow-2xl w-72 sm:w-96 md:w-[420px] lg:w-[480px]"
          priority
        />
      </section>

      {/* Your Interviews */}
      <section className="px-6 lg:px-24 mt-10">
        <div className="flex items-center gap-2 mb-4">
          <ClipboardList className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold text-white">Your Interviews</h3>
        </div>

        <div className="rounded-xl bg-gray-900 border border-gray-700 p-8 shadow-md">
          {dummyInterviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
              {dummyInterviews.map((interview) => (
                <InterviewCard key={interview.id} {...interview} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-300 mb-6">
              You haven&apos;t taken any interviews yet
            </p>
          )}

          <div className="flex justify-center mt-8">
            <Button
              asChild
              className="px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition shadow-md"
            >
              <Link href="/interview">Start New Interview</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interview Practice */}
      <section className="px-6 lg:px-24 mt-14 mb-10">
        <div className="flex items-center gap-2 mb-6">
          <Video className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold text-white">Interview Practice</h3>
        </div>

        <div className="rounded-xl bg-gray-900 border border-gray-700 p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
            {dummyInterviews.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
