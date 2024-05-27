import  express  from "express";
import mongoose from "mongoose";
import bookingRoutes from "./routes/bookingRoutes";
import cinemaHallRoutes from "./routes/cinemaHallRoutes";
import discountRoutes from "./routes/discountRoutes";
import filmRoutes from "./routes/filmRoutes";
import filmActorRoutes from "./routes/filmActorRoutes";
import filmDirectorRoutes from "./routes/filmDirectorRoutes";
import genreRoutes from "./routes/genreRoutes";
import locationRoutes from "./routes/locationRoutes";
import membershipRoutes from "./routes/membershipRoutes";
import newsletterSubscriptionRoutes from "./routes/newsLetterSubscriptionRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import userPaymentMethodRoutes from "./routes/paymentMethodRoutes";
import promotionRoutes from "./routes/promotionRoutes";
import ratingRoutes from "./routes/ratingRoutes";
import reviewRoutes from "./routes/reviewRoutes";
import screeningRoutes from "./routes/screeningRoutes";
import snackRoutes from "./routes/snackRoutes";
import ticketRoutes from "./routes/ticketRoutes";
import usersRoutes from "./routes/usersRoutes";
import userAddressRoutes from "./routes/userAddressRoutes";

const app = express();
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/booking", bookingRoutes);
app.use("/cinemaHall", cinemaHallRoutes);
app.use("/discount", discountRoutes);
app.use("/film", filmRoutes);
app.use("/filmActor", filmActorRoutes);
app.use("/filmDirector", filmDirectorRoutes);
app.use("/genre", genreRoutes);
app.use("/location", locationRoutes);
app.use("/memberships", membershipRoutes);
app.use("/subscriptions", newsletterSubscriptionRoutes);
app.use("/payments", paymentRoutes);
app.use("/user-payment-methods", userPaymentMethodRoutes);
app.use("/promotions", promotionRoutes);
app.use("/ratings", ratingRoutes);
app.use("/reviews", reviewRoutes);
app.use("/screenings", screeningRoutes);
app.use("/snacks", snackRoutes);
app.use("/ticket", ticketRoutes);
app.use("/users", usersRoutes);
app.use("/userAddress", userAddressRoutes);
export default app;
