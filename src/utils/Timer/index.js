export function delay(timer = 1000) {
  return new Promise((reject) => setTimeout(reject, timer));
}
