// firebase-init.js — AN Erkən Müdaxilə & İnkişaf Platforması
// Firebase v12 (modular) SDK — CDN ESM. Standalone HTML + vanilla JS.
// Qeyd: config açıqdır (Təlimat istisnası) — qorunma DB Rules ilədir.

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBhyGNzZRGgQShP_C9kwAzTm_g_0zJlzg",
  authDomain: "an-psixoloji-33442.firebaseapp.com",
  databaseURL: "https://an-psixoloji-33442-default-rtdb.firebaseio.com",
  projectId: "an-psixoloji-33442",
  storageBucket: "an-psixoloji-33442.firebasestorage.app",
  messagingSenderId: "528809299356",
  appId: "1:528809299356:web:59cae89a64e446dc520c59",
  measurementId: "G-1D7YD0Y0PD"
};

export let app = null, auth = null, db = null, initError = null;

function banner(text){
  const make = ()=>{
    const d=document.createElement("div");
    d.textContent=text;
    d.style.cssText="position:fixed;left:0;right:0;top:0;z-index:9999;background:#c0533f;color:#fff;font:600 14px/1.4 system-ui,sans-serif;padding:12px 16px;text-align:center;";
    document.body.prepend(d);
  };
  if(document.body) make(); else document.addEventListener("DOMContentLoaded", make);
}

try{
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getDatabase(app);
}catch(e){
  initError = e;
  console.error("[firebase-init]", e);
  banner("⚠ Firebase qoşulmadı: " + e.message);
}
