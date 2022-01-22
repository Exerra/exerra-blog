export default function analytics(slug: string) {
    if (slug == undefined) return
    fetch(`https://api.exerra.xyz/blog?slug=${slug}&platform=website`)
}
