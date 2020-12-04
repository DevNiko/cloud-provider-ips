import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class GetAwsIpArgs {
    @Field(type => String, { nullable: true })
    region?: string;

    @Field(type => String, { nullable: true })
    service: string;
}