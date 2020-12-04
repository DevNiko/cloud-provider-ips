import { AwsIpService } from "../Service/AwsIpService";
import { Resolver, Query, Arg } from "type-graphql";
import {AwsIp} from "../entity/AwsIp";
import { Service } from "typedi";

@Service()
@Resolver(of => AwsIp)
export class AwsIpResolver {

    constructor(
        // constructor injection of the service
        private readonly awsIpService: AwsIpService
    ) {}

    @Query(returns => [AwsIp])
    async ips(@Arg("region") region: string): Promise<AwsIp[]> {
        const ips = await this.awsIpService.findByRegion(region);
        if (ips === undefined) {
            //throw new AwsIpNotFoundError(id);
        }
        return ips;
    }
}