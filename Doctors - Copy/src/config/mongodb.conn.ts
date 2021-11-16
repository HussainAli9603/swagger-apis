import { connect, connection } from 'mongoose';
export class DbMongo {
  constructor() {
  }
  connect(h: string, dbName: string, u?: string, pass?: string, p?: number) {
    let connectionuri = `mongodb://${h}/${dbName}`;
    
    if (u != undefined && p != undefined) {
      connectionuri = `mongodb+srv://${u}:${pass}@${h}/${dbName}`;
    }
    connect(connectionuri,{ useNewUrlParser: true , useUnifiedTopology: true }, (err: any) => {
      if (err) {
        console.log(err);
        console.log('DataBase Connection Falied');
      } else {
        console.log('connected with database');
      }
    });
  }
}
export const MonStatConnection = connection.readyState;