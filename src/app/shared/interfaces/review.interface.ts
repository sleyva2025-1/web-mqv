export interface Review {
  name: string;
  date: string;
  rating: number;
  comment: string;
  profileImage?: string;
}

export interface ReviewListComponent {
  reviewList: Review[];
}
