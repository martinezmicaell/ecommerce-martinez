const data = [{
    img: "https://instagram.fgnr1-1.fna.fbcdn.net/v/t51.2885-15/272220437_798245367686113_7420586762146501181_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fgnr1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ImQ9LIY19KYAX9KLpVR&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc1Njk3Mjk2MzUzMTkzNjkyMQ%3D%3D.2-ccb7-5&oh=00_AT8CZNjmaKjzUXJ7reYyatJg4YjK8iSOraSXF4GrcknQww&oe=6325C40B&_nc_sid=30a2ef",
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