const quantityLabel = {
  1 : 'peu',
  2 : 'modérement',
  3 : 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3]
  const scaleType = careType === 'light' ? '☀️' : '💧'

  return (
    <div onClick={() => handleClick(careType, scaleValue)}>
      {range.map((number) =>
        scaleValue >= number ? <p key={number.toString()}>{scaleType}</p> : null
      ) }
    </div>
  )
}

function handleClick(careType, scaleValue) {
  alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${ careType === 'light' ? "de lumière" : "d'arrosage" }`)
}

export default CareScale
