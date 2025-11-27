import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fullName, email, message } = await req.json();

    if (!fullName || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return Response.json({ error: "Server config error" }, { status: 500 });
    }

    const text = `
  New message from: ${fullName}
  Email: ${email}
  Message: ${message}
  `;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    const data = await telegramResponse.json();

    if (!data.ok) {
      return Response.json(
        { error: "Telegram error", details: data },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
