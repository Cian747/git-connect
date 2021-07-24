export class User {
    constructor(
        public id: number,
        public login: string,
        public name: string,
        public bio: string,
        public created_at: Date,
        public location: string,
        public avatar_url: string,
        public followers: number,
        public html_url: string,
        public repos_url: string) { }

}