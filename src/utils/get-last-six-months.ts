function getLastSixMonths() {
  const months = []
  const today = new Date()

  for (let i = 0; i < 6; i++) {
    const date = new Date(today)
    date.setMonth(today.getMonth() - i)
    months.push(
      date.toLocaleString('default', { month: 'long', year: 'numeric' }),
    )
  }

  return months.reverse()
}

export { getLastSixMonths }
