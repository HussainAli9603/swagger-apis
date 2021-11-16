import { connect, connection } from 'mongoose';
export class DbMongo {
  constructor() {
  }
  connect(h: string, dbName: string, u?: string, pass?: string, p?: number) {
    //?retryWrites=true&w=majority
    let connectionuri = `mongodb+srv://aliali:Devilsmaycry@cluster0.metrh.mongodb.net/Final_test_APi?retryWrites=true&w=majority`;
    console.log(u, dbName, u, pass, p)

    if (u != undefined && p != undefined) {
      // connectionuri = `mongodb+srv://${u}:${pass}@cluster0.v0ma2.mongodb.net/${dbName}?retryWrites=true&w=majority`;
      connectionuri = `mongodb+srv://aliali:Devilsmaycry@cluster0.v0ma2.mongodb.net/Final_test_APi?retryWrites=true&w=majority`;
      console.log(connectionuri)
    }
    //, { useNewUrlParser: true, useUnifiedTopology: true },
    connect(connectionuri, { useNewUrlParser: true, useUnifiedTopology: true }, (err: any) => {
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