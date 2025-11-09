import { NextResponse } from "next/server";

export async function GET() {
  const end = new Date().toISOString().split("T")[0];
  const start = end; // only today

  const response = await fetch(
    `https://wakatime.com/api/v1/users/current/summaries?start=${start}&end=${end}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.WAKATIME_API_KEY + ":"
        ).toString("base64")}`,
      },
      next: { revalidate: 60 }, // cache 1 min (optional)
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch WakaTime stats" },
      { status: response.status }
    );
  }

  const data = await response.json();

  // The summary for today is always at index 0 when start=end
  const today = data.data?.[0]?.grand_total || null;

  return NextResponse.json({
    total_seconds: today.total_seconds,
    text: today.text,       // Example: "3 hrs 12 mins"
    hours: today.hours,
    minutes: today.minutes,
  });
}
