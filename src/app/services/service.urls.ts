export class AppServiceUrls {
    private static urlConfigs = {
        ADD_LEAD_URL: 'api/leads/',
        GET_LEAD_URL: 'api/leads/',
        DELETE_LEAD_URL: 'api/leads/',
        MARK_LEAD_URL: 'api/mark_lead/',
        BASE_SERVER_URL: 'http://3.219.31.158:4000/'
    };

    public static getUrl(key: string): string {
        return this.urlConfigs.BASE_SERVER_URL + this.urlConfigs[key];

    }
}
