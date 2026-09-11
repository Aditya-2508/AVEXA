import { FormEvent, useState } from "react";
import { Mail, Phone, Linkedin, Github, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ACCESS_KEY = "f5bf7671-c2a9-41c0-8617-94b814aa0ad3";

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New AVEXA Project Enquiry");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  function sendAnotherEnquiry() {
    setStatus("idle");

    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }

  return (
    <section id="contact" className="section">
      <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
        {/* LEFT */}
        <div>
          <p className="eyebrow">CONTACT</p>

          <h2 className="mt-4 text-4xl font-black tracking-[-.045em] text-navy sm:text-5xl">
            Let's talk about your next project.
          </h2>

          <AnimatePresence mode="wait">
            {/* SUCCESS CARD */}
            {status === "success" ? (
              <motion.div
                key="success"
                id="contact-form"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="mt-10 flex min-h-[430px] items-center justify-center border border-slate-200 bg-white p-8 shadow-[0_25px_70px_rgba(7,20,38,0.08)] sm:p-12"
              >
                <div className="mx-auto max-w-xl text-center">
                  {/* SUCCESS ICON */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.45,
                      type: "spring",
                      stiffness: 180,
                    }}
                    className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-blue"
                  >
                    <Check size={38} strokeWidth={2.5} className="text-white" />
                  </motion.div>

                  {/* SMALL LABEL */}
                  <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-blue">
                    ENQUIRY RECEIVED
                  </p>

                  {/* HEADING */}
                  <h3 className="mt-4 text-3xl font-black tracking-[-.04em] text-navy sm:text-4xl">
                    Thank you.
                  </h3>

                  {/* MESSAGE */}
                  <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted sm:text-lg">
                    Your project enquiry has been sent successfully. Our team
                    will review your requirements and get back to you shortly.
                  </p>

                  {/* DIVIDER */}
                  <div className="mx-auto my-8 h-px max-w-xs bg-slate-200" />

                  {/* SECONDARY MESSAGE */}
                  <p className="text-sm font-medium text-slate-500">
                    We appreciate you reaching out to AVEXA.
                  </p>

                  {/* ACTION */}
                  <button
                    type="button"
                    onClick={sendAnotherEnquiry}
                    className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-navy transition hover:border-blue hover:text-blue"
                  >
                    Send Another Enquiry
                    <ArrowRight size={17} />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* CONTACT FORM */
              <motion.form
                key="form"
                id="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-10 grid gap-5 sm:grid-cols-2"
              >
                {/* NAME */}
                <label className="text-sm font-bold text-navy">
                  Name
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="focus-ring mt-2 w-full border border-slate-300 bg-white px-4 py-3.5 font-medium outline-none transition focus:border-blue"
                  />
                </label>

                {/* COMPANY */}
                <label className="text-sm font-bold text-navy">
                  Company
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    className="focus-ring mt-2 w-full border border-slate-300 bg-white px-4 py-3.5 font-medium outline-none transition focus:border-blue"
                  />
                </label>

                {/* EMAIL */}
                <label className="text-sm font-bold text-navy">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="focus-ring mt-2 w-full border border-slate-300 bg-white px-4 py-3.5 font-medium outline-none transition focus:border-blue"
                  />
                </label>

                {/* PHONE */}
                <label className="text-sm font-bold text-navy">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+44 / +91"
                    className="focus-ring mt-2 w-full border border-slate-300 bg-white px-4 py-3.5 font-medium outline-none transition focus:border-blue"
                  />
                </label>

                {/* PROJECT TYPE */}
                <label className="text-sm font-bold text-navy">
                  Project Type
                  <select
                    name="project_type"
                    className="focus-ring mt-2 w-full border border-slate-300 bg-white px-4 py-3.5 font-medium outline-none"
                  >
                    <option>Custom Software</option>
                    <option>AI / Machine Learning</option>
                    <option>AI / LLM Integration</option>
                    <option>Backend / API Engineering</option>
                    <option>Automation / Data</option>
                    <option>MVP / Product Development</option>
                  </select>
                </label>

                {/* BUDGET */}
                <label className="text-sm font-bold text-navy">
                  Budget Range
                  <select
                    name="budget"
                    className="focus-ring mt-2 w-full border border-slate-300 bg-white px-4 py-3.5 font-medium outline-none"
                  >
                    <option>To be discussed</option>
                    <option>Under £5k</option>
                    <option>£5k–£15k</option>
                    <option>£15k–£30k</option>
                    <option>£30k+</option>
                  </select>
                </label>

                {/* MESSAGE */}
                <label className="text-sm font-bold text-navy sm:col-span-2">
                  Tell us about your project
                  <textarea
                    required
                    name="message"
                    rows={6}
                    placeholder="Tell us what you are building..."
                    className="focus-ring mt-2 w-full resize-y border border-slate-300 bg-white px-4 py-3.5 font-medium outline-none transition focus:border-blue"
                  />
                </label>

                {/* SUBMIT */}
                <div className="sm:col-span-2">
                  <button
                    disabled={status === "sending"}
                    type="submit"
                    className="focus-ring inline-flex items-center gap-2 rounded-full bg-navy px-6 py-4 font-bold text-white transition hover:bg-blue disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending"
                      ? "Sending..."
                      : "Send Project Enquiry"}

                    {status !== "sending" && <ArrowRight size={18} />}
                  </button>

                  {/* ERROR */}
                  {status === "error" && (
                    <p className="mt-4 font-semibold text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT CONTACT INFORMATION */}
        <aside className="self-start border border-slate-200 bg-offwhite p-7 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-blue">
            AVEXA
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="font-black text-navy">Vikas Amale</p>

              <p className="text-sm text-muted">Co-Founder, AVEXA</p>
            </div>

            <div>
              <p className="font-black text-navy">Aditya Satpute</p>

              <p className="text-sm text-muted">Co-Founder, AVEXA</p>
            </div>

            <div className="border-t border-slate-200 pt-6 text-sm text-muted">
              <p className="flex items-center gap-3">
                <Mail size={17} />
                avexa.techie@gmail.com
              </p>

              <p className="mt-4 flex items-center gap-3">
                <Phone size={17} />
                +91 93229 15488 | +91 85300 84164
              </p>

              <p className="mt-4 flex items-center gap-3">
                <Linkedin size={17} />
                linkedin.com/in/vikas-amale
              </p>
              <p className="mt-4 flex items-center gap-3">
                <Linkedin size={17} />
                linkedin.com/in/aditya2508
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
