import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters long"],
        maxLength: [100, "Name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        required: [true, "Plan is required"],
        min: [0, "Price cannot be negative"]
    },
    currency: {
        type: String,
        enum: ["USD", "EUR", "GBP", "INR"],
        default: "USD"
    },
    frequency: {
        type: String,
        enum: ["daily","weekly","monthly", "yearly"],
        default: "monthly"
    },
    category: {
        type: String,
        enum: ["sports","entertainment", "education", "productivity", "health", "other"],
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ["active","expired","cancelled"],
        default: "active"
    },
    startDate: {
        type: Date,
        required: [true, "Start date is required"],
        validate: {
            validator: function(value) {
                return value <= new Date();
            },
            message: "Start date cannot be in the future"
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function(value) {
                return value >= this.startDate;
            },
            message: "End date cannot be before start date"
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    }
}, { timestamps: true });

//Auto-calculate renewalDate based on frequency and startDate
subscriptionSchema.pre('save', function(next) {
    if (!this.renewalDate) {
        const renewalPeriods = {
            "daily": 1,
            "weekly": 7,
            "monthly": 30,
            "yearly": 365
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
    if (this.renewalDate < new Date()) {
        this.status = "expired";
    }
    next();
});



const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;