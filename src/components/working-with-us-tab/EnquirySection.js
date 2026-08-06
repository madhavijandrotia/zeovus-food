"use client";

import { useState } from "react";
import { motion } from "motion/react";

const initialForm = {
  name: "",
  company: "",
  country: "",
  enquiryType: "General",
  message: "",
};

export default function EnquirySection() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }

    if (submitted) {
      setSubmitted(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    const trimmedName = formData.name.trim();
    const trimmedCompany = formData.company.trim();
    const trimmedCountry = formData.country.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!trimmedCompany) {
      newErrors.company = "Please enter your company name.";
    } else if (trimmedCompany.length < 2) {
      newErrors.company = "Company name must contain at least 2 characters.";
    }

    if (!trimmedCountry) {
      newErrors.country = "Please enter your country.";
    } else if (trimmedCountry.length < 2) {
      newErrors.country = "Please enter a valid country name.";
    } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmedCountry)) {
      newErrors.country = "Please enter a valid country name.";
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = "Please select an enquiry type.";
    }

    if (!trimmedMessage) {
      newErrors.message = "Please tell us what you are building.";
    } else if (trimmedMessage.length < 20) {
      newErrors.message =
        "Please provide at least 20 characters so we can understand your enquiry.";
    } else if (trimmedMessage.length > 1000) {
      newErrors.message = "Message cannot contain more than 1000 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const payload = {
      name: formData.name.trim(),
      company: formData.company.trim(),
      country: formData.country.trim(),
      enquiryType: formData.enquiryType,
      message: formData.message.trim(),
    };

    console.log("Enquiry payload:", payload);

    setSubmitted(true);
    setFormData(initialForm);
    setErrors({});
  };

  const inputClass = (fieldName) => {
    return `h-[52px] w-full rounded-full border bg-white px-5 text-[15px] text-[#294526] outline-none transition duration-300 placeholder:text-[#294526]/35 ${
      errors[fieldName]
        ? "border-[#c9552f] focus:border-[#c9552f] focus:ring-4 focus:ring-[#c9552f]/10"
        : "border-[#294526]/10 focus:border-[#789444] focus:ring-4 focus:ring-[#789444]/10"
    }`;
  };

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-[#efe0c3] px-5 py-20 sm:px-8 lg:px-14 lg:py-28"
    >
      <div className="pointer-events-none absolute left-[-130px] top-[-100px] h-[360px] w-[360px] rounded-full bg-[#fff9df]/40 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-140px] right-[-90px] h-[400px] w-[400px] rounded-full bg-[#789444]/10 blur-[130px]" />

      <div className="relative mx-auto grid max-w-[1380px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 xl:gap-20">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-w-0 self-start"
        >
          <div className="max-w-[560px]">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.32em] text-[#c35531] sm:text-[12px]">
              Get In Touch
            </p>

            <h2 className="font-heading text-[32px] font-bold uppercase leading-[1.02] tracking-[-0.025em] text-[#294526] sm:text-[42px] lg:text-[46px] xl:text-[52px]">
              Tell us what you&apos;re building. 
              <br />
              <br />
              Fill out the enquiry form, and
              we&apos;ll discuss the best path to bring your project to life.
            </h2>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.75,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-w-0 self-start rounded-[32px] border border-[#294526]/10 bg-[#fff9df]/55 p-6 shadow-[0_24px_65px_rgba(49,55,37,0.08)] backdrop-blur-sm sm:p-9 lg:p-11"
        >
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#294526]/75"
                >
                  Name <span className="text-[#c9552f]">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputClass("name")}
                />

                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-2 pl-2 text-[12px] font-medium text-[#b84225]"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#294526]/75"
                >
                  Company <span className="text-[#c9552f]">*</span>
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  autoComplete="organization"
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={
                    errors.company ? "company-error" : undefined
                  }
                  className={inputClass("company")}
                />

                {errors.company && (
                  <p
                    id="company-error"
                    className="mt-2 pl-2 text-[12px] font-medium text-[#b84225]"
                  >
                    {errors.company}
                  </p>
                )}
              </div>

              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#294526]/75"
                >
                  Country <span className="text-[#c9552f]">*</span>
                </label>

                <input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  autoComplete="country-name"
                  aria-invalid={Boolean(errors.country)}
                  aria-describedby={
                    errors.country ? "country-error" : undefined
                  }
                  className={inputClass("country")}
                />

                {errors.country && (
                  <p
                    id="country-error"
                    className="mt-2 pl-2 text-[12px] font-medium text-[#b84225]"
                  >
                    {errors.country}
                  </p>
                )}
              </div>

              {/* Enquiry type */}
              <div>
                <label
                  htmlFor="enquiryType"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#294526]/75"
                >
                  Enquiry Type <span className="text-[#c9552f]">*</span>
                </label>

                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.enquiryType)}
                  aria-describedby={
                    errors.enquiryType ? "enquiry-type-error" : undefined
                  }
                  className={inputClass("enquiryType")}
                >
                  <option value="General">General</option>

                  <option value="Co-Development & Formulation">
                    Co-Development &amp; Formulation
                  </option>

                  <option value="Private Label & White Label">
                    Private Label &amp; White Label
                  </option>

                  <option value="Distribution Partnership">
                    Distribution Partnership
                  </option>

                  <option value="Bulk Ingredient Supply">
                    Bulk Ingredient Supply
                  </option>
                </select>

                {errors.enquiryType && (
                  <p
                    id="enquiry-type-error"
                    className="mt-2 pl-2 text-[12px] font-medium text-[#b84225]"
                  >
                    {errors.enquiryType}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#294526]/75"
                  >
                    Message <span className="text-[#c9552f]">*</span>
                  </label>

                  <span
                    className={`text-[10px] font-medium ${
                      formData.message.length > 1000
                        ? "text-[#b84225]"
                        : "text-[#294526]/45"
                    }`}
                  >
                    {formData.message.length}/1000
                  </span>
                </div>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the product, format, target market and expected production volume."
                  rows={7}
                  maxLength={1050}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`w-full resize-none rounded-[24px] border bg-white px-5 py-4 text-[15px] leading-7 text-[#294526] outline-none transition duration-300 placeholder:text-[#294526]/35 ${
                    errors.message
                      ? "border-[#c9552f] focus:border-[#c9552f] focus:ring-4 focus:ring-[#c9552f]/10"
                      : "border-[#294526]/10 focus:border-[#789444] focus:ring-4 focus:ring-[#789444]/10"
                  }`}
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-2 pl-2 text-[12px] font-medium text-[#b84225]"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {submitted && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-6 rounded-[18px] border border-[#789444]/20 bg-[#789444]/10 px-5 py-4 text-[14px] font-medium leading-6 text-[#52632c]"
                role="status"
              >
                Thank you. Your enquiry has been submitted successfully.
              </motion.div>
            )}

            <button
              type="submit"
              className="group mt-7 inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#151812] px-7 py-3.5 font-heading text-[14px] font-bold uppercase tracking-[0.08em] text-[#fff9df] transition duration-300 hover:-translate-y-1 hover:bg-[#294526] focus:outline-none focus:ring-4 focus:ring-[#294526]/20"
            >
              Get Your Quote
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
