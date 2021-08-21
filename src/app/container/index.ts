import { container } from 'tsyringe';
import { ILinksRepository } from '../../infra/database/repositories/links/ILinksRepository';
import { LinksRepository } from '../../infra/database/repositories/links/prisma/LinksRepository';
import { IUsersRepository } from '../../infra/database/repositories/users/IUsersRepository';
import { UsersRepository } from '../../infra/database/repositories/users/prisma/UsersRepository';
import { ILinkShortenerProvider, NanoIdShortener } from '../../infra/providers/LinkShortener';
import { IMatrixCodeRenderProvider, QRCode } from '../../infra/providers/MatrixCodeRender';

container.registerSingleton<ILinkShortenerProvider>(
    'LinkShortenerProvider',
    NanoIdShortener,
);

container.registerSingleton<ILinksRepository>(
    'LinksRepository',
    LinksRepository,
);

container.registerSingleton<IMatrixCodeRenderProvider>(
    'MatrixCodeRenderProvider',
    QRCode,
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)
