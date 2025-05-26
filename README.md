# tbh 💬

**tbh** stands for *"to be honest."*
This is a small, fun little web toy that lets you anonymously (or not!) confess your emotions to someone — no accounts, no logins, just a link.

## 🌐 Try it out

👉 [tbh.muhammadsharique.com](https://tbh.muhammadsharique.com)

1. Type your confession.
2. Share the link with the person you're confessing to.
3. That's it.

Example:
[https://tbh.muhammadsharique.com/?message=422b6a662b6c676a6f2b7864666e64656e2b6a687f7e6a6767722b796e6a6f2b627f25](https://tbh.muhammadsharique.com/?message=422b6a662b6c676a6f2b7864666e64656e2b6a687f7e6a6767722b796e6a6f2b627f25)

## ⚙️ How it works

* Built using **vanilla JavaScript** — no frameworks.
* Messages are **encrypted** using a simple algorithm and encoded directly into the URL.
* No database, no backend — everything is handled on the client side.
* Decryption happens instantly when someone opens the link.

## 🚧 Limitations

* Since everything is stored in the URL, very long messages may hit URL length limits.
* The encryption is basic — it's meant more for fun than serious privacy or security.

## 📦 Deployment

Hosted on [Vercel](https://tbh.vercel.app), so it's fast, free, and serverless.
