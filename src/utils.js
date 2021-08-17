export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomFrom(array) {
  return array[random(0, array.length - 1)]
}