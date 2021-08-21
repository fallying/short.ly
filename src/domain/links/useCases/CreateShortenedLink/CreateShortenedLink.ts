import { inject, injectable } from "tsyringe";
import { ILinkShortenerProvider } from "../../../../infra/providers/LinkShortener";
import { ILinksRepository } from "../../../../infra/database/repositories/links/ILinksRepository";

type CreateShortenedLinkRequest = {
    original_url: string,
    user_id: string;
}

type CreateShortenedLinkResponse = {
    short_url: string;
    qrcode_url: string;
}

@injectable()
class CreateShortenedLink {

    constructor(
        @inject('LinkShortenerProvider')
        private readonly linkShortenerProvider: ILinkShortenerProvider,

        @inject('LinksRepository')
        private readonly linksRepository: ILinksRepository
    ) { }

    async run({original_url, user_id}: CreateShortenedLinkRequest): Promise<CreateShortenedLinkResponse> {

        const { qrcode_url, short_url, id } = this.linkShortenerProvider.build()

        await this.linksRepository.save({
            original_url,
            qrcode_url,
            short_url,
            id,
            user_id
        })

        return {
            qrcode_url,
            short_url,
        }
    }
}

export { CreateShortenedLink };
