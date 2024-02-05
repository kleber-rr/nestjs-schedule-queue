import { Column, Table, Model } from "sequelize-typescript";

@Table({
    tableName: "tweets",
})
export class Tweets extends Model {
    @Column
    text: string;
}
