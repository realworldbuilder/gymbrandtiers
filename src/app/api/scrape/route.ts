import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Validate URL
    let parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    // Fetch the page
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch URL' }, { status: 400 });
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Extract title
    let title = $('meta[property="og:title"]').attr('content') || 
                $('meta[name="og:title"]').attr('content') ||
                $('title').text() ||
                parsedUrl.hostname;

    // Clean up title
    title = title.trim().replace(/\s+/g, ' ');

    // Extract image
    let image = $('meta[property="og:image"]').attr('content') ||
                $('meta[name="og:image"]').attr('content') ||
                $('meta[property="twitter:image"]').attr('content') ||
                $('meta[name="twitter:image"]').attr('content');

    // If no image found, use favicon
    if (!image) {
      const domain = parsedUrl.hostname;
      image = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } else if (image.startsWith('/')) {
      // Convert relative URLs to absolute
      image = new URL(image, url).toString();
    }

    return NextResponse.json({
      name: title,
      image: image,
      url: url
    });

  } catch (error) {
    console.error('Scraping error:', error);
    return NextResponse.json({ error: 'Failed to scrape URL' }, { status: 500 });
  }
}