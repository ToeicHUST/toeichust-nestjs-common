import { SWAGGER_DOCS_PATH } from 'src/constants/swagger.constant';

export function logAppBootstrap(port: number | string) {
  // console.log('='.repeat(80));

  console.log(`ENVIRONMENT: ${process.env.ENVIRONMENT}`);
  console.log(`NAME: ${process.env.NAME}`);
  console.log(`PORT: ${port}`);
  console.log(
    `Application is running on: http://toeicHUST.local:${port}/${SWAGGER_DOCS_PATH}`,
  );
  console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);

  // console.log('='.repeat(80));
}
