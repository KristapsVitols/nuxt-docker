export default function() {
    process.env.baseURL = process.server ? 'http://nginx' : 'http://localhost:3050';
}