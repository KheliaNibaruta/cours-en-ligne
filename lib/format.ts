import React from 'react'

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR"
  }).format(price)
}

export default formatPrice