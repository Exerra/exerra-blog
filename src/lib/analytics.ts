export default function analytics(slug: string) {
    if (slug == undefined) return
    fetch(`https://cdn.exerra.xyz/blog?slug=${slug}&platform=website`)
}