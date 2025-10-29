import { NextResponse } from "next/server";

export async function GET() {
  const end = new Date().toISOString().split("T")[0];
  const start = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const response = await fetch(
    `https://wakatime.com/api/v1/users/current/summaries?start=${start}&end=${end}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.WAKATIME_API_KEY + ":"
        ).toString("base64")}`,
      },
      next: { revalidate: 3600 }, // cache for 1h
    }
  );

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch WakaTime stats" }, { status: response.status });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
