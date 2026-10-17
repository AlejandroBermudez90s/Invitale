const leaves = [
  ['2%', 28, 0, 5], ['4%', 34, 10, -7],
  ['95%', 31, 4, 5], ['98%', 37, 17, -7],
]

export default function FallingLeaves() {
  return <div className="ae-falling-leaves" aria-hidden="true">
    {leaves.map(([left, duration, delay, drift], index) => <span className="ae-falling-leaf" key={index} style={{ left, '--leaf-duration': `${duration}s`, '--leaf-delay': `${delay}s`, '--leaf-drift': `${drift}px` }}><i /></span>)}
  </div>
}
