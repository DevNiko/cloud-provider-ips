import {
    CollectionReference,
    Firestore
} from "@google-cloud/firestore";
import { Service } from "typedi";

@Service()
export class FirestoreService extends Firestore {

    constructor() {
        super(
            {
                "projectId": "cloud-provider-ip-ranges-api",
                "keyFilename": "../../etc/cpipr-api-service-account.json"
            }
        );
    }

    getAwsIpsCollection(): CollectionReference {
        return this.collection('aws-ips');
    }

    getAzureIpsCollection(): CollectionReference {
        return this.collection('azure-ips');
    }

    getSalesForceIpsCollection(): CollectionReference {
        return this.collection('salesforce-ips');
    }
}