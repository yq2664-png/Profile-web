import { useNYClock } from '../../hooks/useNYClock';

export default function Footer() {
  const nyTime = useNYClock();

  return (
    <footer>
      <span>Yue Qin · 2026</span>
      <span id="ny-clock" aria-label="Current time in New York">
        {nyTime}
      </span>
      <span>New York, NY</span>
    </footer>
  );
}
