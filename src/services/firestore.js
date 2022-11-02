// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    projectId: process.env.REACT_APP_FIREBASE_projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_appId,
    measurementId: process.env.REACT_APP_FIREBASE_measurementId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

const analytics = getAnalytics(app);

// export default app;
export { firestore, analytics };


export const getItems = async () => {
    const collectionRef = collection(firestore, "ropa")
    let snapshotDB = await getDocs(collectionRef)

    let dataDocs = snapshotDB.docs.map(doc => {
        let formatDoc = { ...doc.data(), id: doc.id };
        return formatDoc;
    });
    return dataDocs;
}


export const getSingleItem = async (idParams) => {
    const docRef = doc(firestore, "ropa", idParams)
    const docSnapshot = await getDoc(docRef)
    return { ...docSnapshot.data(), id: docSnapshot.id }
}

export const getItemsByCategory = async (categoryParams) => {
    const collectionRef = collection(firestore, "ropa");
    const queryCategory = query(collectionRef, where("category", "==", categoryParams))

    const response = await getDocs(queryCategory);

    let dataDocs = response.docs.map(doc => {
        let formatDoc = { ...doc.data(), id: doc.id };
        return formatDoc;
    });
    return dataDocs;
}

export const createBuyOrder = async (orderData) => {
    // console.log(orderData)
    const collectionRef = collection(firestore, "orders")
    let response = await addDoc(collectionRef, orderData);
    return response.id
    // console.log(response.id)

}

export const getOrderId = async (orderId) => {
    const docRef = doc(firestore, "orders", orderId)

    try {
        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()) {
            return { err: "El ID de esa compra no existe" }
        }
        const dataOrder = docSnap.data();
        return dataOrder

    } catch (error) {

    }
}

