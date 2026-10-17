const leaves = [
  ['1%', 30, -8, 5], ['3%', 34, -20, -7], ['6%', 39, -3, 6], ['9%', 44, -29, -8],
  ['91%', 41, -15, 7], ['94%', 33, -25, -6], ['97%', 37, -6, 5], ['99%', 45, -34, -7],
]

export default function FallingLeaves() {
  return <div className="ae-falling-leaves" aria-hidden="true">
    {leaves.map(([left, duration, delay, drift], index) => <span className="ae-falling-leaf" key={index} style={{ left, '--leaf-duration': `${duration}s`, '--leaf-delay': `${delay}s`, '--leaf-drift': `${drift}px` }}><i /></span>)}
  </div>
}
