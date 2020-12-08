# Cloud Provider IPs API
The API allows you to query the IP addresses of common cloud provider services. For Instance AWS EC2, Azure App Service etc.
The data is taken from official sources. E.g. [Azure](https://www.microsoft.com/en-us/download/details.aspx?id=56519) 
The project is a hobby project and is only developed by me.

# Motivation
There are four reasons why I started this project.
1. I wanted to figure out the simplest way to write a typed GraphQL Api. 
2. Improve my TypeScript Skills
3. Try out Google FireStore DB
4. There is no official API for this kind of Data (At least I have not found any)

# Milestones
1. Import some Data to Google FireStore via Cloud Functions :heavy_check_mark:
1.1 Retrieve some Data from FireStore over a GraphQL API build with TypeGraphQL :heavy_check_mark:
2. Import more Data to FireStore (AWS, Azure, Salesforce)
2.1 Create FireStore indexes
3. Retrieve all Data via GraphQL API
4. Write Tests
5. Deploy
