import { useThemeToggle } from '../ui/skiper-ui/skiper26';
import { ThemeToggleButton2 } from '../ui/skiper-ui/skiper4';

export function SiteThemeToggle() {
  const { isDark, toggleTheme } = useThemeToggle({ variant: 'circle', start: 'bottom-left' });

  return (
    <div className="fixed top-6 right-6 z-50">
      <ThemeToggleButton2 className="size-10 p-2" isDark={isDark} onClick={toggleTheme} />
    </div>
  );
}
