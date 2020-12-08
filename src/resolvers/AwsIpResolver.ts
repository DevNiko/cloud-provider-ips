import { AwsIpService } from "../Service/AwsIpService";
import { Resolver, Query, Args } from "type-graphql";
import { Service } from "typedi";
import { AwsIp } from "../entity/AwsIp";
import { GetAwsIpArgs } from '../entity/GetAwpIpArgs';

@Service()
@Resolver(of => AwsIp)
export class AwsIpResolver {

    constructor(
        // constructor injection of the service
        private readonly awsIpService: AwsIpService
    ) {}

    @Query(returns => [AwsIp])
    async AwsIps(@Args() args: GetAwsIpArgs): Promise<AwsIp[]> {
        const ips = await this.awsIpService.find(args);
        if (ips === undefined) {
            //throw new AwsIpNotFoundError(id);
        }
        return ips;
    }
}