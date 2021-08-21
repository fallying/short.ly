import { CreateShortenedLinkDTO } from "../../../../../domain/links/useCases/CreateShortenedLink/CreateShortenedLinkDTO";
import { ILinksRepository } from "../ILinksRepository";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class LinksRepository implements ILinksRepository {
  async save({original_url, qrcode_url, short_url, id, user_id}: CreateShortenedLinkDTO): Promise<void> {
    await prisma.link.create({
      data: {
        original_url,
        qrcode_url,
        short_url,
        id,
        user_id,
      }
    })
  }
  async findByCode(id: string): Promise<CreateShortenedLinkDTO | null> {
    console.log(`${process.env.BASE_URL}/api/short/${id}`);
    
    return prisma.link.findFirst({where: {short_url: `${process.env.BASE_URL}/api/short/${id}`}});
  }
}

export {LinksRepository}