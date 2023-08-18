export const getMaxValue = (data: any, key: any) => {

  if (!data || (data?.length <= 0) || !key) {
    return 0
  }

  const maxValue = data.reduce((max: any, current: any) => {
    if (max < Number(current[key])){
      return Number(current[key])
    }
    return max
  }, Number(data[0][key]))

  return maxValue
}

export const getMinValue = (data: any, key: any) => {

  if (!data || (data?.length <= 0) || !key) {
    return 0
  }

  const minValue = data.reduce((min: any, current: any) => {
    if (min > Number(current[key])){
      return Number(current[key])
    }
    return min
  }, Number(data[0][key]))

  return minValue
}