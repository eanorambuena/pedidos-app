import { useState, useEffect } from 'react'

import { db } from '../firebaseConfig';

function useFirebase(collectionId) {
    const [storedList, setStoredList] = useState([]);

    useEffect(() => {
        db.collection(collectionId).onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setStoredList(docs);
        });
    }, [collectionId, setStoredList]);

    const addItem = async (item) => {
        try {
            await db.collection(collectionId).add(item);
        }
        catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    const deleteItem = async (id) => {
        try {
            await db.collection(collectionId).doc(id).delete();
        }
        catch (error) {
            console.error("Error removing document: ", error);
        }
    }

    const editItem = async (id, item) => {
        try {
            await db.collection(collectionId).doc(id).update(item);
        }
        catch (error) {
            console.error("Error updating document: ", error);
        }
    }

    return { storedList, addItem, deleteItem, editItem };
}

export default useFirebase;