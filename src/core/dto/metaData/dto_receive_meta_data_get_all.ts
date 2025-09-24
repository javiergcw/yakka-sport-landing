export interface GooglebotJson {
  index: boolean;
  follow: boolean;
  "max-video-preview": number;
  "max-image-preview": string;
  "max-snippet": number;
}

export interface Authors {
  name: string;
}

export interface MetaDataItem {
  id: number;
  date_created: string;
  date_updated: string | null;
  title: string;
  description: string;
  creator: string;
  publisher: string;
  format_detection_email: string | null;
  format_detection_address: string | null;
  format_detection_telephone: string | null;
  metadata_base: string;
  canonical: string;
  robots_index: boolean;
  robots_follow: boolean;
  verification_google: string;
  googlebot_json: GooglebotJson;
  keywords: string[];
  authors: Authors;
  flavor: number;
  favicon_ico?: string;
  favicon_svg?: string;
  apple_touch_icon?: string;
}

export interface MetaDataResponse {
  data: MetaDataItem[];
}
