export interface ImageInterface {
  id: number;
  name: string;
  url: string;
}

export interface ProjectInterface {
  id: number;
  title: string;
  year: number;
  location: string;
  description: string;
  images: ImageInterface[];
}
