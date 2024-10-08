const getDescription = (content) => {
  const searchTerm = '<p>'
  const searchEnd = '</p>'
  const startOfSource = content.indexOf(searchTerm) + 3
  let description = content.slice(startOfSource)
  const endOfSource = description.indexOf(searchEnd)
  description = description.slice(0, endOfSource)
  return `${description}`
}

const getImage = (content) => {
  const searchTerm = 'src='
  const searchEnd = '"'
  const startOfSource = content.indexOf(searchTerm) + 5
  let image = content.slice(startOfSource)
  const endOfSource = image.indexOf(searchEnd)
  image = image.slice(0, endOfSource)
  return `${image}`
}

const getInfo = (content) => {
  const searchTerm = '>'
  const endTerm = '<'
  const infoStartIndex = content.indexOf(searchTerm) + 1
  let info = content.slice(infoStartIndex)
  const infoEndIndex = info.indexOf(endTerm)
  info = info.slice(0, infoEndIndex)
  return info
}

const MONTS = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

const getDate = (timestamp) => {
  const timestampArr = timestamp.split('T')

  const date = timestampArr[0].split('-')
  const year = Number(date[0])

  const today = new Date()
  const currentYear = today.getFullYear()

  let displayYear = true

  if (year === currentYear) {
    displayYear = false
  }

  return `${MONTS[Number(date[1])]} ${date[2]}, ${displayYear ? year : ''}`
}

export { getDescription, getImage, getInfo, getDate }
