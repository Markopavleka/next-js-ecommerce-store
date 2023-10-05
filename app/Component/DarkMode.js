'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import style from './DarkMode.module.scss';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button
        className={style.button}
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      >
        {resolvedTheme}
      </button>
    </div>
  );
}
