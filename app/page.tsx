use client;

import { useEffect, useRef, useState } from "react";

type Msg = { text: string; me?: boolean };

export default function Home() {
  const [messages, setMessages] = useState<Msg[]>([
    { text: "Welcome to the lounge — share freely, stay classy ✨" },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);
  const year = new Date().getFullYear();

  function sendMsg() {
    const val = input.trim();
    if (!val) return;
    setMessages((m) => [...m, { text: val, me: true }]);
    setInput("");
  }

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="container">
        <h1>✨ Signature D Private Client Club — After Dark</h1>
        <p className="lock">Invitation-only access • A classy space to network, share, and connect</p>

        <div className="card">
          <h2>Membership Tiers</h2>

          <h3>Silver Access</h3>
          <div className="price">$3,500/month</div>
          <ul>
            <li>Priority WhatsApp/Signal support</li>
            <li>2 cinematic reels + 5–7 posts / month</li>
            <li>Monthly 90-min strategy call + performance report</li>
            <li>Annual VIP shoot (half-day)</li>
            <li>Signature D Roundtable invite</li>
          </ul>
          <a href="#apply" className="btn">Apply for Silver</a>

          <h3>Gold Access</h3>
          <div className="price">$7,500/month</div>
          <ul>
            <li>All Silver benefits — doubled</li>
            <li>Mid-month check-in call</li>
            <li>Ad campaign management (excl. ad spend)</li>
          </ul>
          <a href="#apply" className="btn">Apply for Gold</a>

          <h3>Platinum Access</h3>
          <div className="price">$12,500+/month</div>
          <ul>
            <li>Dedicated Signature D team</li>
            <li>6–8 reels + 15–20 posts / month</li>
            <li>Weekly operational support</li>
            <li>Quarterly on-site day</li>
            <li>Empire growth roadmap</li>
          </ul>
          <a href="#apply" className="btn">Apply for Platinum</a>
        </div>

        <div className="chatroom">
          <h2>🕯️ After Dark Lounge</h2>
          <div className="messages" id="messages" ref={listRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg${m.me ? " me" : ""}`}>{m.text}</div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMsg()}
            />
            <button onClick={sendMsg}>Send</button>
          </div>
        </div>
      </div>

      <footer>
        © <span>{year}</span> DeVirn Signature House, Inc. • Private Access
      </footer>

      {/* Global styles for this page */}
      <style jsx global>{`
        :root {
          --emerald: #0e3f3f;
          --emeraldDeep: #0b3232;
          --gold: #f5c046;
          --goldBright: #ffd978;
          --ink: #0a0d10;
          --silver: #e6eaef;
          --white: #fff;
          --charcoal: #14171a;
        }
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; background: var(--ink); color: var(--silver); }
        body { font-family: var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
        a { color: inherit; text-decoration: none; }
        .container { max-width: 880px; margin: 0 auto; padding: 40px 24px; }
        h1, h2, h3 { font-family: var(--font-playfair), Georgia, "Times New Roman", serif; margin: 0 0 16px; }
        h1 { font-size: 40px; color: var(--gold); }
        h2 { font-size: 24px; color: var(--silver); }
        h3 { font-size: 20px; color: var(--silver); margin-top: 18px; }
        .card {
          border: 1px solid rgba(230,234,239,.14);
          border-radius: 20px;
          padding: 28px;
          margin: 20px 0;
          background: linear-gradient(145deg, var(--charcoal), rgba(10,13,16,.95));
          box-shadow: 0 18px 40px rgba(0,0,0,.45);
        }
        .price { font-size: 22px; font-weight: 700; color: var(--goldBright); }
        ul { margin: 12px 0 0 20px; padding: 0; }
        li { margin: 8px 0; }
        footer {
          padding: 24px; text-align: center; font-size: 14px; color: var(--silver);
          opacity: .75; border-top: 1px solid rgba(230,234,239,.12);
        }
        .btn {
          display: inline-block; padding: 12px 18px; margin-top: 16px; border-radius: 14px;
          background: linear-gradient(135deg, var(--gold), var(--goldBright));
          color: #181a1e; font-weight: 600;
        }
        .lock { font-size: 14px; opacity: .75; margin-top: 8px; }
        .chatroom {
          margin-top: 40px; border-radius: 20px; border: 1px solid rgba(230,234,239,.12);
          background: linear-gradient(145deg, rgba(14,63,63,.35), rgba(10,13,16,.9));
          padding: 20px; box-shadow: 0 18px 40px rgba(0,0,0,.4);
        }
        .chatroom h2 {
          font-size: 24px; color: var(--gold); margin-bottom: 12px;
          font-family: var(--font-playfair), serif;
        }
        .messages {
          height: 300px; overflow-y: auto; padding: 12px; border-radius: 14px;
          background: rgba(255,255,255,.03); margin-bottom: 12px;
        }
        .msg { margin: 6px 0; padding: 8px 12px; border-radius: 12px; background: rgba(255,255,255,.05); }
        .msg.me {
          background: linear-gradient(135deg, var(--gold), var(--goldBright));
          color: #181a1e; text-align: right;
        }
        .chat-input { display: flex; gap: 8px; }
        .chat-input input {
          flex: 1; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(230,234,239,.18);
          background: rgba(255,255,255,.08); color: var(--silver); outline: none;
        }
        .chat-input button {
          padding: 12px 16px; border-radius: 12px; background: var(--emerald);
          color: var(--white); border: none; font-weight: 600; cursor: pointer;
        }
        .chat-input button:hover { background: var(--emeraldDeep); }
      `}</style>
    </>
  );
}