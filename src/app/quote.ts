export class Quote {
    public showDetails:boolean;
    constructor(public quote:string, public author:string,public user:string,public dateAdded:Date,public upVotes:number,public downVotes:number){
        this.showDetails=false;
    }
}
