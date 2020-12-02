import { ObjectType, Field } from "type-graphql";


@ObjectType()
export class AwsIp {
    
    @Field()
    ipPrefix: string;

    @Field()
    ipv6_prefix: string;

    @Field()
    networkBorderGroup: string;

    @Field()
    region: string;

    @Field()
    service: string;
}