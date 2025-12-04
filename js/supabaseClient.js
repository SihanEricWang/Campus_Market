// assets/js/supabaseClient.js

// 这里填你的 Supabase 项目 URL 与 anon key
const SUPABASE_URL = "https://kyahlnncjckcjmjoamzb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5YWhsbm5jamNrY2ptam9hbXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MTY0NjYsImV4cCI6MjA4MDM5MjQ2Nn0.gUSPBJpq1zluGSAHuIcV3b0p94npypCs6l0Ywh2KU6s";

// Supabase 官方 SDK 通过全局变量 supabase 提供 createClient()
const { createClient } = supabase;

// 创建全局客户端
window.supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
