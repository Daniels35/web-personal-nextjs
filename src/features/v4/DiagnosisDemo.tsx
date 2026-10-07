"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { whatsappUrl } from "@/config/site";

const recommendations: Record<string, string> = {
  Comercio: "Podemos conectar tu catálogo, inventario y pedidos para reducir el trabajo manual y facilitar la compra.",
  Restaurante: "Un flujo de pedidos en WhatsApp puede ordenar las solicitudes y ayudar a tu equipo en las horas de mayor demanda.",
  Servicios: "Podemos automatizar consultas frecuentes y organizar el seguimiento de tus prospectos en un CRM.",
  Inmobiliaria: "Un asistente puede orientar las consultas por tipo de inmueble y organizar los prospectos para tu equipo comercial.",
  "Otro sector": "Podemos empezar por el proceso que más tiempo consume y diseñar una integración o una herramienta a medida.",
};
type Message = { role: "assistant" | "user"; text: string };
const introMessage = "Hola Daniel, escaneé tu tarjeta física y quiero probar la demo de un Agente IA para mi negocio";
const questions = [
  "¡Claro que sí! Cuéntame qué hace o a qué se dedica tu empresa y te diré exactamente cómo te podemos ayudar 🚀",
  "¿Cuál es el mayor obstáculo que quieres resolver hoy?",
  "¿Cómo te llamas y cuál es el nombre de tu empresa?",
  "Podemos revisar tu caso en un diagnóstico gratuito de 15 minutos. Si quieres continuar, indica tu correo de contacto.",
  "¿En qué número de WhatsApp podemos contactarte? Incluye el código de país.",
  "¿Qué día y hora prefieres? Es una propuesta; Daniel confirmará la disponibilidad por WhatsApp.",
];

export default function DiagnosisDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);
  const [isAutoTyping, setIsAutoTyping] = useState(true);
  const [showFloating, setShowFloating] = useState(false);
  const card = useRef<HTMLDivElement>(null);
  const transcript = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const typeTimer = useRef<number | null>(null);
  const autoSendTimer = useRef<number | null>(null);
  const sendIntro = useRef<() => void>(() => {});
  const complete = answers.length === questions.length;

  function clearIntroTimers() {
    if (typeTimer.current !== null) window.clearInterval(typeTimer.current);
    if (autoSendTimer.current !== null) window.clearTimeout(autoSendTimer.current);
    typeTimer.current = null;
    autoSendTimer.current = null;
  }

  function beginIntro() {
    if (started) return;
    clearIntroTimers();
    setStarted(true);
    setIsAutoTyping(false);
    setInput("");
    setMessages([
      { role: "user", text: introMessage },
      { role: "assistant", text: questions[0] },
    ]);
  }
  sendIntro.current = beginIntro;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setShowFloating(!entry.isIntersecting), { threshold: 0.05 });
    if (card.current) observer.observe(card.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (transcript.current) transcript.current.scrollTop = transcript.current.scrollHeight;
  }, [messages]);
  useEffect(() => {
    let position = 0;
    const finishTyping = () => {
      setInput(introMessage);
      setIsAutoTyping(false);
      autoSendTimer.current = window.setTimeout(() => sendIntro.current(), 5000);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishTyping();
      return clearIntroTimers;
    }

    typeTimer.current = window.setInterval(() => {
      position += 1;
      setInput(introMessage.slice(0, position));
      if (position === introMessage.length) {
        if (typeTimer.current !== null) window.clearInterval(typeTimer.current);
        typeTimer.current = null;
        finishTyping();
      }
    }, 28);

    return clearIntroTimers;
  }, []);

  function respond(value: string) {
    const text = value.trim();
    if (!text || complete) return;
    if (answers.length === 3 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) { setError("Escribe un correo válido."); return; }
    if (answers.length === 4 && !/^\+?[\d\s()-]{7,22}$/.test(text)) { setError("Escribe un número con código de país, por ejemplo +57 313 580 4424."); return; }
    const updated = [...answers, text];
    setAnswers(updated);
    setStarted(true);
    setInput("");
    setError("");
    const next = updated.length === questions.length
      ? "Tu resumen está listo. Pulsa el botón para abrir WhatsApp, revisar el mensaje y enviárselo a Daniel. La sesión queda pendiente de confirmación."
      : `${answers.length === 0 ? (recommendations[text] ?? recommendations["Otro sector"]) + " " : ""}${questions[updated.length]}`;
    setMessages((previous) => [...previous, { role: "user", text }, { role: "assistant", text: next }]);
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!started) {
      beginIntro();
      return;
    }
    respond(input);
  }
  const summary = `Hola Daniel, probé la demo de tu web y quisiera un diagnóstico de 15 minutos.\nSector: ${answers[0]}\nReto: ${answers[1]}\nNombre y empresa: ${answers[2]}\nCorreo: ${answers[3]}\nWhatsApp: ${answers[4]}\nHorario propuesto (Colombia): ${answers[5]}\nQuedo pendiente de confirmar disponibilidad.`;

  return <>
    <div className={`demo-card ${started ? 'demo-started' : 'demo-entry'}`} id="demo" ref={card}>
      {started && <>
        <div className="demo-heading"><strong>Tu diagnóstico</strong><span className="demo-badge">DEMO</span></div>
        <div className="transcript" ref={transcript} role="log" aria-live="polite" aria-label="Conversación de diagnóstico">
          {messages.map((message, index) => <p key={index} className={`message message-${message.role}`}>{message.text}</p>)}
        </div>
      </>}
      {complete ? <div className="demo-complete">
        <a className="button" href={whatsappUrl(summary)} target="_blank" rel="noopener noreferrer">Continuar por WhatsApp ↗</a>
        <button className="reset-button" onClick={() => { setAnswers([]); setInput(""); setError(""); setStarted(false); setMessages([]); }}>Empezar de nuevo</button>
      </div> : <form className="demo-form" onSubmit={submit}>
        <label className="sr-only" htmlFor="demo-input">{!started ? "Mensaje de bienvenida automático" : answers.length === 0 ? "¿A qué se dedica tu empresa?" : questions[answers.length]}</label>
        <input ref={field} id="demo-input" value={input} onChange={(event) => setInput(event.target.value)} type={answers.length === 3 ? "email" : answers.length === 4 ? "tel" : "text"} placeholder={!started ? "Escribiendo tu mensaje…" : answers.length === 0 ? "¿A qué se dedica tu empresa?" : answers.length === 5 ? "Ej. martes a las 10:00, hora Colombia" : "Escribe tu respuesta…"} readOnly={!started} required maxLength={600} aria-describedby={error ? "demo-privacy demo-error" : "demo-privacy"} />
        <button type="submit" aria-label="Enviar respuesta">↑</button>
      </form>}
      {error && <p id="demo-error" className="demo-error" role="alert">{error}</p>}
      <p id="demo-privacy" className="demo-note">{started ? "Respuestas predefinidas. Los datos se comparten solo cuando tú envías el resumen por WhatsApp. No crea reservas." : isAutoTyping ? "Escribiendo una consulta de demostración…" : "Se enviará automáticamente en 5 segundos o puedes pulsar enviar ahora."}</p>
    </div>
    {showFloating && <button className="floating-demo" onClick={() => { card.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "center" }); field.current?.focus({ preventScroll: true }); }}>✳ {started ? "Retomar mi diagnóstico" : "Explorar una solución"}</button>}
  </>;
}
