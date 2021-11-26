export default {
  type: "object",
  properties: {
    credentials: { type: "string" },
  },
  required: ["credentials"],
} as const;
