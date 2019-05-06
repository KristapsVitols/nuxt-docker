export default function() {
    process.env.baseURL = process.server ? process.env.nginxUrl : process.env.frontendUrl;
}