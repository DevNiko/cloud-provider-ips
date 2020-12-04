import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";


@ObjectType()
export class AwsIp {
    
    @Field(type => ID)
    id: string;

    @Field(type => String, {nullable: true})
    ipPrefix?: string;

    @Field(type => String, {nullable: true})
    ipv6Prefix?: string;

    @Field(type => String)
    networkBorderGroup: string;

    @Field(type => String)
    region: string;

    @Field(type => String)
    service: string;
}