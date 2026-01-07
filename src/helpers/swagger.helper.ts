import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_DOCS_PATH } from 'src/constants/swagger.constant';

export interface SwaggerConfigOptions {
  name: string;
}

export function setupSwagger(
  app: INestApplication,
  options: SwaggerConfigOptions,
) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle(options.name)
    .setDescription(`API documentation for ${options.name}`)
    .setVersion('1.0.0')
    .setContact('vuvannghia.work@gmail.com', '', 'vuvannghia.work@gmail.com')
    // .addBearerAuth() // Thêm nếu bạn dùng JWT
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup(SWAGGER_DOCS_PATH, app, document, {
    jsonDocumentUrl: `${SWAGGER_DOCS_PATH}/json`,
    yamlDocumentUrl: `${SWAGGER_DOCS_PATH}/yaml`,
    customSiteTitle: options.name,
    customfavIcon: '/public/favicon.ico',
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      // docExpansion: 'none', // Thu gọn tất cả các tag lại khi mới mở trang
    },
  });
}
