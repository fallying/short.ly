import { inject, injectable } from "tsyringe";
import { ILinksRepository } from "../../../../infra/database/repositories/links/ILinksRepository";

type ShowShortenedLinkResponse = {
    original_url: string;
}

@injectable()
class ShowShortenedLink {

    constructor(
        @inject('LinksRepository')
        private readonly linksRepository: ILinksRepository
    ) { }

    async run(id: string): Promise<ShowShortenedLinkResponse> {

        const links = await this.linksRepository.findByCode(id)

        if (!links) {
            throw new Error('Links not found!')
        }

        return {
            ...links
        }
    }
}

export { ShowShortenedLink };
