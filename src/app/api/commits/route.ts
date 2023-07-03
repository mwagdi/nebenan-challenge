import { NextResponse } from 'next/server';

export const GET = async () => {
  const response = await fetch(
    'https://api.github.com/repos/vercel/next.js/commits',
    {
      next: { revalidate: 60 },
    }
  );
  const commits = await response.json();

  return NextResponse.json({ commits });
};
