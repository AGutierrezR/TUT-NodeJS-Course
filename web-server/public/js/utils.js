const createParagraph = (innerText, elementClass) => {
  const para = document.createElement('p')
  const node = document.createTextNode(text)
  para.appendChild(node)
  return para
}

module.exports = { createParagraph }
