export default class YoutubeDataService {
    async getYoutubeDataRU(){
        const data = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLaMTQRlMibD7O1TGvWci3geKDFrjg_IHl&key=AIzaSyBNdy-3jf-E0dtKsatb2_YtI_jfmqap1Og")
            .then(resp=>resp.json())
            .then(videoData=>videoData)
        return data      
    }

    async getYoutubeDataEN(){
        const data = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLaMTQRlMibD50awaeTyLOsYHhUfdl5EDL&key=AIzaSyBNdy-3jf-E0dtKsatb2_YtI_jfmqap1Og")
            .then(resp=>resp.json())
            .then(videoData=>videoData)
        return data      
    }
    
    async getYoutubeItemsRU(){
        const data = await this.getYoutubeDataRU();
        return data.items
    }

    async getYoutubeItemsEN(){
        const data = await this.getYoutubeDataEN();
        return data.items
    }
}