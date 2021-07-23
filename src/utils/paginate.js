
export default function paginate(data, numPerPage, activePage) {
  const dataCopy = [...data] // needs copying since splice is destructive
  const startArr = (activePage-1)*numPerPage
  const activePeopleArr = dataCopy.splice(startArr, numPerPage)
  return activePeopleArr
}
