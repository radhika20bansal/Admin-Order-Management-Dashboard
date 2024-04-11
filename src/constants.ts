export const orderConstants = {
  status: {
    success: {
      value: "success",
      styles:
        "border py-1 px-4 rounded-2xl border-green-600 text-green-600 font-medium",
      label: "Success",
    },
    failure: {
      value: "failure",
      styles:
        "border py-1 px-4 rounded-2xl border-red-600 text-red-600 font-medium",
      label: "Failure",
    },
    pending: {
      value: "pending",
      styles:
        "border py-1 px-4 rounded-2xl border-yellow-600 text-yellow-600 font-medium",
      label: "Pending",
    },
    sent: {
      value: "sent",
      styles:
        "border py-1 px-4 rounded-2xl border-orange-600 text-orange-600 font-medium",
      label: "Sent",
    },
    refundInitiated: {
      value: "refund initiated",
      styles:
        "border py-1 px-4 rounded-2xl border-indigo-700 text-indigo-700 font-medium",
      label: "Refund Initiated",
    },
    refundCompleted: {
      value: "refund completed",
      styles:
        "border py-1 px-4 rounded-2xl border-purple-600 text-purple-600 font-medium",
      label: "Refund Completed",
    },
  },
};
