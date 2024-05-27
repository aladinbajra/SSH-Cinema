import mongoose, { Document, Schema } from "mongoose";

export interface INewsletterSubscription extends Document {
  email: string;
  subscriptionDate: Date;
}

const NewsletterSubscriptionSchema: Schema = new Schema({
  email: { type: String, required: true },
  subscriptionDate: { type: Date, default: Date.now },
});

const NewsletterSubscription = mongoose.model<INewsletterSubscription>(
  "NewsletterSubscription",
  NewsletterSubscriptionSchema
);

export default NewsletterSubscription;
