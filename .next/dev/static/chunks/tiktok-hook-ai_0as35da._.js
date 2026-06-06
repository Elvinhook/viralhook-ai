(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/tiktok-hook-ai/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/tiktok-hook-ai/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/tiktok-hook-ai/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://vlmzxmogbxgjcejedpcy.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_CUgbndtOUu86fgX6b4VLRg_B6JNneHh"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/tiktok-hook-ai/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tiktok-hook-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tiktok-hook-ai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tiktok-hook-ai/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Home() {
    _s();
    const [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [platform, setPlatform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("TikTok");
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Deutsch");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Business");
    const [hookStyle, setHookStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Emotional");
    const [hookFilter, setHookFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Viral");
    const [hooks, setHooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [savedHooks, setSavedHooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hookHistory, setHookHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("free");
    const [authMode, setAuthMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser().then({
                "Home.useEffect": ({ data })=>{
                    setUser(data.user);
                }
            }["Home.useEffect"]);
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "Home.useEffect": (_event, session)=>{
                    setUser(session?.user ?? null);
                }
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>subscription.unsubscribe()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const loadSavedHooks = {
                "Home.useEffect.loadSavedHooks": async ()=>{
                    if (!user) {
                        setSavedHooks([]);
                        return;
                    }
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("hooks").select("hook").eq("user_id", user.id).order("created_at", {
                        ascending: false
                    });
                    if (error) {
                        console.log("LOAD ERROR:", error);
                        return;
                    }
                    setSavedHooks(data?.map({
                        "Home.useEffect.loadSavedHooks": (item)=>item.hook
                    }["Home.useEffect.loadSavedHooks"]) || []);
                    const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("plan").eq("id", user.id).single();
                    if (profile) {
                        setPlan(profile.plan);
                    }
                }
            }["Home.useEffect.loadSavedHooks"];
            loadSavedHooks();
        }
    }["Home.useEffect"], [
        user
    ]);
    const handleAuth = async ()=>{
        if (authMode === "signup") {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
                email,
                password
            });
            if (error) {
                alert(error.message);
                return;
            }
            if (data.user) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").insert([
                    {
                        id: data.user.id,
                        email: data.user.email,
                        plan: "free"
                    }
                ]);
            }
            alert("Account erstellt!");
        } else {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                email,
                password
            });
            if (error) {
                alert(error.message);
                return;
            }
            setUser(data.user);
        }
    };
    const generateHooks = async ()=>{
        if (!topic) {
            alert("Bitte Thema eingeben");
            return;
        }
        setLoading(true);
        if (!user) {
            alert("Bitte zuerst einloggen");
            setLoading(false);
            return;
        }
        if (plan !== "pro") {
            const today = new Date().toISOString().split("T")[0];
            const { count, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("usage_logs").select("*", {
                count: "exact",
                head: true
            }).eq("user_id", user.id).gte("created_at", `${today}T00:00:00.000Z`);
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
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    topic,
                    platform,
                    language,
                    niche: category,
                    style: hookStyle,
                    filter: hookFilter
                })
            });
            const data = await response.json();
            const generatedHooks = data.result.split("\n").map((hook)=>hook.replace(/^\d+[\).\s-]*/, "").trim()).filter((hook)=>hook.length > 0);
            setHooks(generatedHooks);
            setHookHistory([
                generatedHooks,
                ...hookHistory
            ]);
            if (plan !== "pro") {
                await __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("usage_logs").insert([
                    {
                        user_id: user.id
                    }
                ]);
            }
        } catch (error) {
            alert("Fehler beim Generieren der Hooks.");
        }
        setLoading(false);
    };
    const copyHook = async (hook)=>{
        await navigator.clipboard.writeText(hook);
        setCopied(hook);
        setTimeout(()=>{
            setCopied("");
        }, 2000);
    };
    const saveHook = async (hook)=>{
        if (!user) {
            alert("Bitte zuerst einloggen");
            return;
        }
        console.log("SAVE BUTTON GEKLICKT:", hook);
        if (!savedHooks.includes(hook)) {
            const updatedHooks = [
                ...savedHooks,
                hook
            ];
            setSavedHooks(updatedHooks);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("hooks").insert([
                {
                    hook: hook,
                    user_id: user.id
                }
            ]).select();
            console.log("SAVE DATA:", data);
            console.log("SAVE ERROR:", error);
            console.log("USER ID:", user.id);
            localStorage.setItem("savedHooks", JSON.stringify(updatedHooks));
        }
    };
    const deleteHook = async (hookToDelete)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("hooks").delete().eq("hook", hookToDelete).eq("user_id", user.id);
        if (error) {
            console.log("DELETE ERROR:", error);
            return;
        }
        setSavedHooks(savedHooks.filter((hook)=>hook !== hookToDelete));
    };
    const clearAllHooks = async ()=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("hooks").delete().neq("id", 0);
        if (error) {
            console.log(error);
            return;
        }
        setSavedHooks([]);
    };
    const downloadSavedHooks = ()=>{
        if (savedHooks.length === 0) {
            alert("Keine gespeicherten Hooks vorhanden.");
            return;
        }
        const text = savedHooks.join("\n\n");
        const blob = new Blob([
            text
        ], {
            type: "text/plain"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "saved-hooks.txt";
        a.click();
        URL.revokeObjectURL(url);
    };
    const cardStyle = darkMode ? "bg-zinc-900/80 border-zinc-800" : "bg-white border-gray-200";
    const inputStyle = darkMode ? "bg-black border-zinc-700 text-white" : "bg-white border-gray-300 text-black";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `min-h-screen px-4 sm:px-6 py-6 sm:py-10 transition-colors duration-500 ${darkMode ? "bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-white" : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black"}`,
        children: [
            !user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto mb-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl mb-3",
                                children: "🚀"
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 312,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold",
                                children: authMode === "login" ? "Willkommen zurück" : "Account erstellen"
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 313,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mt-2 text-sm",
                                children: "Speichere deine besten Hooks sicher in deinem Account."
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 316,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 311,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        placeholder: "E-Mail-Adresse",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        className: "w-full mb-3 px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500"
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 321,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "Passwort",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        className: "w-full mb-5 px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500"
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 329,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAuth,
                        className: "w-full py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-[1.02] transition",
                        children: authMode === "login" ? "Einloggen" : "Kostenlos registrieren"
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 337,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setAuthMode(authMode === "login" ? "signup" : "login"),
                        className: "w-full mt-4 text-sm text-gray-300 hover:text-white underline",
                        children: authMode === "login" ? "Noch keinen Account? Jetzt registrieren" : "Schon einen Account? Einloggen"
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 344,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                lineNumber: 310,
                columnNumber: 3
            }, this),
            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto mb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-4xl mb-3",
                            children: "👋"
                        }, void 0, false, {
                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                            lineNumber: 358,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold mb-2",
                            children: "Willkommen zurück"
                        }, void 0, false, {
                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                            lineNumber: 360,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm mb-5 break-all",
                            children: user.email
                        }, void 0, false, {
                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                            lineNumber: 364,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-pink-400 font-bold mb-4",
                            children: plan === "pro" ? "PRO 🚀" : "FREE"
                        }, void 0, false, {
                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                            lineNumber: 368,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: async ()=>{
                                await __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                                setUser(null);
                            },
                            className: "bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition",
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                            lineNumber: 372,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: async ()=>{
                                const response = await fetch("/api/create-checkout-session", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        userId: user.id,
                                        email: user.email
                                    })
                                });
                                const text = await response.text();
                                console.log("CHECKOUT RESPONSE:", text);
                                const data = JSON.parse(text);
                                if (data.url) {
                                    window.location.href = data.url;
                                }
                            },
                            className: "mt-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition",
                            children: "Upgrade to Pro 🚀"
                        }, void 0, false, {
                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                            lineNumber: 382,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                    lineNumber: 357,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                lineNumber: 356,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto flex justify-end items-center gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setDarkMode(!darkMode),
                    className: `px-5 py-2 rounded-xl font-semibold transition hover:scale-105 ${darkMode ? "bg-white text-black" : "bg-black text-white"}`,
                    children: darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"
                }, void 0, false, {
                    fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                    lineNumber: 423,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                lineNumber: 416,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-5xl mx-auto text-center pt-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm mb-6 shadow-lg",
                        children: "🚀 Viral Hooks for Creators"
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl sm:text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent",
                        children: "Viral Hook AI"
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 439,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-lg md:text-xl max-w-2xl mx-auto mb-10 ${darkMode ? "text-gray-400" : "text-gray-600"}`,
                        children: "Generate scroll-stopping hooks for TikTok, Instagram and YouTube in seconds."
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border rounded-3xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto transition hover:scale-[1.01] ${cardStyle}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: platform,
                                        onChange: (e)=>setPlatform(e.target.value),
                                        className: `rounded-2xl p-4 border ${inputStyle}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "TikTok"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 462,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Instagram"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 463,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "YouTube"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 464,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: language,
                                        onChange: (e)=>setLanguage(e.target.value),
                                        className: `rounded-2xl p-4 border ${inputStyle}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Deutsch"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "English"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 473,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Türkçe"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                        lineNumber: 467,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: category,
                                        onChange: (e)=>setCategory(e.target.value),
                                        className: `rounded-2xl p-4 border ${inputStyle}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Business"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 482,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Fitness"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 483,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Beauty"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 484,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Gaming"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 485,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Motivation"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 486,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: hookStyle,
                                        onChange: (e)=>setHookStyle(e.target.value),
                                        className: `rounded-2xl p-4 border ${inputStyle}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Emotional"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 494,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Controversial"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Story"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Educational"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Funny"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 498,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: hookFilter,
                                        onChange: (e)=>setHookFilter(e.target.value),
                                        className: `rounded-2xl p-4 border ${inputStyle}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Viral"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 506,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Aggressive"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Story"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "CTA"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 509,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Emotional"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: topic,
                                onChange: (e)=>setTopic(e.target.value),
                                placeholder: "Enter your topic...",
                                className: `w-full rounded-2xl p-5 mb-4 border text-lg ${inputStyle}`
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: generateHooks,
                                className: `w-full py-4 rounded-2xl font-bold text-lg transition hover:scale-[1.03] active:scale-[0.98] ${darkMode ? "bg-white text-black" : "bg-black text-white"}`,
                                children: loading ? "Generating..." : "Generate Hooks"
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 521,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this),
            hooks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl mx-auto mt-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-6 text-center",
                        children: "Generated Hooks 🔥"
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 535,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: hooks.map((hook, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border rounded-3xl p-5 shadow-xl transition hover:scale-[1.01] ${cardStyle}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between gap-4 items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg",
                                                children: hook
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 546,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-white/10 px-3 py-1 rounded-full",
                                                children: platform
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 548,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                        lineNumber: 545,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-3 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyHook(hook),
                                                className: "bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition",
                                                children: copied === hook ? "Copied!" : "Copy"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>saveHook(hook),
                                                className: "bg-pink-500 text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 transition",
                                                children: "❤️ Save"
                                            }, void 0, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 561,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                        lineNumber: 553,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 541,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 539,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                lineNumber: 534,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl mx-auto mt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-6 text-center",
                        children: "Trending Hooks 🔥"
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border rounded-3xl p-5 ${cardStyle}`,
                                children: "Nobody talks about this business trick..."
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 581,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border rounded-3xl p-5 ${cardStyle}`,
                                children: "This fitness mistake ruins your gains."
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 585,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border rounded-3xl p-5 ${cardStyle}`,
                                children: "Why most creators fail in the first 30 days."
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 589,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border rounded-3xl p-5 ${cardStyle}`,
                                children: "This content strategy changes everything."
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 593,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl mx-auto mt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `border rounded-3xl p-6 shadow-2xl ${cardStyle}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold",
                                            children: "Saved Hooks ❤️"
                                        }, void 0, false, {
                                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                            lineNumber: 604,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm mt-1",
                                            children: [
                                                savedHooks.length,
                                                " gespeicherte Hooks"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                            lineNumber: 605,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                    lineNumber: 603,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: downloadSavedHooks,
                                            className: "bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition",
                                            children: "Download"
                                        }, void 0, false, {
                                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                            lineNumber: 611,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: clearAllHooks,
                                            className: "bg-red-500 text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 transition",
                                            children: "Clear All"
                                        }, void 0, false, {
                                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                            lineNumber: 618,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                    lineNumber: 610,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                            lineNumber: 602,
                            columnNumber: 5
                        }, this),
                        savedHooks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-10 text-gray-400",
                            children: "Noch keine Hooks gespeichert."
                        }, void 0, false, {
                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                            lineNumber: 628,
                            columnNumber: 7
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4",
                            children: savedHooks.map((hook, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-white/10 bg-black/30 p-5 flex flex-col sm:flex-row justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg",
                                            children: hook
                                        }, void 0, false, {
                                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                            lineNumber: 638,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>deleteHook(hook),
                                            className: "bg-red-500 text-white px-4 py-2 rounded-xl font-semibold hover:scale-105 transition",
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                            lineNumber: 640,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                    lineNumber: 634,
                                    columnNumber: 11
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                            lineNumber: 632,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                    lineNumber: 601,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                lineNumber: 600,
                columnNumber: 1
            }, this),
            hookHistory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl mx-auto mt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-6 text-center",
                        children: "Hook History 📜"
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 656,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6",
                        children: hookHistory.map((historyItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border rounded-3xl p-5 ${cardStyle}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold mb-4",
                                        children: [
                                            "Generation #",
                                            index + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                        lineNumber: 666,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: historyItem.map((hook, hookIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: hook
                                            }, hookIndex, false, {
                                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                                lineNumber: 672,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                        lineNumber: 670,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 662,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 660,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                lineNumber: 655,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "max-w-5xl mx-auto mt-24 border-t border-zinc-800 pt-10 pb-6 text-center text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold mb-3 text-white",
                        children: "Viral Hook AI 🚀"
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 683,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6",
                        children: "Create viral hooks for TikTok, Instagram and YouTube."
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 687,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-center gap-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/contact",
                                className: "hover:underline",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 692,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/privacy",
                                className: "hover:underline",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 696,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/impressum",
                                className: "hover:underline",
                                children: "Impressum"
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 700,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/terms",
                                className: "hover:underline",
                                children: "Terms of Service"
                            }, void 0, false, {
                                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                                lineNumber: 704,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 691,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tiktok$2d$hook$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm opacity-70",
                        children: "© 2026 Viral Hook AI. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                        lineNumber: 709,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tiktok-hook-ai/app/page.tsx",
                lineNumber: 682,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/tiktok-hook-ai/app/page.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
}
_s(Home, "Pj0HS1tcU/shCmuAi0+WhOY/NVI=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=tiktok-hook-ai_0as35da._.js.map