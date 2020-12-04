import { AwsIp } from "../entity/AwsIp";
import {
    FirestoreService
} from "./FirestoreService";
import { Service } from "typedi";

@Service()
export class AwsIpService {

    private ips: Array<AwsIp> = [];

    constructor(private readonly fireStoreDb: FirestoreService) {
    }

    async findByRegion(region: string): Promise<Array<AwsIp>> {

        const snapshot = await this.fireStoreDb
            .getAwsIpsCollection()
            .where('region', '>=', region).get();

        if (snapshot.empty) {
            console.log(`No matching documents for region: {region}.`);
            return [];
        }

        snapshot.forEach(doc => {
            let item = new AwsIp();
            item.id = doc.id;
            item.ipPrefix = doc.get('ip_prefix');
            item.ipv6Prefix = doc.get('ipv6_prefix');
            item.region = doc.get('region');
            item.service = doc.get('service');
            this.ips.push(item);
        });

        return this.ips;
    }
}