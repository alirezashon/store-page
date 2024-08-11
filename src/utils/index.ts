
export const Add = async (id: string, price: number) => {
  const basket: string[] = JSON.parse(
    localStorage.getItem("basket") || "[]"
  )

  const existIndex = basket?.findIndex(
    (post) => post.split("r^6x^T#M7^g%h(3^u5%")[2] === id
  )

  if (existIndex !== -1) {
    // If the item already exists, increment its count
    const count = parseInt(basket[existIndex].split("r^6x^T#M7^g%h(3^u5%")[3])

    basket[existIndex] = `${
      Array.from({ length: 7 }, () =>
        "ABCDEFHIJOPQVWXYZabcdefnopqrstuvwxyz0123456789".charAt(
          Math.floor(Math.random() * 62)
        )
      ).join("") +
      "r^6x^T#M7^g%h(3^u5%" +
      price +
      "r^6x^T#M7^g%h(3^u5%" +
      id +
      "r^6x^T#M7^g%h(3^u5%" +
      `${count + 1}`
    }`
  } else {
    // If the item does not exist, add a new one
    basket.push(
      `${
        Array.from({ length: 7 }, () =>
          "ABCDEFHIJOPQVWXYZabcdefnopqrstuvwxyz0123456789".charAt(
            Math.floor(Math.random() * 62)
          )
        ).join("") +
        "r^6x^T#M7^g%h(3^u5%" +
        price +
        "r^6x^T#M7^g%h(3^u5%" +
        id +
        "r^6x^T#M7^g%h(3^u5%" +
        "1"
      }`
    )
  }

  localStorage.setItem("basket", JSON.stringify(basket))
}

export const Remove = async (id: string) => {
  const basket: string[] = JSON.parse(
    localStorage.getItem("basket") || "[]"
  )

  const existIndex = basket.findIndex(
    (post) => post.split("r^6x^T#M7^g%h(3^u5%")[2] === id
  )

  if (existIndex !== -1) {
    const count = parseInt(basket[existIndex]?.split("r^6x^T#M7^g%h(3^u5%")[3])
    const price = basket[existIndex]?.split("r^6x^T#M7^g%h(3^u5%")[1]
    count === 1
      ? basket.splice(existIndex, 1)
      : (basket[existIndex] = `${
          Array.from({ length: 7 }, () =>
            "ABCDEFHIJOPQVWXYZabcdefnopqrstuvwxyz0123456789".charAt(
              Math.floor(Math.random() * 62)
            )
          ).join("") +
          "r^6x^T#M7^g%h(3^u5%" +
          price +
          "r^6x^T#M7^g%h(3^u5%" +
          id +
          "r^6x^T#M7^g%h(3^u5%" +
          `${count - 1}`
        }`)
  }
  basket.length === 0
    ? localStorage.removeItem("basket")
    : localStorage.setItem("basket", JSON.stringify(basket))
}
export const Get = (): [string[], string[], number, number] => {
  const basket: string[] = JSON.parse(
    localStorage.getItem("basket") || "[]"
  )

  const productsID = basket.map((post) => post.split("r^6x^T#M7^g%h(3^u5%")[2])

  const countTotal = basket.reduce((acc, d) => {
    const parts = d.split("r^6x^T#M7^g%h(3^u5%")
    const count = parseInt(parts[1])
    return acc + count
  }, 0)

  const priceTotal = basket.reduce((acc, d) => {
    const parts = d.split("r^6x^T#M7^g%h(3^u5%")
    const price = parseInt(parts[3])
    return acc + price
  }, 0)

  return [basket, productsID, countTotal, priceTotal]
}
