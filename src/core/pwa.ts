import { registerSW } from 'virtual:pwa-register';

export function initializePwa(): void {
  registerSW({ immediate: true });
}
