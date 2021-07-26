export class Repoview {

    constructor(
        public name: string,
        public language: string,
        public full_name: string,
        public forks: number,
        public description: string,
        public created_at: Date,
        public html_url: string
        ) { }
}
