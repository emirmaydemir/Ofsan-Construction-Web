export interface ImageInterface {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: any;
  created_at: string;
  updated_at: string;
}

export interface ProjectInterface {
  id: number;
  title: string;
  year: number;
  location: string;
  description: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  images: ImageInterface[];
}
