"use client"

import { useState } from "react"

const Form = () => {
    //Success or error message shown after submit; null when none.
    const [message, setMessage] = useState<{
        type: "success" | "error"
        text: string
    } | null>(null)

    //Submission Handler
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage(null)

        const form = e.currentTarget
        const name = (form.elements.namedItem("name") as HTMLInputElement)
            ?.value?.trim()
        const email = (form.elements.namedItem("email") as HTMLInputElement)
            ?.value?.trim()

        if (name && email) {
            setMessage({
                type: "success",
                text: "Thank you, we received your message.",
            })
        } else {
            setMessage({
                type: "error",
                text: "Please fill in all required fields (Name and Email).",
            })
        }
    }

    //Form HTML Structure
    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-xl"
        >
            <h1 className="text-2xl font-semibold tracking-tight text-white">
                Contact
            </h1>
            {/* Form Submission - Message Logic */}
            {message && (
                <div
                    role="alert"
                    className={`rounded-lg px-4 py-3 text-sm ${
                        message.type === "success"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-red-500/20 text-red-400"
                    }`}
                >
                    {message.text}
                </div>
            )}

            {/* Name */}
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                    Name *
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-2.5 text-white placeholder-zinc-500 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                />
            </div>
            {/* Email */}
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                    Email *
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-2.5 text-white placeholder-zinc-500 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                />
            </div>
            {/* Message */}
            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-y rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-2.5 text-white placeholder-zinc-500 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                />
            </div>
            {/* Submit Button */}
            <button
                type="submit"
                className="w-full rounded-lg bg-white px-4 py-3 font-medium text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
                Send
            </button>
        </form>
    )
}

export default Form