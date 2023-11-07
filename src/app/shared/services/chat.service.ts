import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/compat/firestore";
import { Observable, map } from 'rxjs';
import { UserType } from 'src/app/core/interfaces/user-type';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
    private userTypeCollection: AngularFirestoreCollection <UserType> ;
    userType$: Observable <UserType[]> ;
    constructor(private readonly fsService: AngularFirestore) {
        this.userTypeCollection = fsService.collection<UserType>("user-type");
        this.userType$ = this.userTypeCollection
            .snapshotChanges()
            .pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data() as UserType;
                    data.uid = a.payload.doc.id;
                    return data;
                }))
            )
    }
}

