import appFirebase, { Firebase } from 'fire-base';

export class Anotacion {
  private static db = appFirebase.db.collection('anotaciones');

  static getAll = (callback: CallableFunction): void => {
    Anotacion.db.orderBy('titulo').onSnapshot((snapshot) => {
      const data = snapshot.docs.map(Firebase.defaultMapper);
      callback(data);
    });
  };

  static getById = async (id: string, callback: CallableFunction) => {
    Anotacion.db.doc(id).onSnapshot((snap) => {
      const data = snap.data();
      callback(data);
    });
  };
}
