'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-12">
        <div className="space-y-8">
          <div className="space-y-1">
            <h2 className="text-3xl">AISW</h2>
            <p className="text-sm text-gray-500">Your Gateway to Multiple AI Models</p>
          </div>

          <button
            className="w-full bg-[#0000EE] text-white rounded-none h-12"
            onClick={() => signIn('google', { callbackUrl: '/' })}>
            log in →
          </button>
        </div>

        <div className="gap-4 text-xs text-gray-600">
          By clicking log in, or continuing with the other options below, you agree to AISW&apos;s{' '}
          <a href="/terms" className="text-sm underline">
            Terms of Service
          </a>{' '}
          and have read the{' '}
          <a href="/privacy" className="text-sm underline">
            Privacy Policy
          </a>
        </div>

        <p className="text-sm text-gray-400">© 2025 AISW. All rights reserved.</p>
      </div>
    </div>
  );
}
