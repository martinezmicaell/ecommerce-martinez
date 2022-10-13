// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyD_8oWxoiW0xKN2W0nfDYq0PqP9gLuqBLY",
    authDomain: "ecommerce-marbis.firebaseapp.com",
    projectId: "ecommerce-marbis",
    storageBucket: "ecommerce-marbis.appspot.com",
    messagingSenderId: "164229192405",
    appId: "1:164229192405:web:de41e6cf7ef1f634e6a05c",
    measurementId: "G-0R3NRXRVPM"
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