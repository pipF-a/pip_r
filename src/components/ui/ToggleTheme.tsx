'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // マウント状態を管理

  useEffect(() => {
    setMounted(true); // コンポーネントがマウントされた後にtrueにする
  }, []);

  const currentTheme = mounted ? theme : 'system'; 

  return (
    <div>
      {currentTheme === 'light' ? (
        <button className="flex" onClick={() => setTheme('dark')}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M13.1 22h-2.6l.212-.155q.212-.155.462-.348t.462-.348l.212-.155h1.385q2.16-.034 3.997-1.128q1.837-1.095 2.895-2.991q-2.15-.201-4.075-1.094q-1.925-.892-3.45-2.425q-1.506-1.525-2.415-3.45Q9.275 7.98 9.1 5.85Q7.175 6.925 6.088 8.813T5 12.9q0 .3.029.64t.086.622l-.146.05q-.146.052-.335.115q-.19.064-.336.124l-.146.06q-.07-.39-.11-.795Q4 13.31 4 12.9q0-2.92 1.68-5.265t4.436-3.27q-.104 2.34.717 4.501q.82 2.161 2.48 3.82q1.66 1.66 3.82 2.481t4.502.717q-.92 2.754-3.268 4.435T13.1 22M6 21h4.5q.625 0 1.063-.437T12 19.5t-.425-1.062T10.55 18h-1.3l-.5-1.2q-.35-.825-1.1-1.312T6 15q-1.25 0-2.125.863T3 18q0 1.25.875 2.125T6 21m0 1q-1.671-.039-2.835-1.193Q2 19.652 2 17.994q0-1.657 1.165-2.826Q4.329 14 6.002 14q1.21 0 2.2.656t1.47 1.767l.25.577h.615q1.02.012 1.742.742q.721.73.721 1.758q0 1.046-.727 1.773T10.5 22z"></path></svg></button>
      ) : (
        <button className="flex" onClick={() => setTheme('light')}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m17.966 9.792l-.708-.719l1.727-1.715l.707.708zM2.5 19.5v-1h19v1zm9-12.27V4.847h1v2.385zM6.034 9.78L4.32 8.055l.708-.708l1.727 1.727zM7.426 14h9.15q-.575-1.35-1.81-2.175Q13.532 11 12 11t-2.765.825Q8 12.65 7.425 14m-1.31 1q.347-2.175 2.009-3.588T12 10t3.876 1.413T17.884 15zM12 14"></path></svg></button>
      )}
    </div>
  )
}
