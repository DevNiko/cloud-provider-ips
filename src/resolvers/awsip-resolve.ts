import "reflect-metadata"; // is required to make the type reflection work
import { AwsIpService } from "src/Service/awsIpService";
import { Resolver, Query, Arg } from "type-graphql";
import {AwsIp} from "../entity/AwsIp";

@Resolver(AwsIp)
export class AwsIpResolver {

    constructor(private awsIpService: AwsIpService) {}

    @Query(returns => [AwsIp])
    async ips(@Arg("region") region: string): Promise<AwsIp[]> {
        const ips = await this.awsIpService.findByRegion(region);
        if (ips === undefined) {
            //throw new AwsIpNotFoundError(id);
        }
        return ips;
    }
}