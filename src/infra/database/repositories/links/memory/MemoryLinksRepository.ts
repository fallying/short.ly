import { CreateShortenedLinkDTO } from "../../../../../domain/links/useCases/CreateShortenedLink/CreateShortenedLinkDTO";
import { ILinksRepository } from "../ILinksRepository";

class MemoryLinksRepository implements ILinksRepository {
    private links: CreateShortenedLinkDTO[];

    constructor() {
        this.links = [];
    }

    async findByCode(id: string): Promise<CreateShortenedLinkDTO | null> {
        const links = this.links.find(link => link.id === id);

        if (!links) {
            return null;
        }

        return links;
    }

    async save({
        original_url,
        qrcode_url,
        short_url,
        id,
        user_id }: CreateShortenedLinkDTO): Promise<void> {
        this.links.push({
            original_url,
            qrcode_url,
            short_url,
            id,
            user_id
        })
    }
}

export { MemoryLinksRepository };