import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import {PPFilles} from './ppfilles/PPFilles';
import {PPGarcon} from './ppgarcons/PPGarcon';
import {JFilles} from './jfilles/JFilles';
import {JGarcon} from './jgarcon/JGarcon';
import {PattesFilles} from './pattes-filles/pattesFilles';
import {PattesGarcons} from './pattes-garcon/PattesGarcons';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  PPFillesCollection: AngularFirestoreCollection<PPFilles>;
  PPGarconCollection: AngularFirestoreCollection<PPGarcon>;
  JFillesCollection: AngularFirestoreCollection<JFilles>;
  JGarconCollection: AngularFirestoreCollection<JGarcon>;
  PattesFillesCollection: AngularFirestoreCollection<PattesFilles>;
  PattesGarconCollection: AngularFirestoreCollection<PattesGarcons>;

  PPFillesDoc: AngularFirestoreDocument<PPFilles>;
  PPGarconDoc: AngularFirestoreDocument<PPGarcon>;
  JFillesDoc: AngularFirestoreDocument<JFilles>;
  JGarconDoc: AngularFirestoreDocument<JGarcon>;
  PattesFillesDoc: AngularFirestoreDocument<PattesFilles>;
  PattesGarconDoc: AngularFirestoreDocument<PattesGarcons>;
  constructor(private afs: AngularFirestore) {
    this.PPFillesCollection = this.afs.collection('PPFilles' );
    this.PPGarconCollection = this.afs.collection('PPGarcon' );
    this.JFillesCollection = this.afs.collection('JFilles' );
    this.JGarconCollection = this.afs.collection('JGarcon');
    this.PattesFillesCollection = this.afs.collection('PattesFilles' );
    this.PattesGarconCollection = this.afs.collection('PattesGarcon');
  }
  getPPFilles() {
    // tslint:disable-next-line:no-shadowed-variable
    return this.PPFillesCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as PPFilles;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getPPFillesData(id: string) {
    this.PPFillesDoc = this.afs.doc<PPFilles>(`PPFilles/${id}`);
    return this.PPFillesDoc.valueChanges();
  }
  getPPGarcon() {
    // tslint:disable-next-line:no-shadowed-variable
    return this.PPGarconCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as PPGarcon;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getPPGarconData(id: string) {
    this.PPGarconDoc = this.afs.doc<PPGarcon>(`PPGarcon/${id}`);
    return this.PPGarconDoc.valueChanges();
  }
  getJFilles() {
    // tslint:disable-next-line:no-shadowed-variable
    return this.JFillesCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as JFilles;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getJFillesData(id: string) {
    this.JFillesDoc = this.afs.doc<PPFilles>(`JFilles/${id}`);
    return this.JFillesDoc.valueChanges();
  }
  getJGarcon() {
    // tslint:disable-next-line:no-shadowed-variable
    return this.JGarconCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as JGarcon;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getJGarconData(id: string) {
    this.JGarconDoc = this.afs.doc<JGarcon>(`JGarcon/${id}`);
    return this.JFillesDoc.valueChanges();
  }
  getPattesGarcon() {
    // tslint:disable-next-line:no-shadowed-variable
    return this.PattesGarconCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as PattesGarcons;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getPattesGarconData(id: string) {
    this.PattesGarconDoc = this.afs.doc<PattesGarcons>(`PattesGarcon/${id}`);
    return this.PattesGarconDoc.valueChanges();
  }
  getPattesFilles() {
    // tslint:disable-next-line:no-shadowed-variable
    return this.PattesFillesCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as PattesFilles;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getPattesFillesData(id: string) {
    this.PattesFillesDoc = this.afs.doc<PattesFilles>(`PattesFilles/${id}`);
    return this.PattesFillesDoc.valueChanges();
  }
  createPPFilles(data: { coverimage: string; title: string; size: string; color1: string;
    color2: string;
    color3: string;
    color4: string;  }) {
    // tslint:disable-next-line:no-unused-expression
    this.PPFillesCollection.add(data).then(r => {data; } );
  }
  createPPGarcon(data: { coverimage: string; title: string; size: string; color1: string;
    color2: string;
    color3: string;
    color4: string;  }) {
    // tslint:disable-next-line:no-unused-expression
    this.PPGarconCollection.add(data).then(r => {data; } );
  }
  createJFilles(data: { coverimage: string; title: string; size: string; color1: string;
    color2: string;
    color3: string;
    color4: string;  }) {
    // tslint:disable-next-line:no-unused-expression
    this.JFillesCollection.add(data).then(r => {data; } );
  }
  createJGarcon(data: { coverimage: string; title: string; size: string; color1: string;
    color2: string;
    color3: string;
    color4: string;  }) {
    // tslint:disable-next-line:no-unused-expression
    this.JGarconCollection.add(data).then(r => {data; } );
  }
  createPattesGarcon(data: { coverimage: string; title: string; size: string; color1: string;
    color2: string;
    color3: string;
    color4: string;  }) {
    // tslint:disable-next-line:no-unused-expression
    this.PattesGarconCollection.add(data).then(r => {data; } );
  }
  createPattesFilles(data: { coverimage: string; title: string; size: string; color1: string;
    color2: string;
    color3: string;
    color4: string;  }) {
    // tslint:disable-next-line:no-unused-expression
    this.PattesFillesCollection.add(data).then(r => {data; } );
  }
  getPPGarcon1(id: string) {
    return this.afs.doc<PPGarcon>(`PPGarcon/${id}`);
  }
  getPPFilles1(id: string) {
    return this.afs.doc<PPFilles>(`PPFilles/${id}`);
  }
  getJGarcon1(id: string) {
    return this.afs.doc<JGarcon>(`JGarcon/${id}`);
  }
  getJFilles1(id: string) {
    return this.afs.doc<JFilles>(`JFilles/${id}`);
  }
  getPattesGarcon1(id: string) {
    return this.afs.doc<PattesGarcons>(`PattesGarcon/${id}`);
  }
  getPattesFilles1(id: string) {
    return this.afs.doc<PattesFilles>(`PattesFilles/${id}`);
  }
  deletePPGarcon(id: string) {
    return this.getPPGarcon1(id).delete();
  }
  deletePPFilles(id: string) {
    return this.getPPFilles1(id).delete();
  }
  deleteJGarcon(id: string) {
    return this.getJGarcon1(id).delete();
  }
  deleteJFilles(id: string) {
    return this.getJFilles1(id).delete();
  }
  deletePattesGarcon(id: string) {
    return this.getPattesGarcon1(id).delete();
  }
  deletePattesFilles(id: string) {
    return this.getPattesFilles1(id).delete();
  }
  updatePPGarcon(id: string, formData) {

    return this.getPPGarcon1(id).update(formData);
  }
  updatePPFilles(id: string, formData) {

    return this.getPPFilles1(id).update(formData);
  }
  updateJGarcon(id: string, formData) {

    return this.getJGarcon1(id).update(formData);
  }
  updateJFilles(id: string, formData) {

    return this.getJFilles1(id).update(formData);
  }
  updatePattesGarcon(id: string, formData) {

    return this.getPattesGarcon1(id).update(formData);
  }
  updatePattesFilles(id: string, formData) {

    return this.getPattesFilles1(id).update(formData);
  }



}

