function formatCurrency(num: number) {
  const formattedCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formattedCurrency.format(num)
}

export { formatCurrency }
