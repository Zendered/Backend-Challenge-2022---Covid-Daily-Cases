import 'module-alias/register';
import { app } from './config/app';

app.listen(3333, () => {
  console.log('server on!');
});
