export interface PrayerSection {
    heading?: string;
    subheading?: string;
    postheading?: string;
    text: string;
  }
  
  export interface Prayer {
    id: string;
    heading?: string;
    title: string;
    header_title: string;
    sections: PrayerSection[];
    image: string;
    imageSize?: number;
  }