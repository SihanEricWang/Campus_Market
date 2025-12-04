// assets/js/auth.js

const supabase = window.supabaseClient;

document.getElementById("btn-login").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  msg.textContent = "正在登录…";

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    msg.textContent = "登录失败：" + error.message;
    msg.style.color = "red";
  } else {
    msg.textContent = "登录成功，正在跳转…";
    msg.style.color = "green";
    setTimeout(() => (window.location.href = "index.html"), 800);
  }
});

document.getElementById("btn-register").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  msg.textContent = "正在注册…";

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    msg.textContent = "注册失败：" + error.message;
    msg.style.color = "red";
  } else {
    msg.textContent = "注册成功！请登录。";
    msg.style.color = "green";
  }
});
