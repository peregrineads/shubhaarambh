"use client";

import { useState, type FormEvent } from "react";

type Fields = { name: string; phone: string; email: string; type: string; location: string; date: string; guests: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
const empty: Fields = { name: "", phone: "", email: "", type: "", location: "", date: "", guests: "", message: "" };

export default function EnquiryForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const update = (key: keyof Fields, value: string) => {
    setFields((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = new Date();
    const today = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    const next: Errors = {};
    if (!fields.name.trim()) next.name = "Please tell us your name.";
    if (!fields.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!/^[+\d\s()-]{7,20}$/.test(fields.phone) || fields.phone.replace(/\D/g, "").length < 7 || fields.phone.replace(/\D/g, "").length > 15) next.phone = "Please enter a valid phone number.";
    if (!fields.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = "Please enter a valid email address.";
    if (!fields.type) next.type = "Please choose an event type.";
    if (!fields.location) next.location = "Please choose a location.";
    if (!fields.date) next.date = "Please choose an event date.";
    else if (fields.date < today) next.date = "Please choose today or a future date.";
    if (!fields.guests || Number(fields.guests) < 1) next.guests = "Please enter an approximate guest count.";
    if (!fields.message.trim()) next.message = "Please share a little about your celebration.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };
  const error = (key: keyof Fields) => errors[key] ? <span className="contact-error" id={`${key}-error`}>{errors[key]}</span> : null;
  const accessibility = (key: keyof Fields) => ({ "aria-required": true as const, "aria-invalid": !!errors[key], "aria-describedby": errors[key] ? `${key}-error` : undefined });

  if (submitted) return <div className="contact-success" role="status"><span>✳</span><p className="contact-kicker">A BEAUTIFUL BEGINNING</p><h3>Thank you for <em>sharing your vision.</em></h3><p>This is a demonstration form, so your enquiry has not been sent. We can’t wait to help bring your celebration to life once contact details are connected.</p><button type="button" onClick={() => { setFields(empty); setSubmitted(false); }}>START AGAIN <span>↗</span></button></div>;

  return <form className="contact-form" onSubmit={submit} noValidate>
    {Object.keys(errors).length > 0 && <p className="contact-error-summary contact-field-wide" role="alert">Please check the highlighted fields below.</p>}
    <div className="contact-field"><label htmlFor="name">Full name <span>*</span></label><input id="name" autoComplete="name" placeholder="Your name" value={fields.name} onChange={(e) => update("name", e.target.value)} {...accessibility("name")} />{error("name")}</div>
    <div className="contact-field"><label htmlFor="phone">Phone number <span>*</span></label><input id="phone" type="tel" autoComplete="tel" placeholder="Your phone number" value={fields.phone} onChange={(e) => update("phone", e.target.value)} {...accessibility("phone")} />{error("phone")}</div>
    <div className="contact-field"><label htmlFor="email">Email address <span>*</span></label><input id="email" type="email" autoComplete="email" placeholder="Your email address" value={fields.email} onChange={(e) => update("email", e.target.value)} {...accessibility("email")} />{error("email")}</div>
    <div className="contact-field"><label htmlFor="type">Event type <span>*</span></label><select id="type" value={fields.type} onChange={(e) => update("type", e.target.value)} {...accessibility("type")}><option value="">Select an occasion</option>{["Wedding", "Birthday", "Engagement", "Corporate Event", "Party Night", "Anniversary", "Other"].map((option) => <option key={option}>{option}</option>)}</select>{error("type")}</div>
    <div className="contact-field"><label htmlFor="location">Event location <span>*</span></label><select id="location" value={fields.location} onChange={(e) => update("location", e.target.value)} {...accessibility("location")}><option value="">Select a location</option>{["Bharuch", "Ankleshwar", "Kevadia", "Other"].map((option) => <option key={option}>{option}</option>)}</select>{error("location")}</div>
    <div className="contact-field"><label htmlFor="date">Event date <span>*</span></label><input id="date" type="date" value={fields.date} onChange={(e) => update("date", e.target.value)} {...accessibility("date")} />{error("date")}</div>
    <div className="contact-field contact-field-wide"><label htmlFor="guests">Approximate guest count <span>*</span></label><input id="guests" type="number" min="1" step="1" inputMode="numeric" placeholder="How many people will be celebrating?" value={fields.guests} onChange={(e) => update("guests", e.target.value)} {...accessibility("guests")} />{error("guests")}</div>
    <div className="contact-field contact-field-wide"><label htmlFor="message">Tell us about your celebration <span>*</span></label><textarea id="message" rows={4} placeholder="The occasion, the feeling, the little details you’re dreaming of..." value={fields.message} onChange={(e) => update("message", e.target.value)} {...accessibility("message")} />{error("message")}</div>
    <div className="contact-form-footer contact-field-wide"><button type="submit">SEND YOUR ENQUIRY <span>↗</span></button><p>Demo form — no enquiry will be sent.</p></div>
  </form>;
}
