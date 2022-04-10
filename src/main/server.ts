import 'module-alias/register';
import 'dotenv/config';
import { MongoHelper } from '@/infra/repository/mongodb/helper';

MongoHelper.connect(`${process.env.PROD_MONGO_URL}`)
  .then(async () => {
    const { app } = await import('@/main/config/app');
    app.listen(3333, () => console.log('Server running'));
  })
  .catch(console.error);
