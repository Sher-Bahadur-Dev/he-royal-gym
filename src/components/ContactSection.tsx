import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import {
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ExternalLink,
  Clock,
  Sparkles,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, PROGRAMS } from '../data/gymData';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  selectedProgramTitle?: string;
}

export default function ContactSection({ selectedProgramTitle }: ContactSectionProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    interestedProgram: 'Strength & Muscle Building',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Sync when user clicks "Inquire About This Program" from another section
  useEffect(() => {
    if (selectedProgramTitle) {
      setFormData((prev) => ({
        ...prev,
        interestedProgram: selectedProgramTitle,
      }));
    }
  }, [selectedProgramTitle]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formError) setFormError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Please enter your contact phone number.');
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        interestedProgram: 'Strength & Muscle Building',
        message: '',
      });
    }, 600);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0b0c0e] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/40 border border-red-900/50 text-red-400 text-[11px] font-semibold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>Find Us in Gulberg III</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-tight">
            VISIT THE <span className="text-red-600">ROYAL GYM</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Have questions about membership, training programs, or visiting the facility?
            Get in touch with us directly or submit your inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Gym Verified Business Info & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Info Card */}
            <div className="p-7 sm:p-8 rounded-xl bg-zinc-900/40 border border-zinc-800 shadow-xl relative overflow-hidden">
              <div className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                Facility Location
              </div>

              <h3 className="font-display text-3xl font-extrabold uppercase text-white tracking-wide">
                {BUSINESS_INFO.name}
              </h3>

              {/* Address & Phone information cells */}
              <div className="mt-6 space-y-3">
                {/* Address cell */}
                <div
                  id="address-info-cell"
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-zinc-800/80 border border-zinc-700 flex items-center justify-center flex-shrink-0 text-white mt-0.5 sm:mt-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase font-bold text-zinc-400">Address</div>
                      <div className="text-white font-medium text-sm mt-0.5 leading-snug">
                        {BUSINESS_INFO.address.line1}
                      </div>
                      <div className="text-zinc-300 text-xs">
                        {BUSINESS_INFO.address.line2}
                      </div>
                      <div className="text-zinc-400 text-xs mt-0.5">
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postalCode}
                      </div>
                    </div>
                  </div>

                  <div className="pl-12 sm:pl-0 flex-shrink-0">
                    <a
                      id="cell-directions-btn"
                      href={BUSINESS_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
                    >
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                      <span>Map</span>
                    </a>
                  </div>
                </div>

                {/* Phone details cell with dedicated button */}
                <div
                  id="phone-number-cell"
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-red-950/40 border border-red-900/50 flex items-center justify-center flex-shrink-0 text-red-500 mt-0.5 sm:mt-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase font-bold text-zinc-400">Phone Number</div>
                      <a
                        href={`tel:${BUSINESS_INFO.phone.tel}`}
                        className="text-white font-bold text-base mt-0.5 tracking-wide hover:text-red-400 transition-colors block"
                      >
                        {BUSINESS_INFO.phone.display}
                      </a>
                    </div>
                  </div>

                  {/* Button in the cell for phone number */}
                  <div className="pl-12 sm:pl-0 flex-shrink-0">
                    <a
                      id="cell-call-phone-btn"
                      href={`tel:${BUSINESS_INFO.phone.tel}`}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-950/50 hover:shadow-red-900/60 active:scale-95 whitespace-nowrap"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Call Now & Get Directions */}
              <div className="mt-7 pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="contact-call-now-btn"
                  href={`tel:${BUSINESS_INFO.phone.tel}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-950/50 hover:shadow-red-900/60 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  id="contact-get-directions-btn"
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 hover:border-zinc-500 font-semibold text-xs uppercase tracking-wider transition-all active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed / Visual Landmark Guide */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 overflow-hidden">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold text-white uppercase tracking-wider flex items-center gap-2 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  Map Navigation Guide
                </span>
                <span className="text-zinc-400 font-mono text-[11px]">Gulberg III • Lahore</span>
              </div>
              <div className="relative w-full h-52 rounded-md overflow-hidden border border-zinc-800 bg-zinc-950">
                <iframe
                  title="The Royal Gym Location - Khan Arcade, Gulberg III"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  className="w-full h-full border-0 grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-[11px] text-zinc-400 mt-2.5">
                Situated on 1st Floor, Khan Arcade in Ferdous Market, accessible with convenient local parking.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-xl bg-zinc-900/40 border border-zinc-800 shadow-xl relative">
              {isSubmitted && submittedData ? (
                /* Success Confirmation State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-5"
                >
                  <div className="w-14 h-14 rounded-full bg-red-950/50 border border-red-900/80 text-red-500 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                      Inquiry Logged
                    </h3>
                    <p className="mt-2 text-sm text-zinc-300 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{submittedData.fullName}</strong>. Your inquiry regarding{' '}
                      <span className="text-red-400 font-semibold underline">{submittedData.interestedProgram}</span> has been noted.
                    </p>
                  </div>

                  {/* Recap details box */}
                  <div className="p-4 rounded-md bg-zinc-950 border border-zinc-800 text-left max-w-md mx-auto space-y-2 text-xs text-zinc-300">
                    <div className="flex justify-between py-1 border-b border-zinc-800">
                      <span className="text-zinc-400">Phone:</span>
                      <span className="text-white font-medium">{submittedData.phone}</span>
                    </div>
                    {submittedData.email && (
                      <div className="flex justify-between py-1 border-b border-zinc-800">
                        <span className="text-zinc-400">Email:</span>
                        <span className="text-white font-medium">{submittedData.email}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-1 border-b border-zinc-800">
                      <span className="text-zinc-400">Program:</span>
                      <span className="text-white font-medium">{submittedData.interestedProgram}</span>
                    </div>
                    {submittedData.message && (
                      <div className="pt-1">
                        <span className="text-zinc-400 block mb-1">Message:</span>
                        <span className="text-zinc-300 italic">{submittedData.message}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${BUSINESS_INFO.phone.tel}`}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm shadow-red-950/40"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call: {BUSINESS_INFO.phone.display}</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Send Another Inquiry</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Contact Form */
                <div>
                  <div className="mb-6">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                      Send Inquiry
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      Fill out the form below to reach The Royal Gym management directly.
                    </p>
                  </div>

                  {formError && (
                    <div className="mb-5 p-3.5 rounded-md bg-red-950/40 border border-red-800 text-red-200 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="e.g. Ali Khan"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm"
                      />
                    </div>

                    {/* Grid: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phone" className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="e.g. +92 300 1234567"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="e.g. yourname@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Interested Program */}
                    <div>
                      <label htmlFor="interestedProgram" className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Interested Program <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="interestedProgram"
                        name="interestedProgram"
                        value={formData.interestedProgram}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-red-500 transition-colors text-sm"
                      >
                        {PROGRAMS.map((prog) => (
                          <option key={prog.id} value={prog.title} className="bg-zinc-950 text-white">
                            {prog.title}
                          </option>
                        ))}
                        <option value="General Inquiry" className="bg-zinc-950 text-white">
                          General Inquiry / Membership Questions
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Tell us about your fitness background, timing preference, or questions..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-red-950/50 hover:shadow-red-900/60 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
