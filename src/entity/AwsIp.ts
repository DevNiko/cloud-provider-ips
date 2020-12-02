import { ObjectType, Field, ID } from "type-graphql";


@ObjectType()
export class AwsIp {
    
    @Field(type => ID)
    id: string;

    @Field(type => String)
    ipPrefix: string;

    @Field(type => String)
    ipv6_prefix: string;

    @Field(type => String)
    networkBorderGroup: string;

    @Field(type => String)
    region: string;

    @Field(type => String)
    service: string;
}