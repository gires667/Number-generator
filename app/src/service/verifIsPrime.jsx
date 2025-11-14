export function isPrime(n) {
  if (n <= 1) return false; // les nombres < 2 ne sont jamais premiers

  if (n === 2) return true; // 2 est le seul nombre premier pair

  if (n % 2) return false; //

  // Limite de calcul
  const limit = Math.sqrt(n);

  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
