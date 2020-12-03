import { AwsIp } from "src/entity/AwsIp";
import {
    FirestoreService
} from "./FirestoreService";
import { Service, Inject } from "typedi";

@Service()
export class AwsIpService {

    @Inject("AWS_IPS_SERVICE")
    private ips: Array<AwsIp>;

    constructor(private readonly fireStoreDb: FirestoreService) {
    }

    async findByRegion(region: string): Promise<Array<AwsIp>> {

        const snapshot = await this.fireStoreDb
            .getAwsIpsCollection()
            .where('region', '==', region).get();

        if (snapshot.empty) {
            console.log(`No matching documents for region: {region}.`);
            return [];
        }

        snapshot.forEach(doc => {
            let item = new AwsIp();
            item.id = doc.id;
            this.ips.push(item);
        });

        return this.ips;
    }
}