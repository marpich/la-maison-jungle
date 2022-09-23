function CareScale(props) {
  const scaleValue = props.scaleValue
  const careType = props.careType
  const range = [1, 2, 3]
  const scaleType = careType === 'light' ? '☀️' : '💧'

  return (
    <div>
      {range.map((number) =>
      scaleValue >= number ? <p key={number.toString()}>{scaleType}</p> : null
      ) }
    </div>
  )
}

export default CareScale
