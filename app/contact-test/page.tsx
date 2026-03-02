import type { Metadata } from "next"
import Form from "@components/Form"

export const metadata: Metadata = {
    title: "Contact | Amplify Test Site",
    description:
        "Contact form for the Amplify test site. Send us a message.",
}

export default function ContactTest() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black font-sans text-zinc-100">
            <Form />
        </div>
    )
}