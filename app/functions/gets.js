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
  const searchTerm = ">";
  const endTerm = "<"
  const infoStartIndex = content.indexOf(searchTerm) + 1;
  let info = content.slice(infoStartIndex)
  const infoEndIndex = info.indexOf(endTerm);
  info = info.slice(0, infoEndIndex)
  return info;
}

export { getDescription, getImage, getInfo }
