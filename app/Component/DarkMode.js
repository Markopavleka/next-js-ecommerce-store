'use client'; // Add 'use client' at the top

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import style from './DarkMode.module.scss'; // Import your SCSS stylesheet

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={style.themeSwitchContainer}>
      <label htmlFor="theme" className={style.theme}>
        <span className="theme__toggle-wrap">
          <input
            type="checkbox"
            id="theme"
            role="switch"
            name="theme"
            onClick={() =>
              setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
            }
          />
        </span>
        <span>{resolvedTheme}</span>
      </label>
    </div>
  );
}
