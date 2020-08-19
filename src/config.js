export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-college"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://yzf9i9et8c.execute-api.us-east-1.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_IYhs2sNAp",
    APP_CLIENT_ID: "709lnums4hqsiujl3494kh4aml",
    IDENTITY_POOL_ID: "us-east-1:e94ecb15-b1c2-4727-9cf8-1ecb7f5ccd8e"
  }
};
