import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { PrismaClient } from "@prisma/client"

const port: number = 3434;
// const foo = async () => {
//   const bar = await prisma.user.findMany();
//   // do smt with bar
//   console.log(bar);
// };
async function bootstrap() {
	// const test = await foo();
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
