import firebaseApp from "./config";
import { getFirestore, collection, query, getDocs, orderBy, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export const getProyectos = async () => {

    try {
        const q = query(collection(db, "proyectos"), orderBy("id", "asc"));
        const querySnapshot = await getDocs(q);

        const arrayProyectos = [];
        querySnapshot.forEach((doc) => {
            arrayProyectos.push(doc.data());
        });

        return arrayProyectos;
    } catch (error) {
        console.log(error.message);
    }
};

export const getInfoActualidad = async() => {
    try {
        const docRef = doc(db, 'sobreMi', 'actualidad');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("Documento no encontrado!");
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const getHabilidadesExtra = async() => {
    try {
        const docRef = doc(db, 'sobreMi', 'habilidadesExtra');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().iconos;
        } else {
            console.log("Documento no encontrado!");
        }
    } catch (error) {
        console.log(error.message);
    }
}