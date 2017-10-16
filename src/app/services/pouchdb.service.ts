import { Injectable, EventEmitter } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable()
export class PouchDBService {

    private isInstantiated: boolean;
    private db: PouchDB;
    private dbChangeListener: EventEmitter<any> = new EventEmitter();

    constructor() {
        if (!this.isInstantiated) {

            this.db = new PouchDB("coinwatcher");

            this.db.changes({
                since: 'now',
                live: true,
                include_docs: true,
            }).on('change', change => {
                this.dbChangeListener.emit(change);
            }).on('error', error => {
                console.error(JSON.stringify(error));
            });

            this.isInstantiated = true;
        }
    }

    fetch() {
        return this.db.allDocs({ include_docs: true });
    }

    get(id: string) {
        return this.db.get(id);
    }

    delete(id: string) {
        return this.get(id).then(result => {
            return this.db.remove(result);
        }, error => {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        });
    }

    put(id: string, document: any) {
        document._id = id;
        return this.get(id).then(result => {
            document._rev = result._rev;
            return this.db.put(document);
        }, error => {
            if (error.status == "404") {
                return this.db.put(document);
            } else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        });
    }

    getChangeListener() {
        return this.dbChangeListener;
    }
}