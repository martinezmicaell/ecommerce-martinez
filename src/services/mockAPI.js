const data = [{
    img: "https://img.freepik.com/free-photo/muscular-young-woman-athlete-gray_155003-12251.jpg?w=1380&t=st=1663274140~exp=1663274740~hmac=11d8abd13488efbd4f91172458d55c522c62674bb176e57ab1d7d6255a7bd254",
    title: "Remera Reportiva Negra",
    price: 1500,
    cantity: 10,
}]

const getItems = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1500)
    })
}

export default getItems;