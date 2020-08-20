
const dev = {
  STRIPE_KEY: "pk_test_51HHaBSC0Kb9akMtgzlY8stFVKkJWDev62FjoIdhlhvXGz5SpiGgbSCNotY4DrNtBT8ZN6EQKJuqcyUjILISw5BQ500bLg6S6Jc",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1ln0gq0aad7hi"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://flnewdffnh.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_lhcz4bWqz",
    APP_CLIENT_ID: "5ghvhupnf96f97oafnt4vogg24",
    IDENTITY_POOL_ID: "us-east-1:68fea79b-0b70-444c-a310-5fdbbe928b5c"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HHaBSC0Kb9akMtgzlY8stFVKkJWDev62FjoIdhlhvXGz5SpiGgbSCNotY4DrNtBT8ZN6EQKJuqcyUjILISw5BQ500bLg6S6Jc",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-dbzxw34ysvz4"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://g45blmy37b.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_bFaCvdfQQ",
    APP_CLIENT_ID: "2app21mb3atp3jvtvtb9nlcid",
    IDENTITY_POOL_ID: "us-east-1:3d639836-510b-43a8-8277-a9e482d3ff43"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};