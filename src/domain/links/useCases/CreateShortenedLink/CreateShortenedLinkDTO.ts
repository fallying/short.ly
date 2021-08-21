type CreateShortenedLinkDTO = {
    id: string;
    original_url: string;
    qrcode_url: string;
    short_url: string;
    user_id: string;
}

export { CreateShortenedLinkDTO }