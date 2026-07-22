import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// لیست تمام زبان‌های پشتیبانی‌شده در اکوسیستم شما
const locales = ['en', 'fa', 'ps', 'ur', 'fr', 'de', 'tr', 'ru'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // بررسی اینکه آیا مسیر فعلی از قبل شامل یکی از زبان‌ها هست یا خیر
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // اگر زبان در URL وجود داشت، اجازه عبور بده
  if (pathnameHasLocale) return NextResponse.next();

  // اگر کاربر به ریشه سایت (/) مراجعه کرد، او را به زبان پیش‌فرض (انگلیسی) ریدایرکت کن
  request.nextUrl.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // تنظیمات برای نادیده گرفتن فایل‌های استاتیک، تصاویر و مسیرهای API
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|br-logo.png|team|company|.*\\..*).*)',
  ],
};