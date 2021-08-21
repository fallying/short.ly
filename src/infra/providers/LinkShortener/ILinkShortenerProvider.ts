type LinkShortenerResponse = {
  id: string;
  short_url: string;
  qrcode_url: string;
};

interface ILinkShortenerProvider {
  build(): LinkShortenerResponse;
}

export { ILinkShortenerProvider, LinkShortenerResponse };