export const exportDataToFirestore = async () => {
    const data = [{
        "id": 1,
        "category": "prendas",
        "price": 2582,
        "title": "Absolut Citron",
        "detail": "eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante",
        "stock": 16,
        "img": "https://jbonita.vteximg.com.br/arquivos/ids/214862-1280-1707/A5177802_1.jpg?v=637953168364230000"
    }, {
        "id": 2,
        "category": "prendas",
        "price": 14372,
        "title": "Babucha de cuero",
        "detail": "Hecha con tela de Cuerina, trabajada en todos sus aspectos, ideal para lucir tu outfit.",
        "stock": 4,
        "img": "https://netivooregon.s3.amazonaws.com/attach/modelo/20221022/1007/56882518.webp?108257",
    }, {
        "id": 3,
        "category": "prendas",
        "price": 8478,
        "title": "Wine - Pinot Noir Stoneleigh",
        "detail": "nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at",
        "stock": 3,
        "img": "https://jbonita.vteximg.com.br/arquivos/ids/215510-1280-1707/A7485016_1.jpg?v=637969664279630000"
    }, {
        "id": 4,
        "category": "prendas",
        "price": 2500,
        "title": "Muscul panuelo cebra",
        "detail": "Hecho con tela de Poplin, el top que buscabas es este mismo!",
        "stock": 15,
        "img": "https://netivooregon.s3.amazonaws.com/attach/modelo/20221004/1007/72951163.webp?108257"
    }, {
        "id": 5,
        "category": "prendas",
        "price": 3700,
        "title": "Palazzo estampado",
        "detail": "Hecho con la tela de lino, diseño tipo floreal en blanco y negro.",
        "stock": 19,
        "img": "https://netivooregon.s3.amazonaws.com/attach/modelo/20220919/1007/30433578.webp?108257"
    }, {
        "id": 6,
        "category": "prendas",
        "price": 6000,
        "title": "Hecho a base de tela de Sastrero, un diseño milimalista y elegante, ideal para lucir el toque de tu outfit.",
        "stock": 11,
        "img": "https://netivooregon.s3.amazonaws.com/attach/modelo/20220825/1007/94274551.jpg?108257"
    }, {
        "id": 7,
        "category": "prendas",
        "price": 2700,
        "title": "Blusa estampado",
        "detail": "Hecho con tela de lino, diseño tipo floreal en blanco y negro.",
        "stock": 17,
        "img": "https://netivooregon.s3.amazonaws.com/attach/modelo/20220919/1007/89392154.webp?108257"
    }, {
        "id": 8,
        "category": "prendas",
        "price": 3500,
        "title": "Vestido c/volado lino",
        "detail": "Hecho a base de la tela lino, con colores invernales ideal para tenerlo en tu colección!",
        "stock": 2,
        "img": "https://netivooregon.s3.amazonaws.com/attach/modelo/20220806/1007/67437618.jpg?108281"
    }, {
        "id": 9,
        "category": "prendas",
        "price": 26000,
        "title": "Campera Brighton",
        "detail": "Una campera de cuero, la calidad de su cuero es totalmente Premium, lo mejor para abrigarte y sentirte elegante, apurate a comprar que termina el stock!",
        "stock": 16,
        "img": "https://lamartina.vtexassets.com/arquivos/ids/194724-1200-auto?v=1753387881&width=1200&height=auto&aspect=true"
    }, {
        "id": 10,
        "category": "prendas",
        "price": 19000,
        "title": "Campera con Capucha Cherry",
        "detail": "Campera C/CAP Cherry Marron, Composición: 100% POLYESTER",
        "stock": 13,
        "img": "https://lamartina.vtexassets.com/arquivos/ids/202620-1200-auto?v=637865748435370000&width=1200&height=auto&aspect=true"
    }, {
        "id": 11,
        "category": "prendas",
        "price": 3901,
        "title": "Saco de Piel",
        "detail": "Mantiene su delicadeza, de un material de alta calidad, premium.",
        "stock": 16,
        "img": "https://netivooregon.s3.amazonaws.com/attach/modelo/20220613/1007/50637055.jpg?108265"
    }, {
        "id": 12,
        "category": "prendas",
        "price": 5990,
        "title": "Buzo PINK 32-42",
        "detail": `Buzo de rústico de algodón, con poliéster. Su corte es a la cintura.
        Su cuello es alto, con cierre metálico frontal. Es color rosa, con estampa.
        Sus puños y cintura son en ribb, con material elástico y resistente.
        El buzo Pink es cómodo y canchero.
        Los talles del buzo Pink van del 32 al 42, podés conocer qué talle sos acá abajo.
        No pases la plancha sobre sus estampas.
        Te recomendamos buscar la etiqueta con las indicaciones de lavado, en el interior de la prenda.
        La altura de la modelo es de 1,74 y usa talle 38.`,
        "stock": 5,
        "img": "https://www.comoquieres.com.ar/uploads/picture/image/31903/anticipo_CQ_v23CQ_v_23_eshop48588.jpg"
    }, {
        "id": 13,
        "category": "prendas",
        "price": 6230,
        "title": "https://www.comoquieres.com.ar/uploads/picture/image/32684/S2301031__1_.jpg",
        "detail": `Buzo simil panal, de poliéster con rayón. Es estilo hoodie y su corte es crop.
        Es color mosqueta, con capucha. Tiene detalles de cordones.
        El buzo Bee es cómodo y súper fresco.
        Los talles del buzo Bee van del 32 al 44, podés conocer qué talle sos acá abajo.
        Te recomendamos buscar la etiqueta con las indicaciones de lavado, en el interior de la prenda.`,
        "stock": 17,
        "img": "https://www.comoquieres.com.ar/uploads/picture/image/32684/S2301031__1_.jpg"
    }, {
        "id": 14,
        "category": "prendas",
        "price": 6300,
        "title": `Jardinero corto de gabardina 100% algodón. Es color negro con broches metálicos.
        Sus tiras son regulables para que estés más cómoda. Tiene bolsillo canguro y detalles de roturas.
        El jardinero Catalina es súper canchero y cómodo para los días de calor.
        Los talles del jardinero Catalina van del 32 al 44, podés conocer qué talle sos acá abajo.
        Te recomendamos buscar la etiqueta con las indicaciones de lavado, en el interior de la prenda.
        La altura de la modelo es de 1,74 y usa talle 38.`,
        "stock": 4,
        "img": "https://www.comoquieres.com.ar/uploads/picture/image/31920/anticipo_CQ_v23CQ_v_23_eshop48603.jpg"
    }, {
        "id": 15,
        "category": "prendas",
        "price": 8750,
        "title": "Vestido Luna",
        "detail": `Vestido de crepe de poliéster, con material elástico. Con breteles de tela.
        Su pechera es de punto smock. Viene en color crudo o lila.
        El vestido Luna es súper cómodo.
        Los talles del vestido Luna van del 1 al 3, podés conocer qué talle sos acá abajo.
        Te recomendamos buscar la etiqueta con las indicaciones de lavado, en el interior de la prenda.
        La altura de la modelo del Vestido Crudo es de 1,74 y usa talle 2.
        La altura de la modelo del Vestido Lila es de 1,74 y usa talle 2.`,
        "stock": 14,
        "img": "https://www.comoquieres.com.ar/uploads/picture/image/32487/S2303411__2_.jpg"
    }, {
        "id": 16,
        "category": "prendas",
        "price": 3900,
        "title": "Babucha Lino detallado",
        "detail": "¿Que esperás para ponerte a la moda? Esta hermosa babucha tiene todo lo que andás buscando! Ideal para esta época que está llegando el veranito.",
        "stock": 15,
        "img": "https://netivooregon.s3.amazonaws.com/attach/modelo/20221022/1007/17154292.webp?108257"
    }, {
        "id": 17,
        "category": "zapatos",
        "price": 10500,
        "title": "Black Grizzly",
        "detail": "Botineta Negra Grizzly Fiorentino",
        "stock": 15,
        "img": "https://static.dafiti.com.ar/p/grizzly-9344-052216-1-product.jpg"
    }, {
        "id": 18,
        "category": "zapatos",
        "price": 10887,
        "title": "Vizzano",
        "detail": "Zapato Nude Vizzano",
        "stock": 4,
        "img": "https://static.dafiti.com.ar/p/vizzano-4588-418979-1-product.jpg"
    }, {
        "id": 19,
        "category": "zapatos",
        "price": 13600,
        "title": "Malena White",
        "detail": `Realizadas en diferentes recortes de cuero. Posee tiras con abrojos. Plantilla acolchonada. Tu pie en una nube.
        Base de goma con excelente rebote. Fácil de calzar!
        Base de goma de 2cm.
        100% CUERO, forro vacuno. Horma ancha.`,
        "stock": 20,
        "img": "https://diaba.com.ar/wp-content/uploads/2022/10/20102022-DSC_8038-600x800.jpg"
    }, {
        "id": 20,
        "category": "zapatos",
        "price": 11745,
        "title": "Yenall Miel",
        "detail": "Bota de cuero acordonada con doble cierre con alpinos.",
        "stock": 7,
        "img": "https://file.nubing.com.ar/product/0d398581-9eac-46eb-945c-5e1c506ef455_FULL.jpg"
    }, {
        "id": 21,
        "category": "zapatos",
        "price": 11232,
        "title": "Rush Negro",
        "detail": "Bota de cuero con doble elástico, un calzado ideal para complementar tu outfit.",
        "stock": 2,
        "img": "https://file.nubing.com.ar/product/7b535842-b6e7-466b-af9b-c3fe7492ee3c_FULL.jpg"
    }
    ]

    const collectionRef = collection(firestore, "ropa");

    for (let item of data) {
        const newDoc = await addDoc(collectionRef, item)
        console.log('Doc created:', newDoc.id)
    }

}