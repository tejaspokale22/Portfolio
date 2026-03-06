"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, Send, Sparkles, X } from "lucide-react";
import { motion } from "motion/react";

import { aiAssistant } from "@/app/services/aiService";
import { linkifyMessage } from "../utils/linkifyMessage";

const ANIM_MS = 220;

// Suggested portfolio questions (adapted from CipherDocs style)
const SAMPLE_QUESTIONS = [
  "What are Tejas's technical skills?",
  "Tell me about Tejas's work experience.",
  "What projects has Tejas built?",
  "What achievements does Tejas have?",
];

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [renderOverlay, setRenderOverlay] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);
  const closeTimerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (open && renderOverlay) {
      const id = requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
      return () => cancelAnimationFrame(id);
    }
  }, [open, renderOverlay]);

  useEffect(() => {
    if (!open) return;
    setRenderOverlay(true);
    const id = requestAnimationFrame(() => setOverlayVisible(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    if (!renderOverlay) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [renderOverlay]);

  const closeChat = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setLoading(false);
    setOpen(false);
    setOverlayVisible(false);
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setRenderOverlay(false);
    }, ANIM_MS);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeChat();
        return;
      }
      if (
        document.activeElement !== inputRef.current &&
        e.key.length === 1 &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.metaKey
      ) {
        e.preventDefault();
        inputRef.current?.focus();
        setInput((prev) => prev + e.key);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeChat]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
      abortRef.current?.abort();
    };
  }, []);

  const handleSend = async (overrideText) => {
    const text = (overrideText ?? input).trim();
    if (!text || loading) return;

    const userMsg = { role: "user", content: text };
    const updatedMessages = [...messages, userMsg];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // Abort any in-flight request
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      const history = updatedMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const reply = await aiAssistant(text, history, controller.signal);
      const replyText =
        typeof reply === "string" ? reply.trim() : String(reply || "");

      if (replyText) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: replyText },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Sorry, I couldn't process that.",
          },
        ]);
      }
    } catch (err) {
      if (err?.name === "AbortError") return;

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Connection error. Please try again.",
        },
      ]);
    } finally {
      abortRef.current = null;
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {!renderOverlay && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-40 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-black text-white shadow hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          aria-label="Open AI assistant"
        >
          <MessageSquare className="h-7 w-7" />
        </motion.button>
      )}

      {renderOverlay && (
        <div className="fixed inset-0 z-40 flex items-stretch justify-stretch p-0 sm:items-end sm:justify-end sm:p-4">
          <button
            onClick={closeChat}
            className="absolute inset-0"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={
              overlayVisible
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.95 }
            }
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative flex h-full w-full min-h-screen flex-col overflow-hidden rounded-none bg-black/95 text-white backdrop-blur-sm dark:bg-white/95 dark:text-black sm:h-[70vh] sm:min-h-0 sm:max-h-[600px] sm:w-[95vw] sm:max-w-[420px] sm:rounded-2xl"
          >
            <div className="flex shrink-0 items-center justify-between px-4 py-3 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-200 dark:bg-neutral-800">
                  <Sparkles className="h-5 w-5 text-black dark:text-white" />
                </div>
                <span className="text-lg font-medium">
                  Tejas&apos;s AI assistant
                </span>
              </div>
              <button
                onClick={closeChat}
                className="cursor-pointer rounded-lg p-2 text-neutral-500 transition hover:bg-white/15 hover:text-white dark:text-neutral-500 dark:hover:bg-neutral-200 dark:hover:text-black"
                aria-label="Close AI assistant"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-x-hidden overflow-y-auto p-4">
              {messages.length === 0 && !loading && (
                <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-6 px-1">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-800/80 dark:bg-neutral-200/80">
                      <MessageSquare className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
                    </div>
                    <div>
                      <p className="text-base font-medium">How can I help?</p>
                      <p className="mt-1 text-sm text-neutral-400 dark:text-neutral-600">
                        Ask about Tejas&apos;s skills, experience, projects, or
                        achievements.
                      </p>
                    </div>
                  </div>
                  <div className="grid w-full max-w-[370px] grid-cols-1 gap-2 sm:grid-cols-2">
                    {SAMPLE_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSend(q)}
                        className="cursor-pointer rounded-xl border-2 border-neutral-700 bg-neutral-900 px-1.5 py-2 text-left text-[13px] leading-snug text-neutral-200 transition hover:border-neutral-500 hover:bg-neutral-800 hover:text-white dark:border-neutral-300 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:border-neutral-500 dark:hover:bg-neutral-200 dark:hover:text-black"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <ChatMessage msg={msg} />
                </motion.div>
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex max-w-[80%] items-center gap-1 rounded-xl bg-[#303030] px-4 py-3 dark:bg-neutral-200">
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      className="h-2 w-2 rounded-full bg-white dark:bg-black"
                    />
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                      className="h-2 w-2 rounded-full bg-white dark:bg-black"
                    />
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                      className="h-2 w-2 rounded-full bg-white dark:bg-black"
                    />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center gap-2 p-4">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything about Tejas"
                disabled={loading}
                className="flex-1 rounded-full bg-[#303030] px-4 py-2.5 text-sm text-white placeholder:text-neutral-400 outline-none ring-0 focus:ring-0 dark:bg-neutral-300 dark:text-black dark:placeholder:text-neutral-500 dark:ring-0"
              />

              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || loading}
                className="flex cursor-pointer items-center justify-center text-white hover:text-neutral-300 disabled:cursor-not-allowed disabled:opacity-60 dark:text-black dark:hover:text-neutral-700"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

const ChatMessage = React.memo(function ChatMessageComponent({ msg }) {
  const content =
    msg.role === "assistant" ? linkifyMessage(msg.content) : msg.content;

  return (
    <div
      className={`max-w-[80%] min-w-0 rounded-xl px-4 py-2 text-sm break-words ${
        msg.role === "user"
          ? "bg-[#272727] text-white dark:bg-neutral-200 dark:text-black"
          : "bg-[#3c3c3c] text-neutral-200 dark:bg-neutral-300 dark:text-black"
      }`}
    >
      {content}
    </div>
  );
});
