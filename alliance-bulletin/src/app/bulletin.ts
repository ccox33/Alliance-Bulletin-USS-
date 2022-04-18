export class Bulletin {

    BulletinId: number = 0;
    DateCreated: Date = new Date(); ;
    Topic: String = '';
    Software: String = '';
    Symptom: String = '';
    Resolution: String = '';
    Notes: String = '';
    Noteimage: String = '';
    IsDeleted: Boolean = false;
    DateModified: Date = new Date();


    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}