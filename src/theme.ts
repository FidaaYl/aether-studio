// ─── Global reactive theme store ─────────────────────────────────────────────
type Listener = (light: boolean) => void
const listeners = new Set<Listener>()

// Read persisted preference, default to dark
let _light: boolean = localStorage.getItem('aether-theme') === 'light'

export function getLight(): boolean {
  return _light
}

export function toggleTheme(): void {
  setLight(!_light)
}

export function setLight(v: boolean): void {
  _light = v
  localStorage.setItem('aether-theme', v ? 'light' : 'dark')
  // Notify every subscribed component synchronously
  listeners.forEach(fn => fn(v))
}

export function subscribe(fn: Listener): () => void {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
