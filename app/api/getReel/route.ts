// import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
export const runtime = 'edge';
export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const { id } = req;
    const url = `https://www.instagram.com/reel/${id}`;

    const browser = await puppeteer.launch({
      headless: "new"
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for JavaScript content to load (you may need to adjust the timeout)
    await page.waitForSelector('.x1lliihq.x5yr21d.xh8yej3 video');

    const resD = await page.$eval('.x1lliihq.x5yr21d.xh8yej3 video', (element: { getAttribute: (arg0: string) => any; }) => {
      return element.getAttribute('src');
    });

    await browser.close();

    return NextResponse.json({
      message: 'success',
      success:true,
      resD,
    });

   
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
