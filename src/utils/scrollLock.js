const LOCK_CLASS = 'scroll-locked';
let lockCount = 0;

export function lockBodyScroll() {
  lockCount += 1;
  document.body.classList.add(LOCK_CLASS);
}

export function unlockBodyScroll() {
  lockCount = Math.max(0, lockCount - 1);

  if (lockCount === 0) {
    document.body.classList.remove(LOCK_CLASS);
    document.body.style.removeProperty('overflow');
  }
}

export function resetBodyScrollLock() {
  lockCount = 0;
  document.body.classList.remove(LOCK_CLASS);
  document.body.style.removeProperty('overflow');
}
