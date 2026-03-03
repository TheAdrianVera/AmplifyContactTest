import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Amplify Test Site",
  description:
    "Home page for the Amplify test site with a contact form example.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 bg-white bg-black sm:items-start">
        <a
          href="contact-test"
          className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-10 py-5 text-md font-bold text-white shadow-sm transition hover:bg-orange-700 hover:shadow-md hover:-translate-y-0.5"
        >
          Go to Contact Form Test
        </a>
      </main>
    </div>
  );
}
