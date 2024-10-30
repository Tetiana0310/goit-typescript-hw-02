export interface Image {
  id: string;
  urls: {
    small: string;
    full?: string;
    regular: string;
  };
  alt_description: string;
}

export interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}