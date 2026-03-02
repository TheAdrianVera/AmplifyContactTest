import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 bg-white dark:bg-black sm:items-start">
        <a
          href='contact-test'
          className='inline-flex items-center justify-center rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition
             hover:bg-orange-700 hover:shadow-md hover:-translate-y-0.5'
        >
          Go to Contact Form Test
        </a>
      </main>
    </div>
  );
}
