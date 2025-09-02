import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi"; // Add icon

// Configure these via .env
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_j4e6mas";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_48mfvfg";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "MiEZiDinMXv_AzJ8L";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, msg: "Sending..." });
    try {
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      if (res.status === 200) {
        setStatus({
          sending: false,
          ok: true,
          msg: "Message sent! Check your inbox.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("EmailJS response not OK");
      }
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        msg: "Failed to send. Check EmailJS keys and try again.",
      });
    }
  };

  return (
    <section className="scroll-mt-16 pt-32 pb-64 px-4 bg-white dark:bg-black transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-orange-400/80 inline-block -ml-12 text-black dark:text-white">
          Contact Me
        </h2>

        {/* Form */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-neutral-900/60 rounded-2xl border border-neutral-300 dark:border-white/10 p-6 max-w-2xl w-full transition-colors duration-500"
          >
            <div className="grid gap-4">
              <input
                className="bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-lg p-3 border border-neutral-300 dark:border-white/10 transition-colors duration-500"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                className="bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-lg p-3 border border-neutral-300 dark:border-white/10 transition-colors duration-500"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-lg p-3 border border-neutral-300 dark:border-white/10 transition-colors duration-500"
                name="message"
                placeholder="Your message..."
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              />
              
              {/* Updated Button */}
              <button
                type="submit"
                disabled={status.sending}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#E4967C] to-[#DE7F5F] hover:from-peach-400 hover:to-peach-600 text-black dark:text-white font-semibold px-5 py-2.5 rounded-xl disabled:opacity-50 transition-all duration-300"
              >
                {status.sending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <FiSend className="w-5 h-5" />
                  </>
                )}
              </button>

              {status.msg && (
                <p className={status.ok ? "text-green-400" : "text-red-400"}>
                  {status.msg}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
