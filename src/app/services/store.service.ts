import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(public AngularFirestore : AngularFirestore) { }

  //Obtenes listado actualizado con subscribe(La lista que traiga siempre va a estar actualizada)
  getDoc<T>(collection: string){
    return this.AngularFirestore.collection<T>(collection).valueChanges();
  }

  setDoc(collection: string, data: any){
    return this.AngularFirestore.collection(collection).add(data);
  }

  //Obtenes listado actualizado con promise(Solo trae la lista una vez)
  //Ahora las funciones son verdaderamente genericas
  getList<T>(collection: string){
    return new Promise<Array<T>>((resolve,reject)=>{
      this.AngularFirestore.collection<T>(collection).valueChanges().subscribe((r: Array<T>)=> resolve(r),reject);
    })

  }
  // modDoc(collection: string, document: string, data: any){
  //   return this.AngularFirestore.collection(collection).doc(document).update(data);
  // }

  // deleteDoc(collection: string, document: string, data: any){
  //   return this.AngularFirestore.collection(collection).doc(document).delete();
  // }
}
