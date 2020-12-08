import { AwsIp } from "../entity/AwsIp";
import { FirestoreService } from "./FirestoreService";
import { Service } from "typedi";
import { GetAwsIpArgs } from "../entity/GetAwpIpArgs";

@Service()
export class AwsIpService {

    private ips: Array<AwsIp> = [];

    constructor(private readonly fireStoreDb: FirestoreService) {
    }

    async find(args: GetAwsIpArgs): Promise<Array<AwsIp>> {
        const {region, service } = args;

        const collection = await this.fireStoreDb
            .getAwsIpsCollection()
            .where('region', '==', region)
            .where('service', '==', service)
            .orderBy('ip_prefix', 'asc').startAt(0).endAt(50).get();

        if (collection.empty) {
            console.log(`No matching documents for : {region} and {service}.`);
            return [];
        }

        collection.forEach(doc => {
            let item = new AwsIp();
            item.ipPrefix = doc.get('ip_prefix');
            item.ipv6Prefix = doc.get('ipv6_prefix');
            item.region = doc.get('region');
            item.service = doc.get('service');
            this.ips.push(item);
        });

        return this.ips;
    }
}