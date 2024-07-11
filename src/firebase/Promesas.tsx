import { addDoc } from "firebase/firestore"
import {db} from ".../firebase"
export const registrarPersona=async(persona)=>{
    const docRef=await addDoc.(collection(db, "personas"),persona)
}