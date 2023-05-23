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

export { getDescription, getImage }
