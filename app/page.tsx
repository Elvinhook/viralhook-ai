"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("TikTok");
  const [language, setLanguage] = useState("Deutsch");
  const [category, setCategory] = useState("Business");
  const [hookStyle, setHookStyle] = useState("Emotional");
  const [hookFilter, setHookFilter] = useState("Viral");

  const [hooks, setHooks] = useState<string[]>([]);
  const [savedHooks, setSavedHooks] = useState<string[]>([]);
  const [hookHistory, setHookHistory] = useState<string[][]>([]);

  const [copied, setCopied] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const [plan, setPlan] = useState("free");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setPaymentSuccess(true);
  
      setTimeout(() => {
        setPaymentSuccess(false);
      }, 5000);
    }
  }, []);

  useEffect(() => {
    const loadUserData = async () => {
      if (!user) {
        setSavedHooks([]);
        setPlan("free");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("plan")
        .eq("id", user.id)
        .maybeSingle();

      if (profile?.plan) {
        setPlan(profile.plan);
      }

      const { data, error } = await supabase
        .from("hooks")
        .select("hook")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (!error) {
        setSavedHooks(data?.map((item: any) => item.hook) || []);
      }
    };

    loadUserData();
  }, [user]);

  const handleAuth = async () => {
    if (authMode === "signup") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      if (data.user) {
        await supabase.from("profiles").insert([
          {
            id: data.user.id,
            email: data.user.email,
            plan: "free",
          },
        ]);
      }

      alert("Account erstellt!");
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      setUser(data.user);
    }
  };

  const generateHooks = async () => {
    if (!topic) {
      alert("Bitte Thema eingeben");
      return;
    }

    if (!user) {
      alert("Bitte zuerst einloggen");
      return;
    }

    setLoading(true);

    if (plan !== "pro") {
      const today = new Date().toISOString().split("T")[0];

      const { count, error } = await supabase
        .from("usage_logs")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id)
        .gte("created_at", `${today}T00:00:00.000Z`);

      if (error) {
        console.log("USAGE ERROR:", error);
        setLoading(false);
        return;
      }

      if ((count || 0) >= 5) {
        alert("Free Limit erreicht. Upgrade auf Pro für unbegrenzte Hooks.");
        setLoading(false);
        return;
      }
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          platform,
          language,
          niche: category,
          style: hookStyle,
          filter: hookFilter,
          plan,
        }),
      });

      const data = await response.json();

      const generatedHooks: string[] = Array.from(
        new Set<string>(
          data.result
            .split("\n")
            .map((hook: string) => hook.replace(/^\d+[\).\s-]*/, "").trim())
            .filter((hook: string) => hook.length > 0)
        )
      );

      setHooks(generatedHooks);
      setHookHistory([generatedHooks, ...hookHistory]);

      if (plan !== "pro") {
        await supabase.from("usage_logs").insert([
          {
            user_id: user.id,
          },
        ]);
      }
    } catch (error) {
      alert("Fehler beim Generieren der Hooks.");
    }

    setLoading(false);
  };

  const copyHook = async (hook: string) => {
    await navigator.clipboard.writeText(hook);
    setCopied(hook);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  const saveHook = async (hook: string) => {
    if (!user) {
      alert("Bitte zuerst einloggen");
      return;
    }

    if (!savedHooks.includes(hook)) {
      const updatedHooks = [...savedHooks, hook];
      setSavedHooks(updatedHooks);

      await supabase.from("hooks").insert([
        {
          hook,
          user_id: user.id,
        },
      ]);
    }
  };

  const deleteHook = async (hookToDelete: string) => {
    if (!user) return;

    const { error } = await supabase
      .from("hooks")
      .delete()
      .eq("hook", hookToDelete)
      .eq("user_id", user.id);

    if (error) {
      console.log("DELETE ERROR:", error);
      return;
    }

    setSavedHooks(savedHooks.filter((hook) => hook !== hookToDelete));
  };

  const clearAllHooks = async () => {
    if (!user) return;

    const { error } = await supabase
      .from("hooks")
      .delete()
      .eq("user_id", user.id);

    if (error) {
      console.log(error);
      return;
    }

    setSavedHooks([]);
  };

  const downloadSavedHooks = () => {
    if (savedHooks.length === 0) {
      alert("Keine gespeicherten Hooks vorhanden.");
      return;
    }

    const text = savedHooks.join("\n\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "saved-hooks.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const cardStyle = darkMode
    ? "bg-zinc-900/80 border-zinc-800"
    : "bg-white border-gray-200";

  const inputStyle = darkMode
    ? "bg-black border-zinc-700 text-white"
    : "bg-white border-gray-300 text-black";

  return (
    <main
      className={`min-h-screen px-4 sm:px-6 py-6 sm:py-10 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-white"
          : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black"
      }`}
    >

{paymentSuccess && (
  <div className="max-w-4xl mx-auto mb-6 bg-green-500/20 border border-green-500 text-green-300 p-4 rounded-2xl text-center font-bold">
    ✅ Zahlung erfolgreich! Dein Pro Account wurde aktiviert.
  </div>
)}
      
      {!user && (
        <div className="max-w-md mx-auto mb-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">🚀</div>
            <h2 className="text-3xl font-bold">
              {authMode === "login" ? "Willkommen zurück" : "Account erstellen"}
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Speichere deine besten Hooks sicher in deinem Account.
            </p>
          </div>

          <input
            type="email"
            placeholder="E-Mail-Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500"
          />

          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-5 px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500"
          />

          <button
            onClick={handleAuth}
            className="w-full py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-[1.02] transition"
          >
            {authMode === "login" ? "Einloggen" : "Kostenlos registrieren"}
          </button>

          <button
            onClick={() =>
              setAuthMode(authMode === "login" ? "signup" : "login")
            }
            className="w-full mt-4 text-sm text-gray-300 hover:text-white underline"
          >
            {authMode === "login"
              ? "Noch keinen Account? Jetzt registrieren"
              : "Schon einen Account? Einloggen"}
          </button>
        </div>
      )}

      {user && (
        <div className="max-w-md mx-auto mb-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-xl">
            <div className="text-4xl mb-3">👋</div>

            <h3 className="text-xl font-bold mb-2">Willkommen zurück</h3>

            <p className="text-gray-400 text-sm mb-5 break-all">
              {user.email}
            </p>

            <p className="text-pink-400 font-bold mb-4">
              {plan === "pro" ? "PRO 🚀" : "FREE"}
            </p>

            <div className="flex flex-col items-center gap-3">
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  setUser(null);
                }}
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Logout
              </button>

              {plan === "pro" ? (
                <div className="text-green-400 font-bold">
                  ✅ Pro Mitglied aktiv
                </div>
              ) : (
                <button
                  onClick={async () => {
                    const response = await fetch(
                      "/api/create-checkout-session",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          userId: user.id,
                          email: user.email,
                        }),
                      }
                    );

                    const data = await response.json();

                    if (data.url) {
                      window.location.href = data.url;
                    }
                  }}
                  className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
                >
                  Upgrade to Pro 🚀
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto flex justify-end items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-5 py-2 rounded-xl font-semibold transition hover:scale-105 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <section className="max-w-5xl mx-auto text-center pt-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm mb-6 shadow-lg">
          🚀 Viral Hooks for Creators
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
          Viral Hook AI
        </h1>

        <p
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Generate scroll-stopping hooks for TikTok, Instagram and YouTube in
          seconds.
        </p>

        <div
          className={`border rounded-3xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto transition hover:scale-[1.01] ${cardStyle}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className={`rounded-2xl p-4 border ${inputStyle}`}
            >
              <option>TikTok</option>
              <option>Instagram</option>
              <option>YouTube</option>
            </select>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={`rounded-2xl p-4 border ${inputStyle}`}
            >
              <option>Deutsch</option>
              <option>English</option>
              <option>Türkçe</option>
            </select>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`rounded-2xl p-4 border ${inputStyle}`}
            >
              <option>Business</option>
              <option>Fitness</option>
              <option>Beauty</option>
              <option>Gaming</option>
              <option>Motivation</option>
            </select>

            <select
              value={hookStyle}
              onChange={(e) => setHookStyle(e.target.value)}
              className={`rounded-2xl p-4 border ${inputStyle}`}
            >
              <option>Emotional</option>
              <option>Controversial</option>
              <option>Story</option>
              <option>Educational</option>
              <option>Funny</option>
            </select>

            <select
              value={hookFilter}
              onChange={(e) => setHookFilter(e.target.value)}
              className={`rounded-2xl p-4 border ${inputStyle}`}
            >
              <option>Viral</option>
              <option>Aggressive</option>
              <option>Story</option>
              <option>CTA</option>
              <option>Emotional</option>
            </select>
          </div>

          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter your topic..."
            className={`w-full rounded-2xl p-5 mb-4 border text-lg ${inputStyle}`}
          />

          <button
            onClick={generateHooks}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition hover:scale-[1.03] active:scale-[0.98] ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {loading ? "Generating..." : "Generate Hooks"}
          </button>
        </div>
      </section>

      {hooks.length > 0 && (
        <section className="max-w-4xl mx-auto mt-14">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Generated Hooks 🔥
          </h2>

          <div className="grid gap-4">
            {hooks.map((hook, index) => (
              <div
                key={index}
                className={`border rounded-3xl p-5 shadow-xl transition hover:scale-[1.01] ${cardStyle}`}
              >
                <div className="flex justify-between gap-4 items-start">
                  <p className="text-lg">{hook}</p>

                  <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                    {platform}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    onClick={() => copyHook(hook)}
                    className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    {copied === hook ? "Copied!" : "Copy"}
                  </button>

                  <button
                    onClick={() => saveHook(hook)}
                    className="bg-pink-500 text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    ❤️ Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Trending Hooks 🔥
        </h2>

        <div className="grid gap-4">
          <div className={`border rounded-3xl p-5 ${cardStyle}`}>
            Nobody talks about this business trick...
          </div>

          <div className={`border rounded-3xl p-5 ${cardStyle}`}>
            This fitness mistake ruins your gains.
          </div>

          <div className={`border rounded-3xl p-5 ${cardStyle}`}>
            Why most creators fail in the first 30 days.
          </div>

          <div className={`border rounded-3xl p-5 ${cardStyle}`}>
            This content strategy changes everything.
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-20">
        <div className={`border rounded-3xl p-6 shadow-2xl ${cardStyle}`}>
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold">Saved Hooks ❤️</h2>
              <p className="text-gray-400 text-sm mt-1">
                {savedHooks.length} gespeicherte Hooks
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={downloadSavedHooks}
                className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
              >
                Download
              </button>

              <button
                onClick={clearAllHooks}
                className="bg-red-500 text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
              >
                Clear All
              </button>
            </div>
          </div>

          {savedHooks.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              Noch keine Hooks gespeichert.
            </div>
          ) : (
            <div className="grid gap-4">
              {savedHooks.map((hook, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 flex flex-col sm:flex-row justify-between gap-4"
                >
                  <p className="text-lg">{hook}</p>

                  <button
                    onClick={() => deleteHook(hook)}
                    className="bg-red-500 text-white px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {hookHistory.length > 0 && (
        <section className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Hook History 📜
          </h2>

          <div className="grid gap-6">
            {hookHistory.map((historyItem, index) => (
              <div
                key={index}
                className={`border rounded-3xl p-5 ${cardStyle}`}
              >
                <h3 className="font-bold mb-4">
                  Generation #{index + 1}
                </h3>

                <div className="space-y-3">
                  {historyItem.map((hook, hookIndex) => (
                    <p key={hookIndex}>{hook}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="max-w-5xl mx-auto mt-24 border-t border-zinc-800 pt-10 pb-6 text-center text-gray-400">
        <h3 className="text-2xl font-bold mb-3 text-white">
          Viral Hook AI 🚀
        </h3>

        <p className="mb-6">
          Create viral hooks for TikTok, Instagram and YouTube.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
          <a href="/contact" className="hover:underline">
            Contact
          </a>

          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>

          <a href="/impressum" className="hover:underline">
            Impressum
          </a>

          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>

        <p className="text-sm opacity-70">
          ©️ 2026 Viral Hook AI. All rights reserved.
        </p>
      </footer>
    </main>
  );
}