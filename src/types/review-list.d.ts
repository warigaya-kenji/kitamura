export type ReviewList = {
  reviewInfo: Array<ReviewItem>;
  totalCount: number;
};

export type ReviewItem = {
  reviewId: number;
  reviewDttm: string;
  reviewer: string;
  janCode: string;
  itemName: string;
  totalRating: number;
  designRating: number;
  priceRating: number;
  operationRating: number;
  imageRating: number;
  title: string;
  pros: string;
  cons: string;
  helpfulNum: number;
};
