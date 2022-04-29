const range = document.getElementById('range')

range.addEventListener('input', (e) => {
  //converting string to number
  const value = +e.target.value

  const label = range.nextElementSibling
  label.textContent = value

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
  const labelWidth = getComputedStyle(label).getPropertyValue('width')

  const numRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2)
  const numLableWidth = +labelWidth.substring(0, labelWidth.length - 2)

  const max = +e.target.max
  const min = +e.target.min

  const left = value * (numRangeWidth / max) - numLableWidth / 2

  label.style.left = `${left}px`

})
