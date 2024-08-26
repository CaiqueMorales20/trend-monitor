import { ISale } from '@/@types/sale'

import { getLastSixMonths } from './get-last-six-months'

function groupSalesByMonth(sales: ISale[]) {
  const lastSixMonths = getLastSixMonths()
  const salesByMonth: { [key: string]: number } = {}

  lastSixMonths.forEach((month) => {
    salesByMonth[month] = 0
  })

  sales?.forEach((sale) => {
    const saleDate = new Date(sale.saleDate)
    const month = saleDate.toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    })

    if (salesByMonth[month] !== undefined) {
      salesByMonth[month] += 1
    }
  })

  return Object.entries(salesByMonth).map(([month, sales]) => ({
    month,
    sales,
  }))
}

export { groupSalesByMonth }
