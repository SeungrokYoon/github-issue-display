export const dateStringToKoreanString = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return `${year}년 ${month}월 ${day}일`
}
