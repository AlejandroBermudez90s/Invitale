// Distribución estable: pétalos en los márgenes y en el centro, sin capturar toques.
const petals = [
  [3, 31, -8, 22, 14], [10, 38, -25, -14, 12], [18, 35, -14, 18, 15],
  [26, 43, -33, -20, 11], [34, 37, -5, 24, 13], [42, 45, -22, -16, 11],
  [50, 39, -31, 20, 12], [58, 46, -12, -24, 10], [66, 34, -23, 15, 12],
  [74, 42, -7, -18, 13], [82, 36, -29, 23, 15], [90, 40, -18, -18, 12],
  [97, 33, -3, -22, 14], [22, 48, -39, 12, 10], [62, 44, -36, -13, 11],
]

export default function FallingPetals() {
  return <div className="ae-falling-petals" aria-hidden="true">
    {petals.map(([left, duration, delay, drift, size], index) => <span className={`ae-falling-petal ae-petal-tone-${index % 3}`} key={index} style={{ left: `${left}%`, '--petal-duration': `${duration}s`, '--petal-delay': `${delay}s`, '--petal-drift': `${drift}px`, '--petal-size': `${size}px`, '--petal-opacity': left > 20 && left < 80 ? .2 : .3, '--petal-turn': `${6 + index % 5}s` }}><i /></span>)}
  </div>
}
